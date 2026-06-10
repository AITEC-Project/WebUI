/**
 * AI 交通違規管理系統 - 管理端核心邏輯 (admin.js)
 */

// --- 整合 Dashboard 圖表與資料邏輯 ---
let simulatedLiveCases = [];
let liveFlowChart = null, liveMap = null, markersLayer = null;
let rankingChart = null, typePieChart = null, heatmapChart = null;
let simStarted = false;

const AdminDataSimulator = {
    locations: [
        { name: "西屯路/逢甲路", lat: 24.1786, lng: 120.6450 },
        { name: "文心路/台灣大道", lat: 24.1617, lng: 120.6467 },
        { name: "崇德路/漢口路", lat: 24.1661, lng: 120.6853 },
        { name: "五權西路/忠明南路", lat: 24.1378, lng: 120.6592 },
        { name: "三民路/精武路", lat: 24.1485, lng: 120.6841 },
        { name: "公益路/美村路", lat: 24.1512, lng: 120.6625 },
        { name: "台灣大道/廣三SOGO", lat: 24.1556, lng: 120.6631 }
    ],
    types: ["闖紅燈", "未禮讓行人", "違規左轉", "超速", "不依標誌指示"],

    generateOne() {
        const loc = this.locations[Math.floor(Math.random() * this.locations.length)];
        return {
            id: `SIM-${Date.now()}`,
            location: loc.name,
            lat: loc.lat + (Math.random() - 0.5) * 0.008,
            lng: loc.lng + (Math.random() - 0.5) * 0.008,
            type: this.types[Math.floor(Math.random() * this.types.length)],
            timestamp: new Date(),
            confidence: Math.floor(Math.random() * 15) + 84
        };
    },

    start() {
        for(let i=0; i<8; i++) simulatedLiveCases.push(this.generateOne());
        const loop = () => {
            const nextTime = Math.random() * 5000 + 3000;
            setTimeout(() => {
                simulatedLiveCases.push(this.generateOne());
                const limit = new Date(Date.now() - 30 * 60000);
                simulatedLiveCases = simulatedLiveCases.filter(c => c.timestamp > limit);
                // 只有當前停留在 Dashboard 頁面時才重新渲染畫面
                if (document.getElementById('liveFlowChart')) {
                    AdminRenderers.refreshLivePanel();
                }
                loop();
            }, nextTime);
        };
        loop();
    }
};

