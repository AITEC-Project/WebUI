/**
 * ======================================================
 * API 數據模擬層 - 未來銜接 FastAPI 時僅需修改此處
 * ======================================================
 */
const MockData = {
    // 預定義的維度資料
    events: ["全部事件", "超速", "闖紅燈", "違規停車", "蛇行", "未禮讓行人"],
    locations: ["文心路/台灣大道", "崇德路/三民路", "公益路/美村路", "五權西路/忠明南路", "中清路/環中路", "西屯路/逢甲路"],

    /**
     * 模式一：分析特定事件在各個路口的發生頻率
     * @param {string} event - 違規事件類型
     * @param {string} range - 時間跨度 (24h, 7d, 30d)
     */
    async fetchLocationRank(event, range) {
        // 模擬網路延遲
        await new Promise(resolve => setTimeout(resolve, 300));

        // 根據時間跨度計算權重倍率
        const multiplier = range === '24h' ? 1 : (range === '7d' ? 6 : 24);

        // 模擬各路口對不同違規的「基礎頻率」
        const baseValues = {
            "全部事件": [142, 128, 95, 82, 77, 65],
            "超速": [85, 42, 30, 92, 110, 25],
            "闖紅燈": [45, 68, 52, 30, 41, 55],
            "違規停車": [12, 18, 120, 45, 10, 95],
            "蛇行": [5, 12, 8, 15, 22, 10],
            "未禮讓行人": [25, 35, 48, 20, 15, 50]
        };

        const rawData = baseValues[event] || baseValues["全部事件"];

        return {
            labels: this.locations,
            // 加入隨機擾動使圖表看起來更真實
            values: rawData.map(v => Math.floor(v * multiplier * (0.85 + Math.random() * 0.3)))
        };
    },

    /**
     * 模式二：分析特定路口的違規事件組成
     * @param {string} location - 路口名稱
     * @param {string} range - 時間跨度
     */
    async fetchEventRank(location, range) {
        await new Promise(resolve => setTimeout(resolve, 300));

        const multiplier = range === '24h' ? 1.5 : (range === '7d' ? 8 : 30);

        // 模擬特定路口的违规分佈特性
        let distribution = [0.35, 0.25, 0.15, 0.15, 0.1]; // 預設：超速 > 闖紅燈 > 違停 ...

        if (location.includes("環中路")) distribution = [0.55, 0.15, 0.05, 0.1, 0.15]; // 快速道路路口：超速極多
        if (location.includes("逢甲路")) distribution = [0.05, 0.15, 0.65, 0.1, 0.05]; // 商圈路口：違停極多
        if (location.includes("公益路")) distribution = [0.2, 0.2, 0.3, 0.25, 0.05]; // 餐廳區：違停與未禮讓行人多

        return {
            labels: ["超速", "闖紅燈", "違規停車", "未禮讓行人", "蛇行"],
            values: distribution.map(p => Math.floor(150 * p * multiplier * (0.9 + Math.random() * 0.2)))
        };
    }
};

/**
 * ======================================================
 * UI 渲染與圖表控制層
 * ======================================================
 */
let rankingChart = null;

/**
 * 更新儀表板數據與描述文字
 */
const updateDashboard = async () => {
    const mode = document.getElementById('analysis-mode').value;
    const filterValue = document.getElementById('secondary-filter').value;
    const timeRange = document.getElementById('time-range').value;
    const descElement = document.getElementById('analysis-desc');

    // 顯示讀取中狀態 (可選)
    descElement.innerText = "正在更新數據...";

    let chartData;
    if (mode === 'location-rank') {
        chartData = await MockData.fetchLocationRank(filterValue, timeRange);
        descElement.innerText = `目前顯示：[${filterValue}] 事件在各路口的頻率排行`;
    } else {
        chartData = await MockData.fetchEventRank(filterValue, timeRange);
        descElement.innerText = `目前顯示：[${filterValue}] 路口的違規事件類型分佈`;
    }

    renderRankingChart(chartData);
};

/**
 * 使用 Chart.js 繪製圖表
 */
const renderRankingChart = (data) => {
    const ctx = document.getElementById('rankingChart').getContext('2d');

    // 如果已有圖表則銷毀，避免重疊渲染
    if (rankingChart) {
        rankingChart.destroy();
    }

    // 建立藍色漸層效果
    const gradient = ctx.createLinearGradient(0, 0, 500, 0);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.7)');

    rankingChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: '偵測案件數',
                data: data.values,
                backgroundColor: gradient,
                borderColor: '#3b82f6',
                borderWidth: 1.5,
                borderRadius: 4,
                barThickness: 28
            }]
        },
        options: {
            indexAxis: 'y', // 水平條形圖
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#161b22',
                    titleColor: '#3b82f6',
                    borderColor: '#30363d',
                    borderWidth: 1,
                    padding: 12,
                    bodyFont: { family: 'Monaco, monospace' }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: { color: '#30363d', drawBorder: false },
                    ticks: { color: '#8b949e' }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: '#e6edf3', font: { size: 13, weight: '500' } }
                }
            }
        }
    });
};

/**
 * 切換模式時，動態更新第二個下拉選單的內容
 */
const handleModeChange = () => {
    const mode = document.getElementById('analysis-mode').value;
    const secondaryFilter = document.getElementById('secondary-filter');

    // 清空舊選項
    secondaryFilter.innerHTML = '';

    // 根據模式決定要顯示「事件清單」還是「路口清單」
    const options = mode === 'location-rank' ? MockData.events : MockData.locations;

    options.forEach(text => {
        const opt = document.createElement('option');
        opt.value = text;
        opt.innerText = text;
        secondaryFilter.appendChild(opt);
    });

    // 切換模式後立即更新數據
    updateDashboard();
};

/**
 * ======================================================
 * 初始化事件監聽
 * ======================================================
 */
document.addEventListener('DOMContentLoaded', () => {
    const modeSelect = document.getElementById('analysis-mode');
    const filterSelect = document.getElementById('secondary-filter');
    const timeSelect = document.getElementById('time-range');

    // 模式切換監聽 (路口排行 vs 事件排行)
    modeSelect.addEventListener('change', handleModeChange);

    // 篩選值與時間切換監聽
    filterSelect.addEventListener('change', updateDashboard);
    timeSelect.addEventListener('change', updateDashboard);

    // 啟動初始化：先觸發一次模式切換以填充第二選單並繪圖
    handleModeChange();
});