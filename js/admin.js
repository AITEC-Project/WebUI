/**
 * 數據監測中心 - 邏輯 (admin.js)
 */

const AdminApp = {
    chart: null,
    map: null,

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar-panel');
        if (!sidebar) return;

        const isCollapsed = sidebar.classList.contains('w-20');
        const toggleIcon = document.getElementById('toggle-icon');
        const userInfo = document.getElementById('sidebar-user-info');
        const texts = document.querySelectorAll('.sidebar-text');
        const navItems = document.querySelectorAll('nav > a');

        if (!isCollapsed) {
            sidebar.classList.remove('w-64', 'p-4');
            sidebar.classList.add('w-20', 'p-2');

            if (userInfo) {
                userInfo.classList.add('justify-center');
                userInfo.querySelector('.flex-shrink-0')?.classList.add('hidden');
            }
            texts.forEach(el => el.classList.add('hidden'));
            navItems.forEach(item => {
                item.classList.remove('justify-between');
                item.classList.add('justify-center');
                item.querySelector('i')?.classList.remove('mr-3');
            });
            if (toggleIcon) { toggleIcon.classList.remove('fa-angle-left'); toggleIcon.classList.add('fa-angle-right'); }
        } else {
            sidebar.classList.remove('w-20', 'p-2');
            sidebar.classList.add('w-64', 'p-4');

            if (userInfo) {
                userInfo.classList.remove('justify-center');
                userInfo.querySelector('.flex-shrink-0')?.classList.remove('hidden');
            }
            texts.forEach(el => el.classList.remove('hidden'));
            navItems.forEach(item => {
                item.classList.remove('justify-center');
                item.querySelector('i')?.classList.add('mr-3');
            });
            if (toggleIcon) { toggleIcon.classList.remove('fa-angle-right'); toggleIcon.classList.add('fa-angle-left'); }
        }
    },

    init() {
        this.updateTodayStats();
        this.updateConfidenceDistribution();
        this.updateCurrentHotspot();
        this.updateHeatmap();
        this.renderGeneralStatsChart();
        this.updateHotspotMap(); // 初始化動態地圖與排行榜
    },

    updateTodayStats() {
        const countEl = document.getElementById('today-case-count');
        const trendEl = document.getElementById('today-case-trend');

        if (!countEl || !trendEl) return;

        if (typeof mockCases === 'undefined' || mockCases.length === 0) {
            countEl.innerText = '0';
            trendEl.innerHTML = '<i class="fas fa-minus mr-1 text-[10px]"></i>無資料';
            return;
        }

        const dateCounts = {};
        mockCases.forEach(c => {
            if (c.timestamp) {
                const dateStr = c.timestamp.split('T')[0];
                dateCounts[dateStr] = (dateCounts[dateStr] || 0) + 1;
            }
        });

        const dates = Object.keys(dateCounts).sort((a, b) => new Date(b) - new Date(a));
        if (dates.length === 0) return;

        const todayStr = dates[0];
        const todayCount = dateCounts[todayStr];

        let prevTotal = 0;
        let prevDays = 0;
        for (let i = 1; i < dates.length; i++) {
            prevTotal += dateCounts[dates[i]];
            prevDays++;
        }

        countEl.innerText = todayCount.toLocaleString();

        if (prevDays === 0) {
            trendEl.className = 'text-sm text-gray-400 font-bold flex items-center mb-1';
            trendEl.innerHTML = `<i class="fas fa-minus mr-1 text-[10px]"></i>無過往數據`;
            return;
        }

        const avgCount = prevTotal / prevDays;
        const percent = ((todayCount - avgCount) / avgCount) * 100;
        const absPercent = Math.abs(percent).toFixed(1);

        if (percent > 0) {
            trendEl.className = 'text-sm text-red-500 font-bold flex items-center mb-1';
            trendEl.innerHTML = `<i class="fas fa-arrow-up mr-1 text-[10px]"></i>${absPercent}%`;
        } else if (percent < 0) {
            trendEl.className = 'text-sm text-green-500 font-bold flex items-center mb-1';
            trendEl.innerHTML = `<i class="fas fa-arrow-down mr-1 text-[10px]"></i>${absPercent}%`;
        } else {
            trendEl.className = 'text-sm text-gray-500 font-bold flex items-center mb-1';
            trendEl.innerHTML = `<i class="fas fa-minus mr-1 text-[10px]"></i>0%`;
        }
    },

    updateConfidenceDistribution() {
        const avgEl = document.getElementById('confidence-avg');
        const barContainer = document.getElementById('confidence-distribution-bar');

        if (!avgEl || !barContainer) return;

        let verifiedCases = [];
        if (typeof mockCases !== 'undefined') {
            verifiedCases = mockCases.filter(c => c.status === 'verified');
        }

        if (verifiedCases.length === 0) {
            avgEl.innerText = '0%';
            barContainer.innerHTML = '';
            return;
        }

        const totalConf = verifiedCases.reduce((sum, c) => sum + (c.confidence || 0), 0);
        const avgConf = (totalConf / verifiedCases.length).toFixed(1);
        avgEl.innerText = `${avgConf}%`;

        const buckets = [0, 0, 0, 0, 0];
        verifiedCases.forEach(c => {
            const conf = c.confidence || 0;
            if (conf < 70) buckets[0]++;
            else if (conf < 80) buckets[1]++;
            else if (conf < 88) buckets[2]++;
            else if (conf < 95) buckets[3]++;
            else buckets[4]++;
        });

        const maxCount = Math.max(...buckets, 1);
        const colors = ['bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-800'];

        barContainer.innerHTML = buckets.map((count, i) => {
            const heightPercent = count === 0 ? 5 : Math.max((count / maxCount) * 100, 10);
            return `<div class="w-1/5 ${colors[i]}" style="height: ${heightPercent}%" title="區間數量: ${count}"></div>`;
        }).join('');
    },

    updateCurrentHotspot() {
        const nameEl = document.getElementById('hotspot-name');
        const descEl = document.getElementById('hotspot-desc');

        if (!nameEl || !descEl) return;

        if (typeof mockCases === 'undefined' || mockCases.length === 0) {
            nameEl.innerText = '無資料';
            descEl.innerText = '目前無偵測數據';
            return;
        }

        const locCounts = {};
        mockCases.forEach(c => {
            const loc = c.location || '未知路段';
            if(!locCounts[loc]) locCounts[loc] = { total: 0, types: {} };

            locCounts[loc].total++;
            const type = c.type || '其他';
            locCounts[loc].types[type] = (locCounts[loc].types[type] || 0) + 1;
        });

        let hotLoc = '';
        let maxTotal = 0;
        for (let loc in locCounts) {
            if (locCounts[loc].total > maxTotal) {
                maxTotal = locCounts[loc].total;
                hotLoc = loc;
            }
        }

        if (!hotLoc) return;

        let topType = '';
        let maxTypeCount = 0;
        const hotLocData = locCounts[hotLoc].types;

        for (let t in hotLocData) {
            if (hotLocData[t] > maxTypeCount) {
                maxTypeCount = hotLocData[t];
                topType = t;
            }
        }

        const percent = Math.round((maxTypeCount / maxTotal) * 100);

        nameEl.innerText = hotLoc;
        descEl.innerText = `主要違規：${topType} `;
    },

    updateHeatmap() {
        const container = document.getElementById('time-heatmap-container');
        const adviceEl = document.getElementById('heatmap-advice');

        if (!container || !adviceEl) return;

        if (typeof mockCases === 'undefined' || mockCases.length === 0) {
            container.innerHTML = '<div class="w-full flex items-center justify-center text-xs text-gray-400">無數據可供分析</div>';
            adviceEl.innerText = '目前無偵測數據，建議持續觀察。';
            return;
        }

        const hourCounts = Array(24).fill(0);
        const locationHourCounts = {};

        mockCases.forEach(c => {
            if (c.timestamp) {
                const date = new Date(c.timestamp);
                const hour = date.getHours();
                if (!isNaN(hour)) {
                    hourCounts[hour]++;
                    const loc = c.location || '未知路段';
                    if (!locationHourCounts[loc]) locationHourCounts[loc] = Array(24).fill(0);
                    locationHourCounts[loc][hour]++;
                }
            }
        });

        const maxCount = Math.max(...hourCounts, 1);
        const colors = [
            'bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300',
            'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800'
        ];

        container.innerHTML = hourCounts.map((count, hour) => {
            const colorIndex = count === 0 ? 0 : Math.ceil((count / maxCount) * (colors.length - 1));
            const colorClass = colors[colorIndex];
            const nextHour = (hour + 1) % 24;
            const title = `${String(hour).padStart(2, '0')}:00 - ${String(nextHour).padStart(2, '0')}:00 (共 ${count} 宗)`;
            return `<div class="flex-1 ${colorClass} transition-colors duration-300 border border-gray-100" title="${title}"></div>`;
        }).join('');

        let peakHour = 0;
        let peakCount = 0;
        hourCounts.forEach((count, idx) => {
            if (count > peakCount) {
                peakCount = count;
                peakHour = idx;
            }
        });

        let peakLoc = '';
        let peakLocCount = 0;
        for (const loc in locationHourCounts) {
            if (locationHourCounts[loc][peakHour] > peakLocCount) {
                peakLocCount = locationHourCounts[loc][peakHour];
                peakLoc = loc;
            }
        }

        if (peakCount > 0) {
            const nextHour = (peakHour + 1) % 24;
            const timeStr = `${String(peakHour).padStart(2, '0')}:00 - ${String(nextHour).padStart(2, '0')}:00`;
            adviceEl.innerText = `觀測數據顯示，${peakLoc || '各轄區路段'}於 ${timeStr} 達到違規高峰（共 ${peakCount} 件）。建議加強該時段 AI 優先權重，並考慮動態調整數位執法閾值以維持城市治理效能。`;
        } else {
            adviceEl.innerText = '目前數據量平穩，建議維持當前數位執法閾值。';
        }
    },

    // 動態分析 5 日內熱點與更新地圖/排行榜 (台中)
    updateHotspotMap() {
        const mapContainer = document.getElementById('hotspot-map');
        const listContainer = document.getElementById('hotspot-ranking-list');
        if (!mapContainer || typeof L === 'undefined') return;

        // 初始化地圖，定位在台中市中心
        if (!this.map) {
            this.map = L.map('hotspot-map', { zoomControl: false }).setView([24.1477, 120.6736], 13);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; OSM',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(this.map);
            L.control.zoom({ position: 'bottomright' }).addTo(this.map);
        } else {
            // 清除現有標記
            this.map.eachLayer((layer) => {
                if (layer instanceof L.CircleMarker) layer.remove();
            });
        }

        if (typeof mockCases === 'undefined' || mockCases.length === 0) return;

        // 尋找資料中的最新日期，作為「今天」的基準，往回抓 5 天
        const sortedCases = [...mockCases].filter(c => c.timestamp).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        if (sortedCases.length === 0) return;

        const latestDate = new Date(sortedCases[0].timestamp);
        const fiveDaysAgo = new Date(latestDate);
        fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

        // 篩選近 5 天的資料
        const recentCases = sortedCases.filter(c => new Date(c.timestamp) >= fiveDaysAgo);

        // 根據路口分組並統計數量
        const locStats = {};
        recentCases.forEach(c => {
            const loc = c.location || '未知路段';
            if (!locStats[loc]) {
                // 如果 mock 資料沒有 lat/lng，則以台中市為中心生成模擬座標
                const lat = c.lat || (24.1477 + (Math.random() - 0.5) * 0.05);
                const lng = c.lng || (120.6736 + (Math.random() - 0.5) * 0.05);
                locStats[loc] = { name: loc, count: 0, lat: lat, lng: lng };
            }
            locStats[loc].count++;
        });

        // 排序取出熱點陣列
        const hotspots = Object.values(locStats).sort((a, b) => b.count - a.count);

        // 將點位標記在地圖上
        hotspots.forEach((data, index) => {
            const isHighRisk = index < 3; // 排名前三視為高風險
            const color = isHighRisk ? '#dc2626' : '#2563eb';
            const fillColor = isHighRisk ? '#ef4444' : '#3b82f6';
            const radius = isHighRisk ? 12 : 8;

            L.circleMarker([data.lat, data.lng], {
                radius: radius,
                color: color,
                fillColor: fillColor,
                fillOpacity: 0.7,
                weight: 2
            }).addTo(this.map).bindPopup(`
                <div class="font-sans">
                    <div class="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-1">${data.name}</div>
                    <div class="text-xs text-gray-600">
                        狀態: <span class="font-bold ${isHighRisk ? 'text-red-600' : 'text-blue-600'}">${isHighRisk ? '高風險' : '一般'}</span><br>
                        近5日通報: ${data.count} 宗
                    </div>
                </div>
            `);
        });

        // 更新排行榜 HTML
        if (listContainer) {
            const top3 = hotspots.slice(0, 3);
            if (top3.length === 0) {
                listContainer.innerHTML = '<div class="text-xs text-gray-400">近 5 日無違規紀錄</div>';
                return;
            }

            listContainer.innerHTML = top3.map((h, i) => `
                <div class="border border-${i === 0 ? 'gray-200' : 'gray-100'} p-3 flex justify-between items-center group hover:border-blue-300 transition cursor-default">
                    <div class="flex items-center space-x-3">
                        <span class="${i === 0 ? 'text-blue-800' : 'text-gray-400'} font-bold text-sm group-hover:text-blue-800">0${i + 1}.</span>
                        <span class="text-xs ${i === 0 ? 'font-bold text-gray-700' : 'text-gray-600'} group-hover:text-blue-800">${h.name}</span>
                    </div>
                    <div class="text-right">
                        <div class="text-sm font-bold ${i === 0 ? 'text-blue-800' : 'text-gray-600 group-hover:text-blue-800'}">${h.count} 宗</div>
                    </div>
                </div>
            `).join('');
        }
    },

    renderGeneralStatsChart() {
        const ctx = document.getElementById('generalStatsChart');
        if (!ctx) return;

        if (this.chart) this.chart.destroy();

        let verifiedCases = [];
        if (typeof mockCases !== 'undefined') {
            verifiedCases = mockCases.filter(c => c.status === 'verified');
        }

        const typeCounts = {};
        verifiedCases.forEach(c => {
            const typeName = c.type || '未分類';
            typeCounts[typeName] = (typeCounts[typeName] || 0) + 1;
        });

        let labels = Object.keys(typeCounts);
        let monthlyData = [];
        let weeklyData = [];

        if (labels.length === 0) {
            // 防呆預設資料
            labels = ['未依標線行駛', '闖紅燈', '違規停車', '超速', '其他'];
            monthlyData = [120, 85, 150, 60, 30];
            weeklyData = [35, 20, 45, 15, 8];
        } else {
            // 讀取 data.js 中的真實數據
            monthlyData = labels.map(label => typeCounts[label] || 0);
            // 由於全部資料皆由 python 生成在近 30 天內，我們模擬近一週為其四分之一
            weeklyData = monthlyData.map(val => Math.ceil(val / 4));
        }

        this.chart = new Chart(ctx.getContext('2d'), {
            type: 'bar', // 長條圖
            data: {
                labels: labels,
                datasets: [
                    // 將「近一週」移到前面
                    {
                        label: '近一週',
                        data: weeklyData,
                        backgroundColor: '#9CA3AF',
                        borderColor: '#9CA3AF',
                        borderWidth: 1,
                        borderRadius: 0 // 維持無圓角設定
                    },
                    {
                        label: '近一個月',
                        data: monthlyData,
                        backgroundColor: '#1e3a8a',
                        borderColor: '#1e3a8a',
                        borderWidth: 1,
                        borderRadius: 0 // 維持無圓角設定
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        cornerRadius: 0 // tooltip 也維持直角
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: '#6B7280',
                            font: { size: 12, weight: 'bold' }
                        }
                    },
                    y: {
                        display: true,
                        beginAtZero: true,
                        ticks: {
                            precision: 0,
                            color: '#6B7280'
                        }
                    }
                }
            }
        });
    }
};

window.adminApp = {
    toggleSidebar: () => AdminApp.toggleSidebar()
};

document.addEventListener('DOMContentLoaded', () => {
    AdminApp.init();
});