const AdminDashboardLogic = {
    baseDate: new Date(),
    getFilteredData(range) {
        const data = (typeof mockCases !== 'undefined') ? mockCases : (window.SHARED_HISTORY_DATA || []);
        return data.filter(item => {
            const itemDate = new Date(item.timestamp || item.date);
            const diffDays = (this.baseDate - itemDate) / (1000 * 60 * 60 * 24);
            if (range === '24h') return diffDays <= 1;
            if (range === '7d') return diffDays <= 7;
            if (range === '30d') return diffDays <= 30;
            return true;
        });
    },
    getRecentData() {
        const data = (typeof mockCases !== 'undefined') ? mockCases : (window.SHARED_HISTORY_DATA || []);
        const now = new Date();
        const recentHistory = data.filter(item => {
            const itemDate = new Date(item.timestamp || item.date);
            const diffMinutes = (now - itemDate) / (1000 * 60);
            return diffMinutes >= 0 && diffMinutes <= 30;
        });
        return [...recentHistory, ...simulatedLiveCases];
    },
    getLiveTypeStats() {
        const counts = this.getRecentData().reduce((acc, curr) => {
            const type = curr.type || '未分類';
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        return { labels: sorted.map(i => i[0]), values: sorted.map(i => i[1]) };
    },
    getTopLocations(range = '30d') {
        const counts = this.getFilteredData(range).reduce((acc, curr) => {
            acc[curr.location] = (acc[curr.location] || 0) + 1;
            return acc;
        }, {});
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
        return { labels: sorted.map(i => i[0]), values: sorted.map(i => i[1]) };
    },
    getTopViolationTypes(range = '30d') {
        const counts = this.getFilteredData(range).reduce((acc, curr) => {
            const type = curr.type || '未分類';
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
        return { labels: sorted.map(i => i[0]), values: sorted.map(i => i[1]) };
    },
    getGlobalHourlyTrend(range = '30d') {
        const hours = new Array(24).fill(0);
        this.getFilteredData(range).forEach(item => {
            const h = new Date(item.timestamp || item.date).getHours();
            hours[h]++;
        });
        return hours;
    },
    updateSummaryStats() {
        const data = this.getFilteredData('30d');
        if (!data || data.length === 0) return;

        let globalCanceled = 0;
        const locStats = {};
        const globalTypeCounts = {};

        data.forEach(item => {
            const { location, type, status } = item;
            const isCanceled = (status === 'cancelled' || status === 'canceled' || status === 'rejected');
            globalTypeCounts[type] = (globalTypeCounts[type] || 0) + 1;
            if (isCanceled) globalCanceled++;

            if (!locStats[location]) locStats[location] = { total: 0, canceled: 0, types: {} };
            locStats[location].total++;
            if (isCanceled) locStats[location].canceled++;
            locStats[location].types[type] = (locStats[location].types[type] || 0) + 1;
        });

        // Update Average Rate
        const avgRateEl = document.getElementById('stat-avg-rate');
        if (avgRateEl) {
            avgRateEl.innerHTML = `
                <div class="flex flex-col">
                    <span class="text-2xl font-bold text-white">每 5 分鐘 / 筆</span>
                    <span class="text-[10px] text-gray-500 font-normal mt-1">基準: 0.2 CPM</span>
                </div>`;
        }

        // Update Cancel Rate
        const cancelRateEl = document.getElementById('stat-cancel-rate');
        if (cancelRateEl) {
            const globalCancelRate = ((globalCanceled / data.length) * 100).toFixed(1);
            cancelRateEl.innerHTML = `
                <div class="flex flex-col">
                    <span class="text-2xl font-bold ${globalCancelRate > 5 ? 'text-orange-400' : 'text-white'}">${globalCancelRate}%</span>
                    <span class="text-[10px] text-gray-500 font-normal mt-1">目標: < 5.0%</span>
                </div>`;
        }

        // Update Anomalies
        const volAnomalyEl = document.getElementById('stat-vol-anomaly');
        if (volAnomalyEl) {
            volAnomalyEl.innerHTML = `<div class="flex justify-between items-center"><span class="text-[13px] text-gray-300 mr-2">西屯路/逢甲路</span><span class="text-[11px] font-bold text-red-400">高於平均 1.4x</span></div>`;
        }

        const cancelAnomalyEl = document.getElementById('stat-cancel-anomaly');
        if (cancelAnomalyEl) {
            cancelAnomalyEl.innerHTML = `<div class="flex justify-between items-center"><span class="text-[13px] text-gray-300 mr-2">文心路/台灣大道</span><span class="text-[11px] font-bold text-orange-400">撤銷偏高 1.8x</span></div>`;
        }

        const typeAnomalyEl = document.getElementById('stat-type-anomaly');
        if (typeAnomalyEl) {
            typeAnomalyEl.innerHTML = `
            <div class="flex flex-col mb-1 border-b border-gray-800 pb-1">
                <div class="flex justify-between">
                    <span class="text-[11px] text-blue-400 font-bold">闖紅燈</span>
                    <span class="text-[11px] text-red-400">偏高 2.1x</span>
                </div>
                <span class="text-[11px] text-gray-500 truncate">三民路/精武路</span>
            </div>`;
        }
    }
};

const AdminRenderers = {
    refreshLivePanel() {
        this.renderLiveFlowChart(AdminDashboardLogic.getLiveTypeStats());
        this.updateLiveMapMarkers();
    },
    initLiveMap() {
        const mapEl = document.getElementById('live-map');
        if (!mapEl) return;
        liveMap = L.map('live-map', { zoomControl: false }).setView([24.162, 120.647], 13);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(liveMap);
        markersLayer = L.layerGroup().addTo(liveMap);
    },
    updateLiveMapMarkers() {
        if (!markersLayer) return;
        markersLayer.clearLayers();
        AdminDashboardLogic.getRecentData().forEach(item => {
            const lat = item.lat || (24.14 + Math.random() * 0.05);
            const lng = item.lng || (120.63 + Math.random() * 0.04);
            L.circleMarker([lat, lng], {
                radius: 8, fillColor: '#ff4d4d', color: '#fff', weight: 1, opacity: 0.8, fillOpacity: 0.6
            }).bindPopup(`<b>${item.location}</b><br>${item.type}`).addTo(markersLayer);
        });
    },
    renderLiveFlowChart(data) {
        const ctx = document.getElementById('liveFlowChart');
        if (!ctx) return;
        if (liveFlowChart) liveFlowChart.destroy();
        liveFlowChart = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{ data: data.values, backgroundColor: 'rgba(59, 130, 246, 0.5)', borderColor: '#3b82f6', borderWidth: 1, borderRadius: 4 }]
            },
            options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { color: '#1f2937' }, ticks: { color: '#8b949e', font: { size: 10 } }, beginAtZero: true }, y: { grid: { display: false }, ticks: { color: '#e6edf3', font: { size: 12, weight: 'bold' } } } } }
        });
    },
    renderRankingChart(data) {
        const ctx = document.getElementById('rankingChart');
        if (!ctx) return;
        if (rankingChart) rankingChart.destroy();
        const chartCtx = ctx.getContext('2d');
        const gradient = chartCtx.createLinearGradient(0, 0, 600, 0);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.7)');
        rankingChart = new Chart(chartCtx, {
            type: 'bar',
            data: { labels: data.labels, datasets: [{ label: '案件數量', data: data.values, backgroundColor: gradient, borderColor: '#3b82f6', borderWidth: 1, borderRadius: 4 }] },
            options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { color: '#1f2937' }, ticks: { color: '#8b949e' }, beginAtZero: true }, y: { grid: { display: false }, ticks: { color: '#e6edf3', font: { weight: 'bold' } } } } }
        });
    },
    renderTypePieChart(data) {
        const ctx = document.getElementById('typePieChart');
        if (!ctx) return;
        if (typePieChart) typePieChart.destroy();
        typePieChart = new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: { labels: data.labels, datasets: [{ data: data.values, backgroundColor: ['rgba(59, 130, 246, 0.7)', 'rgba(16, 185, 129, 0.7)', 'rgba(245, 158, 11, 0.7)', 'rgba(239, 68, 68, 0.7)', 'rgba(139, 92, 246, 0.7)'], borderColor: '#0d1117', borderWidth: 2 }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { color: '#e6edf3', font: { size: 12 }, padding: 20 } } }, cutout: '60%' }
        });
    },
    renderHeatmap(hourlyData) {
        const ctx = document.getElementById('timeHeatmap');
        if (!ctx) return;
        if (heatmapChart) heatmapChart.destroy();
        heatmapChart = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: { labels: Array.from({length: 24}, (_, i) => `${i}h`), datasets: [{ data: hourlyData, borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.1)', fill: true, tension: 0.4, pointRadius: 2, pointBackgroundColor: '#3b82f6' }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { display: false, beginAtZero: true }, x: { grid: { color: '#1f2937' }, ticks: { color: '#666', font: { size: 10 } } } } }
        });
    },
    updateDashboard() {
        this.refreshLivePanel();
        this.renderRankingChart(AdminDashboardLogic.getTopLocations('30d'));
        this.renderTypePieChart(AdminDashboardLogic.getTopViolationTypes('30d'));
        this.renderHeatmap(AdminDashboardLogic.getGlobalHourlyTrend('30d'));
        AdminDashboardLogic.updateSummaryStats();
    }
};

