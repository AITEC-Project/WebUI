/**
 * 趨勢數據統計分析 - 邏輯 (devices.js)
 */

const DevicesApp = {
    chart: null,
    currentStrategies: [], // 儲存當次隨機產生的策略供點擊使用

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

    toggleProtocol(e) {
        if (e) e.preventDefault();

        const btn = document.getElementById('toggle-protocol-btn');
        const extras = document.querySelectorAll('.extra-strategy');

        if (!btn || extras.length === 0) return;

        const isExpanded = btn.dataset.expanded === 'true';

        // 切換顯示狀態
        extras.forEach(el => {
            if (isExpanded) {
                el.classList.add('hidden');
            } else {
                el.classList.remove('hidden');
            }
        });

        // 更新按鈕文字與狀態
        if (isExpanded) {
            btn.innerHTML = 'VIEW FULL PROTOCOL <i class="fas fa-chevron-down ml-1"></i>';
            btn.dataset.expanded = 'false';
        } else {
            btn.innerHTML = 'COLLAPSE PROTOCOL <i class="fas fa-chevron-up ml-1"></i>';
            btn.dataset.expanded = 'true';
        }
    },

    init() {
        this.renderStrategies();
        // 預設點擊第一個策略
        if (this.currentStrategies.length > 0) {
            this.updateDashboard(0);
        }
    },

    renderStrategies() {
        // 台中市知名路口清單
        const intersections = [
            '台灣大道與文心路口',
            '中清路與環中路口',
            '崇德路與松竹路口',
            '復興路與建成路口',
            '公益路與忠明南路口',
            '向上路與河南路口',
            '逢甲路與福星路口'
        ];

        const shuffledIntersections = intersections.sort(() => 0.5 - Math.random());

        // 策略池，附帶該策略對應的假資料與詳細摘要
        const strategiesPool = [
            {
                borderClass: 'border-red-600', textClass: 'text-red-600',
                title: '增設未禮讓行人偵測',
                getDesc: (loc) => `【${loc}】之人車衝突與歷史事故明顯偏高。`,
                getSummary: (loc) => `偵測到 ${loc} 近期未禮讓行人違規案激增 42%，結合 PET/TTC 衝突指標顯示行人穿越道為高風險區。同時，調閱政府開放之歷史事故資料，該路口已連續 3 個月名列高肇事熱點。基於上述數據（衝突陡升、違規高頻），建議立即增設「未禮讓行人」樣態之違規偵測設備，以保障行人路權。`,
                chartData: { blue: [30, 35, 45, 60, 85, 95], red: [20, 25, 40, 50, 75, 90], lightBlue: [10, 15, 25, 40, 50, 60] }
            },
            {
                borderClass: 'border-orange-500', textClass: 'text-orange-500',
                title: '增設非號誌化違規偵測',
                getDesc: (loc) => `【${loc}】屬非號誌化路口且衝突頻率異常偏高。`,
                getSummary: (loc) => `${loc} 為非號誌化路口，數據顯示過去 30 天內，車與車的 TTC (碰撞時間) 小於 1.5 秒的潛在衝突事件高達 124 件，且伴隨 15 件實際擦撞事故記錄。鑑於衝突數據（紅線）與歷史事故（淺藍線）呈現高度正相關並持續攀升，建議增設停讓相關違規樣態偵測，強制降低路口交會車速。`,
                chartData: { blue: [10, 15, 20, 22, 25, 30], red: [30, 45, 55, 65, 80, 85], lightBlue: [20, 35, 45, 50, 65, 75] }
            },
            {
                borderClass: 'border-gray-500', textClass: 'text-gray-500',
                title: '評估撤除偵測設備',
                getDesc: (loc) => `【${loc}】近期違規與衝突指標均低下，建議撤裝。`,
                getSummary: (loc) => `${loc} 過去的違規取締件數已連續 6 個月呈現平穩下降（低於每日 5 件），且 PET/TTC 衝突數據極低，顯示該路口用路人已養成良好習慣。折線圖顯示所有風險指標皆處於安全基準線之下。基於資源極大化考量，建議可考慮撤除該路口之偵測設備，轉移至其他高風險熱區。`,
                chartData: { blue: [25, 20, 15, 10, 8, 5], red: [20, 15, 10, 8, 5, 2], lightBlue: [15, 12, 8, 5, 2, 0] }
            },
            {
                borderClass: 'border-blue-600', textClass: 'text-blue-600',
                title: '升級高解析 AI 辨識鏡頭',
                getDesc: (loc) => `【${loc}】夜間違規捕捉率偏低，建議升級設備。`,
                getSummary: (loc) => `統計顯示 ${loc} 於夜間（18:00-06:00）的違規捕捉率下降了 35%，但同時間段的衝突事件（紅線）卻維持高點，顯示現有硬體在低光源下的辨識能力不足，導致違規黑數。決策建議優先編列預算，將該路口設備升級為高解析度 AI 智慧辨識鏡頭，以彌補夜間執法空窗。`,
                chartData: { blue: [50, 45, 40, 35, 30, 25], red: [40, 42, 45, 48, 50, 52], lightBlue: [30, 30, 32, 35, 38, 40] }
            },
            {
                borderClass: 'border-green-600', textClass: 'text-green-600',
                title: '動態調整號誌時相秒數',
                getDesc: (loc) => `【${loc}】晨間車流壅塞導致連鎖違規，建議調整號誌。`,
                getSummary: (loc) => `數據分析指出 ${loc} 在晨間尖峰（07:30-09:00）的違規異常（藍線，多為闖紅燈或未淨空路口）出現週期性飆升，比對政府開放資料發現該時段車流量已超出路口負荷。此類違規屬交通壅塞衍生的系統性問題，單純依賴執法效益有限。建議交控中心延長主要幹道的綠燈秒數，優先疏導車流。`,
                chartData: { blue: [30, 55, 30, 60, 35, 65], red: [20, 40, 25, 45, 30, 50], lightBlue: [10, 20, 15, 25, 15, 30] }
            }
        ];

        // 將情境打亂並綁定地點
        this.currentStrategies = strategiesPool.sort(() => 0.5 - Math.random()).map((s, index) => {
            const loc = shuffledIntersections[index];
            return {
                ...s,
                location: loc,
                desc: s.getDesc(loc),
                summary: s.getSummary(loc)
            };
        });

        const container = document.getElementById('strategy-container');
        if (!container) return;

        // 生成 HTML，並綁定 onclick 事件
        container.innerHTML = this.currentStrategies.map((s, index) => `
            <div id="strategy-${index}" onclick="DevicesApp.updateDashboard(${index})" class="strategy-item cursor-pointer p-3 mb-1 border-l-2 ${s.borderClass} ${index >= 3 ? 'hidden extra-strategy' : ''}">
                <p class="text-[9px] font-bold ${s.textClass} tracking-widest mb-1 pointer-events-none">STRATEGY 0${index + 1}</p>
                <h4 class="text-sm font-extrabold text-gray-900 mb-1 pointer-events-none">${s.title}</h4>
                <p class="text-[11px] text-gray-600 leading-relaxed font-medium pointer-events-none">
                    ${s.desc}
                </p>
            </div>
        `).join('');

        // 重置按鈕狀態
        const btn = document.getElementById('toggle-protocol-btn');
        if (btn) {
            btn.innerHTML = 'VIEW FULL PROTOCOL <i class="fas fa-chevron-down ml-1"></i>';
            btn.dataset.expanded = 'false';
        }
    },

    updateDashboard(index) {
        const strategy = this.currentStrategies[index];
        if (!strategy) return;

        // 1. 更新樣式：為被點擊的項目加上背景色，移除其他項目的背景色
        document.querySelectorAll('.strategy-item').forEach(el => el.classList.remove('strategy-active'));
        const activeItem = document.getElementById(`strategy-${index}`);
        if (activeItem) activeItem.classList.add('strategy-active');

        // 2. 更新左側標題與摘要文字
        const titleEl = document.getElementById('chart-title');
        const summaryEl = document.getElementById('summary-text');

        if (titleEl) titleEl.innerText = `${strategy.location}：多維度風險趨勢`;
        if (summaryEl) summaryEl.innerText = strategy.summary;

        // 3. 重新繪製折線圖
        this.renderStatisticChart(strategy.chartData);
    },

    renderStatisticChart(data) {
        const ctxEl = document.getElementById('predictionChart');
        if (!ctxEl) return;
        const ctx = ctxEl.getContext('2d');

        if (this.chart) this.chart.destroy();

        const labels = ['T-30', 'T-24', 'T-18', 'T-12', 'T-6', 'TODAY'];

        // 若未提供資料，則產生隨機資料 (防呆)
        const genRandomData = (base, variance) => labels.map(() => Math.floor(base + (Math.random() * variance * 2) - variance));
        const chartData = data || {
            blue: genRandomData(35, 15),
            red: genRandomData(30, 20),
            lightBlue: genRandomData(25, 10)
        };

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: '違規異常 (違規左轉)',
                        data: chartData.blue,
                        borderColor: '#3662D8',
                        borderWidth: 2,
                        tension: 0.2,
                        pointBackgroundColor: '#3662D8',
                        pointRadius: 2,
                        pointHoverRadius: 5
                    },
                    {
                        label: '衝突數據 (PET/TTC)',
                        data: chartData.red,
                        borderColor: '#EF4444',
                        borderWidth: 2,
                        tension: 0.2,
                        pointBackgroundColor: '#EF4444',
                        pointRadius: 2,
                        pointHoverRadius: 5
                    },
                    {
                        label: '政府歷史事故',
                        data: chartData.lightBlue,
                        borderColor: '#60A5FA',
                        borderWidth: 2,
                        tension: 0.2,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#60A5FA',
                        pointRadius: 2,
                        pointHoverRadius: 5
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
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        titleFont: { size: 13, weight: 'bold' },
                        bodyFont: { size: 12, weight: 'bold' },
                        padding: 10,
                        cornerRadius: 0
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: function(context) {
                                return context.tick.label === 'TODAY' ? '#1e3a8a' : '#9CA3AF';
                            },
                            font: function(context) {
                                return context.tick.label === 'TODAY'
                                    ? { size: 12, weight: '900' }
                                    : { size: 10, weight: 'bold' };
                            }
                        }
                    },
                    y: {
                        display: false,
                        beginAtZero: true,
                        max: 100 // 固定 Y 軸最大值，讓不同策略切換時視覺比例一致
                    }
                }
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    DevicesApp.init();
});