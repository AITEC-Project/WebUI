/**
 * AI 交通診斷儀表板 - 核心邏輯
 */

let simulatedLiveCases = [];

const DataSimulator = {
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
            confidence: Math.floor(Math.random() * 15) + 84,
            processingMs: Math.floor(Math.random() * 150) + 40
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
                refreshLivePanel();
                loop();
            }, nextTime);
        };
        loop();
    }
};

const DashboardApp = {
    baseDate: new Date(),

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

            if (userInfo) {
                userInfo.classList.add('justify-center');
                userInfo.querySelector('.flex-shrink-0')?.classList.remove('mr-3');
            }
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

            if (userInfo) {
                userInfo.classList.remove('justify-center');
                userInfo.querySelector('.flex-shrink-0')?.classList.add('mr-3');
            }
            texts.forEach(el => el.classList.remove('hidden'));

            navItems.forEach(item => {
                item.classList.remove('justify-center');
                if (item.id === 'nav-all') item.classList.add('justify-between');
                item.querySelector('i')?.classList.add('mr-3');
            });
            if (toggleIcon) toggleIcon.className = 'fas fa-angle-left text-xs';
        }
    },

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
        const recentData = this.getRecentData();
        const counts = recentData.reduce((acc, curr) => {
            const type = curr.type || '未分類';
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        return { labels: sorted.map(i => i[0]), values: sorted.map(i => i[1]) };
    },

    getTopLocations(range = '30d') {
        const data = this.getFilteredData(range);
        const counts = data.reduce((acc, curr) => {
            acc[curr.location] = (acc[curr.location] || 0) + 1;
            return acc;
        }, {});
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
        return { labels: sorted.map(i => i[0]), values: sorted.map(i => i[1]) };
    },

    getTopViolationTypes(range = '30d') {
        const data = this.getFilteredData(range);
        const counts = data.reduce((acc, curr) => {
            const type = curr.type || '未分類';
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
        return { labels: sorted.map(i => i[0]), values: sorted.map(i => i[1]) };
    },

    getGlobalHourlyTrend(range = '30d') {
        const data = this.getFilteredData(range);
        const hours = new Array(24).fill(0);
        data.forEach(item => {
            const h = new Date(item.timestamp || item.date).getHours();
            hours[h]++;
        });
        return hours;
    },

    updateSummaryStats() {
        const data = this.getFilteredData('30d');
        const avgRateEl = document.getElementById('stat-avg-rate');
        const cancelRateEl = document.getElementById('stat-cancel-rate');
        const volAnomalyEl = document.getElementById('stat-vol-anomaly');
        const cancelAnomalyEl = document.getElementById('stat-cancel-anomaly');
        const typeAnomalyEl = document.getElementById('stat-type-anomaly');

        if (!data || data.length === 0) return;

        const fixedCPM = 0.2;
        if (avgRateEl) {
            const minPerCase = (1 / fixedCPM).toFixed(0);
            avgRateEl.innerHTML = `
                <div class="flex flex-col">
                    <span class="text-2xl font-bold text-white">每 ${minPerCase} 分鐘 / 筆</span>
                    <span class="text-[10px] text-gray-500 font-normal mt-1">基準: ${fixedCPM} CPM</span>
                </div>`;
        }

        const locStats = {};
        const globalTypeCounts = {};
        let globalCanceled = 0;

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

        if (cancelRateEl) {
            const globalCancelRate = ((globalCanceled / data.length) * 100).toFixed(1);
            cancelRateEl.innerHTML = `
                <div class="flex flex-col">
                    <span class="text-2xl font-bold ${globalCancelRate > 5 ? 'text-orange-400' : 'text-white'}">${globalCancelRate}%</span>
                    <span class="text-[10px] text-gray-500 font-normal mt-1">目標: < 5.0%</span>
                </div>`;
        }

        const totalMinutes = 30 * 24 * 60;
        const locations = Object.keys(locStats);
        const expectedCountPerLoc = (fixedCPM * totalMinutes) / locations.length;

        const volAnomalies = Object.entries(locStats)
            .map(([loc, stat]) => ({ loc, ratio: (stat.total / expectedCountPerLoc).toFixed(1) }))
            .filter(item => item.ratio > 1.2)
            .sort((a, b) => b.ratio - a.ratio).slice(0, 2);

        if (volAnomalyEl) {
            volAnomalyEl.innerHTML = volAnomalies.map(a => `
                <div class="flex justify-between items-center">
                    <span class="text-[13px] text-gray-300 truncate mr-2">${a.loc}</span>
                    <span class="text-[11px] font-bold text-red-400">高於平均 ${a.ratio}x</span>
                </div>`).join('') || '<p class="text-[13px] text-green-500">尚無明顯異常</p>';
        }

        const globalAvgCancelRate = globalCanceled / data.length;
        let cancelAnomalies = Object.entries(locStats)
            .map(([loc, stat]) => {
                const locCancelRate = stat.canceled / stat.total;
                return { loc, ratio: (locCancelRate / globalAvgCancelRate).toFixed(1), count: stat.canceled };
            })
            .filter(a => a.count >= 3 && a.ratio > 1.5)
            .sort((a, b) => b.ratio - a.ratio).slice(0, 2);

        if (cancelAnomalyEl) {
            cancelAnomalyEl.innerHTML = cancelAnomalies.map(a => `
                <div class="flex justify-between items-center">
                    <span class="text-[13px] text-gray-300 truncate mr-2">${a.loc}</span>
                    <span class="text-[11px] font-bold text-orange-400">撤銷偏高 ${a.ratio}x</span>
                </div>`).join('') || '<p class="text-[13px] text-green-500">撤銷比例正常</p>';
        }

        let typeAnomalies = [];
        const globalTotal = data.length;

        Object.entries(locStats).forEach(([loc, stat]) => {
            if (stat.total < 15) return;
            Object.entries(stat.types).forEach(([type, count]) => {
                const locTypeRatio = count / stat.total;
                const globalTypeRatio = globalTypeCounts[type] / globalTotal;
                const ratio = (locTypeRatio / globalTypeRatio).toFixed(1);

                if (ratio >= 2.0 && count >= 5) {
                    typeAnomalies.push({ loc, type, ratio: parseFloat(ratio) });
                }
            });
        });

        if (typeAnomalyEl) {
            const topAnomalies = typeAnomalies.sort((a, b) => b.ratio - a.ratio).slice(0, 3);
            typeAnomalyEl.innerHTML = topAnomalies.map(a => `
        <div class="flex flex-col mb-1 border-b border-gray-800 pb-1">
            <div class="flex justify-between">
                <span class="text-[11px] text-blue-400 font-bold">${a.type}</span>
                <span class="text-[11px] text-red-400">偏高 ${a.ratio}x</span>
            </div>
            <span class="text-[11px] text-gray-500 truncate">${a.loc}</span>
        </div>`).join('') || '<p class="text-[13px] text-green-500">樣態分佈正常</p>';
        }
    }
};

let rankingChart = null, typePieChart = null, heatmapChart = null, liveFlowChart = null, liveMap = null, markersLayer = null;

const refreshLivePanel = () => {
    renderLiveFlowChart(DashboardApp.getLiveTypeStats());
    updateLiveMapMarkers();
};

const renderLiveFlowChart = (data) => {
    const ctx = document.getElementById('liveFlowChart');
    if (!ctx) return;
    if (liveFlowChart) liveFlowChart.destroy();
    liveFlowChart = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.values,
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: '#3b82f6',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y', responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: '#1f2937' }, ticks: { color: '#8b949e', font: { size: 10 } }, beginAtZero: true },
                y: { grid: { display: false }, ticks: { color: '#e6edf3', font: { size: 12, weight: 'bold' } } }
            }
        }
    });
};

