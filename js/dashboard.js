/**
 * 審核人員專屬儀表板 - 核心邏輯 (dashboard.js)
 */

const DashboardApp = {
    charts: {
        trend: null,
        result: null,
        levelTrend: null // 新增分級折線圖實例
    },

    // 側邊欄收合邏輯同步
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar-panel');
        const toggleIcon = document.getElementById('toggle-icon');
        const userInfo = document.getElementById('sidebar-user-info');
        const texts = document.querySelectorAll('.sidebar-text');
        const navItems = document.querySelectorAll('nav > a');

        if (!sidebar) return;

        const isCollapsed = sidebar.classList.contains('w-20');

        if (!isCollapsed) {
            sidebar.classList.remove('w-64', 'p-4');
            sidebar.classList.add('w-20', 'p-2');
            if (userInfo) userInfo.classList.add('justify-center');
            texts.forEach(el => el.classList.add('hidden'));
            navItems.forEach(item => {
                item.classList.remove('justify-between');
                item.classList.add('justify-center');
                item.querySelector('i')?.classList.remove('mr-3');
            });
            if (toggleIcon) toggleIcon.className = 'fas fa-angle-right text-xs';
        } else {
            sidebar.classList.remove('w-20', 'p-2');
            sidebar.classList.add('w-64', 'p-4');
            if (userInfo) userInfo.classList.remove('justify-center');
            texts.forEach(el => el.classList.remove('hidden'));
            navItems.forEach(item => {
                item.classList.remove('justify-center');
                if (item.id === 'nav-all') item.classList.add('justify-between');
                item.querySelector('i')?.classList.add('mr-3');
            });
            if (toggleIcon) toggleIcon.className = 'fas fa-angle-left text-xs';
        }
    },

    init() {
        this.updateMetrics();
    },

    updateMetrics() {
        // 從 data.js 中取得 mockCases 作為資料來源
        const data = (typeof mockCases !== 'undefined') ? mockCases : [];

        // 統計各狀態數量 (模擬當日工作量)
        const pending = data.filter(c => c.status === 'pending').length;
        const verified = data.filter(c => c.status === 'verified').length;
        const canceled = data.filter(c => c.status === 'canceled' || c.status === 'cancelled' || c.status === 'rejected').length;

        const reviewed = verified + canceled;
        const total = pending + reviewed;

        // 計算比率
        const compRate = total === 0 ? 0 : ((reviewed / total) * 100).toFixed(1);
        const cancRate = reviewed === 0 ? 0 : ((canceled / reviewed) * 100).toFixed(1);

        // 更新 UI 數字
        document.getElementById('kpi-total').innerText = total;
        document.getElementById('kpi-pending').innerText = pending;
        document.getElementById('kpi-reviewed').innerText = reviewed;
        document.getElementById('kpi-comp-rate').innerText = compRate + '%';
        document.getElementById('kpi-cancel-rate').innerText = cancRate + '%';

        // 更新進度條寬度
        const bar = document.getElementById('kpi-comp-bar');
        if(bar) bar.style.width = compRate + '%';

        // 渲染三大圖表
        this.renderResultChart(verified, canceled);
        this.renderTrendChart();
        this.renderLevelTrendChart(data); // 執行分級動態折線圖
    },

    // 全新開發：三級分級動態折線圖 (每3小時分區統計)
    // 全新開發：三級分級動態折線圖 (近3天 72小時，每3小時分區統計，共 24 格)
    renderLevelTrendChart(data) {
        const ctx = document.getElementById('levelTrendChart');
        if (!ctx) return;
        if (this.charts.levelTrend) this.charts.levelTrend.destroy();

        // 1. 產生 72 小時 (共 24 格) 的 X 軸標籤
        const labels = [];
        for (let d = 2; d >= 0; d--) {
            const date = new Date();
            date.setDate(date.getDate() - d);
            const mmdd = `${date.getMonth() + 1}/${date.getDate()}`;
            // 每天的 8 個時段
            labels.push(
                `${mmdd} 00-03h`, `${mmdd} 03-06h`, `${mmdd} 06-09h`, `${mmdd} 09-12h`,
                `${mmdd} 12-15h`, `${mmdd} 15-18h`, `${mmdd} 18-21h`, `${mmdd} 21-24h`
            );
        }

        // 2. 初始化 24 格的數據計數器
        let highLine = new Array(24).fill(0); // 確信違規 (>=90)
        let midLine = new Array(24).fill(0);  // 疑似違規 (80-89)
        let lowLine = new Array(24).fill(0);  // 邊界案例 (<80)

        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        // 3. 解析 mockCases 內所有案件的時間與分級
        data.forEach(c => {
            const d = new Date(c.timestamp || c.date);
            if (isNaN(d.getTime())) return;

            const caseDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
            // 計算與今天的差距天數 (0=今天, 1=昨天, 2=前天)
            const diffDays = Math.round((today - caseDay) / (1000 * 60 * 60 * 24));

            if (diffDays >= 0 && diffDays <= 2) {
                // 將天數映射到 24 格中：前天(索引0~7)、昨天(索引8~15)、今天(索引16~23)
                const dayOffset = (2 - diffDays) * 8;
                const hourIdx = Math.floor(d.getHours() / 3);
                const finalIdx = dayOffset + hourIdx;

                const conf = c.confidence || 85;
                if (conf >= 90) {
                    highLine[finalIdx]++;
                } else if (conf >= 80) {
                    midLine[finalIdx]++;
                } else {
                    lowLine[finalIdx]++;
                }
            }
        });

        // 4. 防呆機制：若外部無真實時間資料，生成一組 3 天份的動態波動曲線
        const isAllZero = highLine.every(v => v === 0) && midLine.every(v => v === 0);
        if (isAllZero) {
            // 前天、昨天、今天的模擬尖離峰數據 (共 24 筆)
            highLine = [5, 8, 12, 20, 25, 18, 22, 10,  7, 10, 15, 28, 35, 20, 30, 15,  12, 6, 18, 32, 45, 28, 55, 22];
            midLine  = [2, 4, 6, 12, 15, 10, 14, 6,   3,  5,  8, 16, 20, 12, 18,  8,   8, 4, 12, 22, 26, 18, 35, 14];
            lowLine  = [1, 2, 3,  5,  8,  4,  6, 2,   1,  2,  4,  8, 10,  5,  8,  4,   4, 2,  6, 10, 12,  7, 15,  6];
        }

        // 建立滑順從左到右「動態延伸畫出」的 Delay 參數
        let animationDelayed = false;

        this.charts.levelTrend = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: '確信違規 (≥90%)',
                        data: highLine,
                        borderColor: '#10b981', // 綠色
                        backgroundColor: 'rgba(16, 185, 129, 0.05)',
                        borderWidth: 2.5,
                        tension: 0.35,
                        pointBackgroundColor: '#10b981',
                        pointRadius: 3, // 因為節點變多，稍微縮小圓點
                        fill: true
                    },
                    {
                        label: '疑似違規 (80-89%)',
                        data: midLine,
                        borderColor: '#f59e0b', // 黃色
                        backgroundColor: 'rgba(245, 158, 11, 0.05)',
                        borderWidth: 2.5,
                        tension: 0.35,
                        pointBackgroundColor: '#f59e0b',
                        pointRadius: 3,
                        fill: true
                    },
                    {
                        label: '邊界案例 (<80%)',
                        data: lowLine,
                        borderColor: '#ef4444', // 紅色
                        backgroundColor: 'rgba(239, 68, 68, 0.05)',
                        borderWidth: 2.5,
                        tension: 0.35,
                        pointBackgroundColor: '#ef4444',
                        pointRadius: 3,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    onComplete: () => { animationDelayed = true; },
                    delay: (context) => {
                        let delay = 0;
                        if (context.type === 'data' && context.mode === 'default' && !animationDelayed) {
                            // 配合節點變多，加快渲染速度，讓骨牌畫出特效更流暢
                            delay = context.dataIndex * 60 + context.datasetIndex * 150;
                        }
                        return delay;
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'end',
                        labels: { color: '#8b949e', font: { size: 11 }, boxWidth: 10, padding: 10 }
                    },
                    tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                    x: {
                        grid: { color: '#1f2937', borderDash: [2, 4] },
                        // X軸標籤太擠時，Chart.js 會自動隱藏部分標籤，這裡設定最多顯示所有節點
                        ticks: { color: '#8b949e', font: { size: 10 }, maxRotation: 45, minRotation: 45 }
                    },
                    y: {
                        grid: { color: '#1f2937' },
                        ticks: { color: '#8b949e', font: { size: 10 } },
                        beginAtZero: true
                    }
                }
            }
        });
    },

    renderResultChart(verified, canceled) {
        const ctx = document.getElementById('reviewResultChart');
        if (!ctx) return;
        if (this.charts.result) this.charts.result.destroy();

        const hasData = (verified + canceled) > 0;

        this.charts.result = new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ["已成立", "已撤銷"],
                datasets: [{
                    data: hasData ? [verified, canceled] : [1, 0],
                    backgroundColor: hasData ? ['#10b981', '#ef4444'] : ['#1f2937', '#1f2937'],
                    borderColor: '#0d1117',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: '#e6edf3', font: { size: 11 }, padding: 10 } },
                    tooltip: { enabled: hasData }
                },
                cutout: '70%'
            }
        });
    },

    renderTrendChart() {
        const ctx = document.getElementById('reviewTrendChart');
        if (!ctx) return;
        if (this.charts.trend) this.charts.trend.destroy();

        const labels = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            labels.push(`${d.getMonth() + 1}/${d.getDate()}`);
        }

        const fakeVerifiedData = [45, 52, 38, 60, 48, 55, parseInt(document.getElementById('kpi-reviewed').innerText) || 42];
        const fakeCanceledData = [5, 8, 3, 10, 6, 4, 5];

        this.charts.trend = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    { label: '案件成立', data: fakeVerifiedData, backgroundColor: 'rgba(16, 185, 129, 0.8)', borderRadius: 4 },
                    { label: '案件撤銷', data: fakeCanceledData, backgroundColor: 'rgba(239, 68, 68, 0.8)', borderRadius: 4 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                plugins: { legend: { position: 'top', align: 'end', labels: { color: '#8b949e', boxWidth: 12 } } },
                scales: {
                    x: { stacked: true, grid: { display: false }, ticks: { color: '#8b949e' } },
                    y: { stacked: true, grid: { color: '#1f2937' }, ticks: { color: '#8b949e' }, beginAtZero: true }
                }
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    DashboardApp.init();
});

window.app = {
    toggleSidebar: () => DashboardApp.toggleSidebar()
};