// --- 管理系統主邏輯 ---
window.adminApp = {
    state: {
        currentTab: 'dashboard'
    },

    init() {
        this.switchTab('dashboard');
    },

    switchTab(tabName) {
        // 如果離開 Dashboard 頁面，需清理地圖與圖表實例，避免下次載入衝突
        if (this.state.currentTab === 'dashboard' && tabName !== 'dashboard') {
            if (liveMap) { liveMap.remove(); liveMap = null; }
            if (liveFlowChart) { liveFlowChart.destroy(); liveFlowChart = null; }
            if (rankingChart) { rankingChart.destroy(); rankingChart = null; }
            if (typePieChart) { typePieChart.destroy(); typePieChart = null; }
            if (heatmapChart) { heatmapChart.destroy(); heatmapChart = null; }
        }

        this.state.currentTab = tabName;

        const menus = ['devices', 'dashboard', 'history'];
        menus.forEach(m => {
            const el = document.getElementById(`menu-${m}`);
            if (!el) return;

            if (m === tabName) {
                el.classList.add('sidebar-active', 'text-red-400');
                el.classList.remove('text-gray-400', 'hover:bg-gray-800', 'hover:text-white');
                const icon = el.querySelector('i');
                if (icon) { icon.classList.remove('text-gray-400'); icon.classList.add('text-red-500'); }
            } else {
                el.classList.remove('sidebar-active', 'text-red-400');
                el.classList.add('text-gray-400', 'hover:bg-gray-800', 'hover:text-white');
                const icon = el.querySelector('i');
                if (icon) { icon.classList.remove('text-red-500'); icon.classList.add('text-gray-400'); }
            }
        });

        const contentContainer = document.getElementById('admin-main-content');
        const titleEl = document.getElementById('admin-page-title');

        if (tabName === 'dashboard') {
            titleEl.innerHTML = `<i class="fas fa-chart-pie text-red-500"></i> AI 交通診斷儀表板`;

            // 完整貼入審查人員 Dashboard.html 的結構
            contentContainer.innerHTML = `
                <section class="mb-10">
                    <div class="flex items-center space-x-3 mb-6">
                        <span class="relative flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <h2 class="text-xl font-bold tracking-widest text-white">即時案件監控 (LIVE)</h2>
                    </div>

                    <div class="grid grid-cols-12 gap-8">
                        <div class="col-span-12 lg:col-span-5 bg-[#0d1117] p-6 rounded-xl border border-blue-500/30 bg-blue-900/5">
                            <h3 class="text-sm font-bold text-blue-400 uppercase mb-6 flex items-center">
                                <i class="fas fa-stream mr-2"></i> 30min 違規樣態即時排行
                            </h3>
                            <div class="h-[350px]">
                                <canvas id="liveFlowChart"></canvas>
                            </div>
                        </div>

                        <div class="col-span-12 lg:col-span-7 bg-[#0d1117] p-6 rounded-xl border border-gray-800">
                            <h3 class="text-sm font-bold text-gray-400 uppercase mb-6 flex items-center">
                                <i class="fas fa-map-marked-alt mr-2"></i> 台中市即時違規熱點
                            </h3>
                            <div id="live-map"></div>
                        </div>
                    </div>
                </section>

                <section class="mb-10">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="w-3 h-3 rounded-full bg-blue-500"></div>
                        <h2 class="text-xl font-bold tracking-widest text-white">案件統計數據 (已審核)</h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div class="bg-[#0d1117] p-5 rounded-xl border border-gray-800">
                            <p class="text-gray-500 text-xs font-bold uppercase mb-2">平均案件量 (30d)</p>
                            <div id="stat-avg-rate"></div>
                        </div>
                        <div class="bg-[#0d1117] p-5 rounded-xl border border-gray-800">
                            <p class="text-gray-500 text-xs font-bold uppercase mb-2">平均撤銷率 (30d)</p>
                            <div id="stat-cancel-rate"></div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-[#0d1117] p-5 rounded-xl border border-gray-800">
                            <p class="text-gray-500 text-xs font-bold uppercase mb-2 text-blue-400">路口違規量異常偵測</p>
                            <div id="stat-vol-anomaly" class="space-y-3"></div>
                        </div>
                        <div class="bg-[#0d1117] p-5 rounded-xl border border-gray-800">
                            <p class="text-gray-500 text-xs font-bold uppercase mb-2 text-blue-400">路口撤銷量異常偵測</p>
                            <div id="stat-cancel-anomaly" class="space-y-3"></div>
                        </div>
                        <div class="bg-[#0d1117] p-5 rounded-xl border border-gray-800">
                            <p class="text-gray-500 text-xs font-bold uppercase mb-2 text-blue-400">路口違規樣態異常偵測</p>
                            <div id="stat-type-anomaly" class="space-y-3"></div>
                        </div>
                    </div>
                </section>

                <div class="grid grid-cols-12 gap-8 mb-8">
                    <div class="col-span-12 lg:col-span-7 bg-[#0d1117] p-6 rounded-xl border border-gray-800">
                        <h3 class="text-lg font-bold mb-6 text-white">前五名違規熱點路口</h3>
                        <div class="h-[350px]">
                            <canvas id="rankingChart"></canvas>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-5 bg-[#0d1117] p-6 rounded-xl border border-gray-800">
                        <h3 class="text-lg font-bold mb-6 text-white">前五名違規樣態分析</h3>
                        <div class="h-[350px]">
                            <canvas id="typePieChart"></canvas>
                        </div>
                    </div>
                </div>

                <div class="bg-[#0d1117] p-6 rounded-xl border border-gray-800 mb-8">
                    <h3 class="text-lg font-bold mb-6 text-white">全域 24h 違規時段分布趨勢</h3>
                    <div class="h-[250px]">
                        <canvas id="timeHeatmap"></canvas>
                    </div>
                </div>
            `;

            // HTML 注入後執行圖表初始化
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
                const i = item.querySelector('i');
                if (i) i.classList.remove('mr-3');
            });
            if (toggleIcon) {
                toggleIcon.classList.remove('fa-angle-left');
                toggleIcon.classList.add('fa-angle-right');
            }
        } else {
            sidebar.classList.remove('w-20', 'p-2');
            sidebar.classList.add('w-64', 'p-4');
            if (userInfo) userInfo.classList.remove('justify-center');
            texts.forEach(el => el.classList.remove('hidden'));
            navItems.forEach(item => {
                item.classList.remove('justify-center');
                const i = item.querySelector('i');
                if (i) i.classList.add('mr-3');
            });
            if (toggleIcon) {
                toggleIcon.classList.remove('fa-angle-right');
                toggleIcon.classList.add('fa-angle-left');
            }
        }
    },

    initDashboardCharts() {
        try {
            AdminRenderers.initLiveMap();
            AdminRenderers.updateDashboard();
            if (!simStarted) {
                AdminDataSimulator.start();
                simStarted = true;
            }
        } catch (error) {
            console.error("圖表或地圖渲染失敗:", error);
        }
    }
};

window.app = window.adminApp;

document.addEventListener('DOMContentLoaded', () => {
    window.adminApp.init();
});