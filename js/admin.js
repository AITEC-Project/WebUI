/**
 * AI 交通違規管理系統 - 管理端核心邏輯 (admin.js)
 */

const adminApp = {
    // 管理端狀態
    state: {
        currentTab: 'dashboard'
    },

    init() {
        console.log("[管理系統] 初始化管理端模組...");
        this.switchTab('dashboard'); // 預設載入舊有的診斷儀表板
    },

    // 管理端選單切換
    // 管理端選單切換
    switchTab(tabName) {
        this.state.currentTab = tabName;

        // 更新選單 UI 樣式 (對齊新選單項目)
        const menus = ['devices', 'dashboard', 'history'];
        menus.forEach(m => {
            const el = document.getElementById(`menu-${m}`);
            if (!el) return;
            if (m === tabName) {
                el.className = "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition font-medium bg-gray-800 text-white";
                const icon = el.querySelector('i');
                if (icon) icon.className = icon.className.replace('text-gray-400', 'text-red-500');
            } else {
                el.className = "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition font-medium text-gray-400 hover:bg-gray-900 hover:text-white";
                const icon = el.querySelector('i');
                if (icon) icon.className = icon.className.replace('text-red-500', 'text-gray-400');
            }
        });

        // 根據 tab 渲染主內容
        const contentContainer = document.getElementById('admin-main-content');
        const titleEl = document.getElementById('admin-page-title');

        if (tabName === 'dashboard') {
            titleEl.innerHTML = `<i class="fas fa-chart-pie text-red-500"></i> 數據儀表版`;

            // 渲染數據儀表板核心區 (維持你原本優美的 Chart 結構)
            contentContainer.innerHTML = `
                <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div class="bg-[#0d1117] p-5 rounded-xl border border-gray-800">
                    <p class="text-gray-500 text-xs font-bold uppercase mb-2">今日通報總數</p>
                    <p id="stat-total" class="text-3xl font-extrabold text-blue-500">-</p>
                  </div>
                  <div class="bg-[#0d1117] p-5 rounded-xl border border-gray-800">
                    <p class="text-gray-500 text-xs font-bold uppercase mb-2">當日 AI 辨識率</p>
                    <p id="stat-ai-rate" class="text-3xl font-extrabold text-emerald-500">-</p>
                  </div>
                  <div class="bg-[#0d1117] p-5 rounded-xl border border-gray-800">
                    <p class="text-gray-500 text-xs font-bold uppercase mb-2">路口撤銷量異常偵測</p>
                    <div id="stat-cancel-anomaly" class="space-y-1 text-sm text-gray-400">載入中...</div>
                  </div>
                  <div class="bg-[#0d1117] p-5 rounded-xl border border-gray-800">
                    <p class="text-gray-500 text-xs font-bold uppercase mb-2">路口違規樣態異常偵測</p>
                    <div id="stat-type-anomaly" class="space-y-1 text-sm text-gray-400">載入中...</div>
                  </div>
                </section>

                <div class="grid grid-cols-12 gap-6 mb-8">
                    <div class="col-span-12 lg:col-span-7 bg-[#0d1117] p-6 rounded-xl border border-gray-800">
                      <h3 class="text-md font-bold mb-4">前五名違規熱點路口</h3>
                      <div class="h-[300px]"><canvas id="rankingChart"></canvas></div>
                    </div>
                    <div class="col-span-12 lg:col-span-5 bg-[#0d1117] p-6 rounded-xl border border-gray-800">
                      <h3 class="text-md font-bold mb-4">前五名違規樣態比例</h3>
                      <div class="h-[300px]"><canvas id="typeChart"></canvas></div>
                    </div>
                </div>
            `;

            setTimeout(() => { this.initDashboardCharts(); }, 50);

        } else if (tabName === 'devices') {
            titleEl.innerHTML = `<i class="fas fa-server text-red-500"></i> 設備運作管理`;
            contentContainer.innerHTML = `
                <div class="bg-[#0d1117] p-6 rounded-xl border border-gray-800 text-center text-gray-400 py-20">
                    <i class="fas fa-microchip text-4xl mb-4 text-gray-600"></i>
                    <p>後台邊緣運算設備 (Edge Device) 與 IP Cam 串流連線狀態管理功能開發中...</p>
                </div>`;
        }
    },

    // 新增：管理端側邊欄收摺邏輯
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar-panel');
        const toggleIcon = document.getElementById('toggle-icon');
        const sidebarTexts = document.querySelectorAll('.sidebar-text');

        if (!sidebar) return;

        // 檢查當前是否已經收起
        const isCollapsed = sidebar.classList.contains('w-16');

        if (isCollapsed) {
            // 展開側邊欄
            sidebar.classList.remove('w-16', 'p-2');
            sidebar.classList.add('w-64', 'p-4');
            if (toggleIcon) toggleIcon.className = 'fas fa-angle-left text-xs';

            // 延遲顯示文字，讓動畫更平滑
            setTimeout(() => {
                sidebarTexts.forEach(el => el.style.display = '');
            }, 150);
        } else {
            // 收起側邊欄
            sidebar.classList.remove('w-64', 'p-4');
            sidebar.classList.add('w-16', 'p-2');
            if (toggleIcon) toggleIcon.className = 'fas fa-angle-right text-xs';

            // 立刻隱藏文字
            sidebarTexts.forEach(el => el.style.display = 'none');
        }
    },

    initDashboardCharts() {
        // 今日通報總數與辨識率
        document.getElementById('stat-total').innerText = "1,248 件";
        document.getElementById('stat-ai-rate').innerText = "94.2 %";
        document.getElementById('stat-cancel-anomaly').innerHTML = "<span class='text-red-400 font-bold'>⚠️ 逢甲路口</span> 撤銷率超出標準 15%";
        document.getElementById('stat-type-anomaly').innerHTML = "<span class='text-yellow-400 font-bold'>⚡ 台灣大道</span> 闖紅燈比例突然暴增";

        // 渲染熱點路口圖表
        const ctxRanking = document.getElementById('rankingChart');
        if (ctxRanking) {
            new Chart(ctxRanking.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ["西屯/逢甲", "文心/台灣大道", "崇德/漢口", "五權/忠明", "三民/精武"],
                    datasets: [{ data: [320, 280, 210, 190, 130], backgroundColor: '#3b82f6', barThickness: 24 }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
            });
        }

        // 渲染樣態圖表
        const ctxType = document.getElementById('typeChart');
        if (ctxType) {
            new Chart(ctxType.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ["闖紅燈", "未禮讓行人", "違規左轉", "超速", "不依標誌"],
                    datasets: [{ data: [40, 25, 15, 12, 8], backgroundColor: ['#ef4444', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6'] }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }
    }
};

// 頁面載入完成後啟動管理後台
document.addEventListener('DOMContentLoaded', () => {
    adminApp.init();
});