const initLiveMap = () => {
    const mapEl = document.getElementById('live-map');
    if (!mapEl) return;
    liveMap = L.map('live-map', { zoomControl: false }).setView([24.162, 120.647], 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(liveMap);
    markersLayer = L.layerGroup().addTo(liveMap);
};

const updateLiveMapMarkers = () => {
    if (!markersLayer) return;
    markersLayer.clearLayers();
    DashboardApp.getRecentData().forEach(item => {
        const lat = item.lat || (24.14 + Math.random() * 0.05);
        const lng = item.lng || (120.63 + Math.random() * 0.04);
        L.circleMarker([lat, lng], {
            radius: 8, fillColor: '#ff4d4d', color: '#fff', weight: 1, opacity: 0.8, fillOpacity: 0.6
        }).bindPopup(`<b>${item.location}</b><br>${item.type}`).addTo(markersLayer);
    });
};

const renderRankingChart = (data) => {
    const ctx = document.getElementById('rankingChart');
    if (!ctx) return;
    if (rankingChart) rankingChart.destroy();
    const chartCtx = ctx.getContext('2d');
    const gradient = chartCtx.createLinearGradient(0, 0, 600, 0);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.7)');
    rankingChart = new Chart(chartCtx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{ label: '案件數量', data: data.values, backgroundColor: gradient, borderColor: '#3b82f6', borderWidth: 1, borderRadius: 4 }]
        },
        options: {
            indexAxis: 'y', responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: '#1f2937' }, ticks: { color: '#8b949e' }, beginAtZero: true },
                y: { grid: { display: false }, ticks: { color: '#e6edf3', font: { weight: 'bold' } } }
            }
        }
    });
};

const renderTypePieChart = (data) => {
    const ctx = document.getElementById('typePieChart');
    if (!ctx) return;
    if (typePieChart) typePieChart.destroy();
    typePieChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.values,
                backgroundColor: ['rgba(59, 130, 246, 0.7)', 'rgba(16, 185, 129, 0.7)', 'rgba(245, 158, 11, 0.7)', 'rgba(239, 68, 68, 0.7)', 'rgba(139, 92, 246, 0.7)'],
                borderColor: '#0d1117', borderWidth: 2
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { position: 'right', labels: { color: '#e6edf3', font: { size: 12 }, padding: 20 } } },
            cutout: '60%'
        }
    });
};

const renderHeatmap = (hourlyData) => {
    const ctx = document.getElementById('timeHeatmap');
    if (!ctx) return;
    if (heatmapChart) heatmapChart.destroy();
    heatmapChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: Array.from({length: 24}, (_, i) => `${i}h`),
            datasets: [{ data: hourlyData, borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.1)', fill: true, tension: 0.4, pointRadius: 2, pointBackgroundColor: '#3b82f6' }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { display: false, beginAtZero: true }, x: { grid: { color: '#1f2937' }, ticks: { color: '#666', font: { size: 10 } } } }
        }
    });
};

const updateDashboard = () => {
    refreshLivePanel();
    renderRankingChart(DashboardApp.getTopLocations('30d'));
    renderTypePieChart(DashboardApp.getTopViolationTypes('30d'));
    renderHeatmap(DashboardApp.getGlobalHourlyTrend('30d'));
    DashboardApp.updateSummaryStats();
};

document.addEventListener('DOMContentLoaded', () => {
    initLiveMap();
    updateDashboard();
    DataSimulator.start();
});

// 橋接全域 app 以支援 HTML onclick 綁定
window.app = {
    toggleSidebar: () => DashboardApp.toggleSidebar()
};