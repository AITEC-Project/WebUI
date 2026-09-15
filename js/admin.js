/**
 * 數據監測中心 - 邏輯 (admin.js)
 * 本頁為 UI 示意原型，資料皆為本機寫死的假資料，不連接任何後端。
 */

const OBSERVATION_DATA = {
    cameras: [
        {
            id: 'C000008', name: '河南路／福星路', direction: '右側車流往臺灣大道',
            health: 'normal', healthLabel: '正常觀測',
            lastUpdate: '18:44:05', candidateCount: 18, weekCount: 82,
            rules: ['禁止左轉', '雙黃線跨越'],
            ruleCounts: { '禁止左轉': 10, '雙黃線跨越': 8 },
            weekRuleCounts: { '禁止左轉': 47, '雙黃線跨越': 35 }
        },
        {
            id: 'C000071', name: '崇德路／豐樂路', direction: '右側車流往環中路',
            health: 'delayed', healthLabel: '資料延遲',
            lastUpdate: '17:31:40', candidateCount: 9, weekCount: 41,
            rules: ['標線跨越'],
            ruleCounts: { '標線跨越': 9 },
            weekRuleCounts: { '標線跨越': 41 }
        },
        {
            id: 'C000186', name: '五權西路／龍富路', direction: '右側車流往南屯交流道',
            health: 'normal', healthLabel: '正常觀測',
            lastUpdate: '18:43:51', candidateCount: 6, weekCount: 29,
            rules: ['機車進入禁行區'],
            ruleCounts: { '機車進入禁行區': 6 },
            weekRuleCounts: { '機車進入禁行區': 29 }
        }
    ],

    rules: ['禁止左轉', '雙黃線跨越', '標線跨越', '機車進入禁行區'],

    hourlyToday: [0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 2, 2, 1, 1, 1, 2, 3, 5, 4, 3, 2, 1, 1, 0],
    hourlyWeek: [2, 1, 1, 1, 1, 2, 5, 8, 11, 7, 8, 9, 7, 6, 8, 10, 13, 18, 16, 10, 7, 5, 4, 2],

    recommendations: [
        {
            id: 1, cameraId: 'C000008', rule: '禁止左轉',
            region: '河南路北向入口 → 福星路東側出口', timeRange: '17:00–19:00',
            reason: '晚尖峰候選較集中，建議優先檢視轉向動線。', action: '優先檢視影像'
        },
        {
            id: 2, cameraId: 'C000008', rule: '雙黃線跨越',
            region: '河南路近路口中央分隔區', timeRange: '16:00–18:00',
            reason: '跨越候選集中於同一觀測區域，適合安排人工抽查。', action: '安排區域抽查'
        },
        {
            id: 3, cameraId: 'C000186', rule: '機車進入禁行區',
            region: '五權西路東向機車禁行區入口', timeRange: '07:00–09:00',
            reason: '通勤時段有重複候選，建議確認標線可見度與動線。', action: '確認影像與標線'
        }
    ]
};

