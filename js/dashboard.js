const DashboardApp = {
    baseDate: new Date('2026-04-16 23:59:59'),

    getFilteredData(range) {
        const data = window.SHARED_HISTORY_DATA || [];
        return data.filter(item => {
            const itemDate = new Date(item.date);
            const diffDays = (this.baseDate - itemDate) / (1000 * 60 * 60 * 24);

            if (range === '24h') return diffDays <= 1;
            if (range === '7d') return diffDays <= 7;
            if (range === '30d') return diffDays <= 30;
            return true; // 'all'
        });
    },

    calculateLocationRank(event, range) {
        const data = this.getFilteredData(range);
        const filtered = event === '全部事件' ? data : data.filter(i => i.type === event);

        const counts = filtered.reduce((acc, curr) => {
            acc[curr.location] = (acc[curr.location] || 0) + 1;
            return acc;
        }, {});

        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

        return {
            labels: sorted.map(i => i[0]),
            values: sorted.map(i => i[1])
        };
    },

    calculateEventComposition(location, range) {
        const data = this.getFilteredData(range);
        const filtered = data.filter(i => i.location === location);

        const counts = filtered.reduce((acc, curr) => {
            acc[curr.type] = (acc[curr.type] || 0) + 1;
            return acc;
        }, {});

        // 排序：次數多的排前面
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

        return {
            labels: sorted.map(i => i[0]),
            values: sorted.map(i => i[1])
        };
    },

    calculateHourlyTrend(filterValue, mode, range) {
        const data = this.getFilteredData(range);
        const filtered = mode === 'location-rank'
            ? (filterValue === '全部事件' ? data : data.filter(i => i.type === filterValue))
            : data.filter(i => i.location === filterValue);

        const hours = new Array(24).fill(0);
        filtered.forEach(item => {
            const h = new Date(item.date).getHours();
            hours[h]++;
        });
        return hours;
    },

    generateAnomalies() {
        const data = window.SHARED_HISTORY_DATA || [];
        const alerts = [];

        const lowConfLocation = "西屯路/逢甲路";
        alerts.push({
            type: 'env',
            location: lowConfLocation,
            reason: '偵測到該處 AI 信心值波動較大。診斷：可能是夜間照明不足或攝影機反光，建議優化光源環境。',
            level: 'medium'
        });

        const wenxinData = data.filter(i => i.location === "文心路/台灣大道");
        const pedestrianIssues = wenxinData.filter(i => i.type === "未禮讓行人").length;
        if (pedestrianIssues / wenxinData.length > 0.2) {
            alerts.push({
                type: 'design',
                location: '文心路/台灣大道',
                reason: `「未禮讓行人」佔比達 ${Math.floor((pedestrianIssues/wenxinData.length)*100)}%。診斷：行人穿越量大且轉彎車流未分離，建議增設專用時相。`,
                level: 'high'
            });
        }

        return alerts;
    }
};

let rankingChart = null;
let heatmapChart = null;

const renderRankingChart = (data) => {
    const ctx = document.getElementById('rankingChart').getContext('2d');
    if (rankingChart) rankingChart.destroy();

    const gradient = ctx.createLinearGradient(0, 0, 600, 0);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.7)');

    rankingChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: '案件數量',
                data: data.values,
                backgroundColor: gradient,
                borderColor: '#3b82f6',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: '#1f2937' }, ticks: { color: '#8b949e' }, beginAtZero: true },
                y: { grid: { display: false }, ticks: { color: '#e6edf3', font: { weight: 'bold' } } }
            }
        }
    });
};

const renderHeatmap = (hourlyData) => {
    const ctx = document.getElementById('timeHeatmap').getContext('2d');
    if (heatmapChart) heatmapChart.destroy();

    heatmapChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 24}, (_, i) => `${i}h`),
            datasets: [{
                data: hourlyData,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 2,
                pointBackgroundColor: '#3b82f6'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { display: false, beginAtZero: true },
                x: { grid: { color: '#1f2937' }, ticks: { color: '#666', font: { size: 10 } } }
            }
        }
    });
};

const renderAlerts = () => {
    const container = document.getElementById('anomaly-alerts');
    const anomalies = DashboardApp.generateAnomalies();
    container.innerHTML = anomalies.map(a => `
        <div class="bg-blue-900/10 border border-blue-500/30 p-4 rounded-xl flex items-start space-x-4">
            <i class="fas fa-microchip ${a.level === 'high' ? 'text-red-400' : 'text-blue-400'} text-lg mt-1"></i>
            <div>
                <div class="flex items-center space-x-2">
                    <span class="font-bold text-white">${a.location}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 uppercase font-bold">診斷建議</span>
                </div>
                <p class="text-sm text-gray-400 mt-1">${a.reason}</p>
            </div>
        </div>
    `).join('');
};

const updateDashboard = () => {
    const range = document.getElementById('time-range').value;
    const mode = document.getElementById('analysis-mode').value;
    const filter = document.getElementById('secondary-filter').value;

    const filteredDataCount = DashboardApp.getFilteredData(range).length;
    document.getElementById('stat-total').innerText = filteredDataCount.toLocaleString();

    let mainChartData = mode === 'location-rank'
        ? DashboardApp.calculateLocationRank(filter, range)
        : DashboardApp.calculateEventComposition(filter, range);

    renderRankingChart(mainChartData);
    renderHeatmap(DashboardApp.calculateHourlyTrend(filter, mode, range));
};

const handleModeChange = () => {
    const mode = document.getElementById('analysis-mode').value;
    const secondaryFilter = document.getElementById('secondary-filter');
    const label = document.getElementById('secondary-label');

    secondaryFilter.innerHTML = '';

    const data = window.SHARED_HISTORY_DATA || [];
    const eventTypes = ["全部事件", ...new Set(data.map(i => i.type))];
    const locationList = [...new Set(data.map(i => i.location))];

    const options = mode === 'location-rank' ? eventTypes : locationList;
    label.innerText = mode === 'location-rank' ? '篩選違規類型' : '選擇分析路口';

    options.forEach(optText => {
        const opt = document.createElement('option');
        opt.value = optText;
        opt.innerText = optText;
        secondaryFilter.appendChild(opt);
    });
    updateDashboard();
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('analysis-mode').addEventListener('change', handleModeChange);
    document.getElementById('secondary-filter').addEventListener('change', updateDashboard);
    document.getElementById('time-range').addEventListener('change', updateDashboard);

    handleModeChange();
    renderAlerts();
});