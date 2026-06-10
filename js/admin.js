/**
 * AI 交通違規管理系統 - 儀表板圖表邏輯 (admin.js)
 */

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
        { name: "三民路/精武路", lat: 24.1485, lng: 120.6841 }
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
            timestamp: new Date()
        };
    },

    start() {
        for(let i=0; i<8; i++) simulatedLiveCases.push(this.generateOne());
        const loop = () => {
            setTimeout(() => {
                simulatedLiveCases.push(this.generateOne());
                const limit = new Date(Date.now() - 30 * 60000);
                simulatedLiveCases = simulatedLiveCases.filter(c => c.timestamp > limit);
                if (document.getElementById('liveFlowChart')) {
                    AdminRenderers.refreshLivePanel();
                }
                loop();
            }, Math.random() * 5000 + 3000);
        };
        loop();
    }
};

const AdminDashboardLogic = {
    getTopLocations() { return { labels: ["西屯/逢甲", "文心/台灣大道", "崇德/漢口", "五權/忠明", "三民/精武"], values: [320, 280, 210, 190, 130] }; },
    getTopViolationTypes() { return { labels: ["闖紅燈", "未禮讓行人", "違規左轉", "超速", "不依標誌"], values: [40, 25, 15, 12, 8] }; },
    getGlobalHourlyTrend() { return [12, 8, 5, 4, 10, 25, 60, 90, 85, 60, 50, 45, 55, 65, 70, 60, 80, 110, 105, 70, 50, 30, 20, 15]; },
    updateSummaryStats() {
        if(document.getElementById('stat-avg-rate')) document.getElementById('stat-avg-rate').innerHTML = `<div class="flex flex-col"><span class="text-2xl font-bold text-white">每 5 分鐘 / 筆</span><span class="text-[10px] text-gray-500 font-normal mt-1">基準: 0.2 CPM</span></div>`;
        if(document.getElementById('stat-cancel-rate')) document.getElementById('stat-cancel-rate').innerHTML = `<div class="flex flex-col"><span class="text-2xl font-bold text-orange-400">8.5%</span><span class="text-[10px] text-gray-500 font-normal mt-1">目標: < 5.0%</span></div>`;
        if(document.getElementById('stat-vol-anomaly')) document.getElementById('stat-vol-anomaly').innerHTML = `<div class="flex justify-between items-center"><span class="text-[13px] text-gray-300 mr-2">西屯路/逢甲路</span><span class="text-[11px] font-bold text-red-400">高於平均 1.4x</span></div>`;
        if(document.getElementById('stat-cancel-anomaly')) document.getElementById('stat-cancel-anomaly').innerHTML = `<div class="flex justify-between items-center"><span class="text-[13px] text-gray-300 mr-2">文心路/台灣大道</span><span class="text-[11px] font-bold text-orange-400">撤銷偏高 1.8x</span></div>`;
        if(document.getElementById('stat-type-anomaly')) document.getElementById('stat-type-anomaly').innerHTML = `<div class="flex flex-col mb-1 border-b border-gray-800 pb-1"><div class="flex justify-between"><span class="text-[11px] text-blue-400 font-bold">闖紅燈</span><span class="text-[11px] text-red-400">偏高 2.1x</span></div><span class="text-[11px] text-gray-500 truncate">三民路/精武路</span></div>`;
    },
    getLiveTypeStats() {
        const counts = simulatedLiveCases.reduce((acc, curr) => { acc[curr.type] = (acc[curr.type] || 0) + 1; return acc; }, {});
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        return { labels: sorted.map(i => i[0]), values: sorted.map(i => i[1]) };
    }
};

const AdminRenderers = {
    refreshLivePanel() {
        this.renderLiveFlowChart(AdminDashboardLogic.getLiveTypeStats());
        this.updateLiveMapMarkers();
    },
    initLiveMap() {
        const mapEl = document.getElementById('live-map');
        if (!mapEl || liveMap) return;
        liveMap = L.map('live-map', { zoomControl: false }).setView([24.162, 120.647], 13);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(liveMap);
        markersLayer = L.layerGroup().addTo(liveMap);
    },
    updateLiveMapMarkers() {
        if (!markersLayer) return;
        markersLayer.clearLayers();
        simulatedLiveCases.forEach(item => {
            L.circleMarker([item.lat, item.lng], { radius: 8, fillColor: '#ff4d4d', color: '#fff', weight: 1, opacity: 0.8, fillOpacity: 0.6 }).bindPopup(`<b>${item.location}</b><br>${item.type}`).addTo(markersLayer);
        });
    },
    renderLiveFlowChart(data) {
        const ctx = document.getElementById('liveFlowChart');
        if (!ctx) return;
        if (liveFlowChart) liveFlowChart.destroy();
        liveFlowChart = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: { labels: data.labels, datasets: [{ data: data.values, backgroundColor: 'rgba(59, 130, 246, 0.5)', borderColor: '#3b82f6', borderWidth: 1, borderRadius: 4 }] },
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
        this.renderRankingChart(AdminDashboardLogic.getTopLocations());
        this.renderTypePieChart(AdminDashboardLogic.getTopViolationTypes());
        this.renderHeatmap(AdminDashboardLogic.getGlobalHourlyTrend());
        AdminDashboardLogic.updateSummaryStats();
    }
};

window.adminApp = {
    init() {
        setTimeout(() => {
            AdminRenderers.initLiveMap();
            AdminRenderers.updateDashboard();
            if (!simStarted) { AdminDataSimulator.start(); simStarted = true; }
        }, 100);
    },
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar-panel');
        if (!sidebar) return;
        const isCollapsed = sidebar.classList.contains('w-20');
        const toggleIcon = document.getElementById('toggle-icon');
        const userInfo = document.getElementById('sidebar-user-info');
        const texts = document.querySelectorAll('.sidebar-text');
        const navItems = document.querySelectorAll('nav > a');

        if (!isCollapsed) {
            sidebar.classList.remove('w-64', 'p-4'); sidebar.classList.add('w-20', 'p-2');
            if (userInfo) userInfo.classList.add('justify-center');
            texts.forEach(el => el.classList.add('hidden'));
            navItems.forEach(item => { item.classList.remove('justify-between'); item.classList.add('justify-center'); item.querySelector('i')?.classList.remove('mr-3'); });
            if (toggleIcon) { toggleIcon.classList.remove('fa-angle-left'); toggleIcon.classList.add('fa-angle-right'); }
        } else {
            sidebar.classList.remove('w-20', 'p-2'); sidebar.classList.add('w-64', 'p-4');
            if (userInfo) userInfo.classList.remove('justify-center');
            texts.forEach(el => el.classList.remove('hidden'));
            navItems.forEach(item => { item.classList.remove('justify-center'); item.querySelector('i')?.classList.add('mr-3'); });
            if (toggleIcon) { toggleIcon.classList.remove('fa-angle-right'); toggleIcon.classList.add('fa-angle-left'); }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => window.adminApp.init());