const AdminApp = {
    state: {
        period: 'today',
        cameraId: 'all',
        rule: 'all'
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
        this.buildFilterOptions();
        this.bindFilters();
        this.render();
    },

    /* ---------- 篩選列 ---------- */

    buildFilterOptions() {
        const cameraSelect = document.getElementById('filter-camera');
        OBSERVATION_DATA.cameras.forEach(camera => {
            const option = document.createElement('option');
            option.value = camera.id;
            option.textContent = `${camera.id}・${camera.name}`;
            cameraSelect.appendChild(option);
        });

        const ruleSelect = document.getElementById('filter-rule');
        OBSERVATION_DATA.rules.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            ruleSelect.appendChild(option);
        });
    },

    bindFilters() {
        document.getElementById('filter-period').addEventListener('change', e => {
            this.state.period = e.target.value;
            this.render();
        });
        document.getElementById('filter-camera').addEventListener('change', e => {
            this.state.cameraId = e.target.value;
            this.render();
        });
        document.getElementById('filter-rule').addEventListener('change', e => {
            this.state.rule = e.target.value;
            this.render();
        });

        document.querySelectorAll('.period-tabs button').forEach(button => {
            button.addEventListener('click', () => {
                this.state.period = button.dataset.period;
                this.syncFilterControls();
                this.render();
            });
        });
    },

    syncFilterControls() {
        document.getElementById('filter-period').value = this.state.period;
        document.getElementById('filter-camera').value = this.state.cameraId;
        document.getElementById('filter-rule').value = this.state.rule;
    },

    /* ---------- 衍生資料 ---------- */

    getVisibleCameras() {
        const { cameraId } = this.state;
        return cameraId === 'all'
            ? OBSERVATION_DATA.cameras
            : OBSERVATION_DATA.cameras.filter(camera => camera.id === cameraId);
    },

    getCount(camera, ruleName) {
        const isToday = this.state.period === 'today';
        if (ruleName === 'all') return isToday ? camera.candidateCount : camera.weekCount;
        return (isToday ? camera.ruleCounts[ruleName] : camera.weekRuleCounts[ruleName]) ?? 0;
    },

    getHeatData() {
        return this.state.period === 'today' ? OBSERVATION_DATA.hourlyToday : OBSERVATION_DATA.hourlyWeek;
    },

    /* ---------- 繪製 ---------- */

    render() {
        const visibleCameras = this.getVisibleCameras();
        this.renderScope(visibleCameras);
        this.renderMetrics(visibleCameras);
        this.renderCameraTable(visibleCameras);
        this.renderRecommendations();
        this.renderDistribution(visibleCameras);
        this.renderHeatmap();
        this.renderPeriodTabs();
    },

    renderScope(visibleCameras) {
        const range = this.state.period === 'today' ? '08:00–18:44' : '2026/08/31–2026/09/06';
        document.getElementById('scope-detail').textContent =
            `${range}・${visibleCameras.length} 個路口`;
    },

    renderMetrics(visibleCameras) {
        const healthyCount = visibleCameras.filter(camera => camera.health === 'normal').length;
        const delayedCount = visibleCameras.filter(camera => camera.health === 'delayed').length;
        const candidateCount = visibleCameras.reduce(
            (total, camera) => total + this.getCount(camera, this.state.rule), 0
        );

        const healthCard = document.getElementById('metric-health');
        healthCard.querySelector('strong').textContent = `${healthyCount} / ${visibleCameras.length}`;
        healthCard.querySelector('small').textContent =
            delayedCount ? `${delayedCount} 個路口資料延遲` : '目前無資料延遲';

        document.querySelector('#metric-candidate strong').textContent = `${candidateCount} 件`;

        document.getElementById('status-summary-pill').textContent =
            `${healthyCount} 正常・${delayedCount} 延遲`;
    },

    renderCameraTable(visibleCameras) {
        const table = document.getElementById('camera-table');
        table.querySelectorAll('.camera-row:not(.camera-row--head)').forEach(row => row.remove());

        visibleCameras.forEach((camera, index) => {
            const row = document.createElement('button');
            row.className = 'camera-row';
            row.setAttribute('role', 'row');
            row.innerHTML = `
                <span class="camera-preview camera-preview--${index + 1}"><i>● LIVE</i><em>示意影像</em></span>
                <span><strong>${camera.name}</strong><small>${camera.id}・${camera.direction}</small></span>
                <span><i class="health-dot health-dot--${camera.health}"></i><strong>${camera.healthLabel}</strong><small>最後資料 ${camera.lastUpdate}</small></span>
                <span><strong>${camera.rules.length} 項</strong><small>${camera.rules.join('、')}</small></span>
                <span><strong>${this.getCount(camera, 'all')} 件</strong><small>不作風險排名</small></span>
            `;
            row.addEventListener('click', () => {
                this.state.cameraId = camera.id;
                this.syncFilterControls();
                this.render();
            });
            table.appendChild(row);
        });
    },

    renderRecommendations() {
        const list = document.getElementById('recommendation-list');
        const { cameraId, rule } = this.state;
        const visible = OBSERVATION_DATA.recommendations.filter(item =>
            (cameraId === 'all' || item.cameraId === cameraId) &&
            (rule === 'all' || item.rule === rule)
        );

        list.innerHTML = '';

        if (!visible.length) {
            list.innerHTML = `
                <div class="empty-state">
                    <strong>此篩選條件沒有推薦區域</strong>
                    <span>可切換路口或候選樣態查看其他建議。</span>
                </div>
            `;
            return;
        }

        visible.forEach((item, index) => {
            const camera = OBSERVATION_DATA.cameras.find(c => c.id === item.cameraId);
            const entry = document.createElement('button');
            entry.className = 'recommendation-item';
            entry.innerHTML = `
                <span class="recommendation-rank">${String(index + 1).padStart(2, '0')}</span>
                <span>
                    <small>${camera.name}・${item.rule}</small>
                    <strong>${item.region}</strong>
                    <em>${item.timeRange}・${item.reason}</em>
                </span>
                <b>${item.action}</b>
            `;
            entry.addEventListener('click', () => {
                this.state.cameraId = item.cameraId;
                this.state.rule = item.rule;
                this.syncFilterControls();
                this.render();
            });
            list.appendChild(entry);
        });
    },

    renderDistribution(visibleCameras) {
        const distribution = OBSERVATION_DATA.rules
            .map(name => ({
                name,
                count: visibleCameras.reduce((sum, camera) => sum + this.getCount(camera, name), 0)
            }))
            .filter(item => this.state.rule === 'all' || item.name === this.state.rule);

        const max = Math.max(...distribution.map(item => item.count), 1);
        const chart = document.getElementById('bar-chart');
        chart.innerHTML = '';

        distribution.forEach((item, index) => {
            const row = document.createElement('button');
            row.className = 'bar-row';
            row.innerHTML = `
                <span>${item.name}</span>
                <div><i style="width: ${(item.count / max) * 100}%; opacity: ${1 - index * 0.14};"></i></div>
                <strong>${item.count}</strong>
            `;
            row.addEventListener('click', () => {
                this.state.rule = item.name;
                this.syncFilterControls();
                this.render();
            });
            chart.appendChild(row);
        });
    },

    renderHeatmap() {
        const data = this.getHeatData();
        const max = Math.max(...data);
        const peakHour = data.indexOf(max);
        const pad = value => String(value).padStart(2, '0');

        const heatmap = document.getElementById('heatmap');
        heatmap.innerHTML = '';

        data.forEach((count, hour) => {
            const cell = document.createElement('div');
            cell.title = `${pad(hour)}:00・${count} 件`;
            cell.style.opacity = count === 0 ? 0.1 : 0.2 + (count / max) * 0.8;
            cell.innerHTML = `<span>${hour % 3 === 0 ? pad(hour) : ''}</span>`;
            heatmap.appendChild(cell);
        });

        document.getElementById('heatmap-summary-pill').textContent =
            `較多時段 ${pad(peakHour)}:00–${pad(peakHour + 1)}:00`;
        document.getElementById('heatmap-note').innerHTML =
            `<strong>觀測摘要</strong>${pad(peakHour)}:00–${pad(peakHour + 1)}:00 的候選事件較多，共 ${max} 件；僅建議優先安排人工檢視。`;
    },

    renderPeriodTabs() {
        document.querySelectorAll('.period-tabs button').forEach(button => {
            button.classList.toggle('active', button.dataset.period === this.state.period);
        });
    }
};

window.adminApp = {
    toggleSidebar: () => AdminApp.toggleSidebar()
};

document.addEventListener('DOMContentLoaded', () => {
    AdminApp.init();
});
