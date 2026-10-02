/**
 * 數據監測中心 - 邏輯 (admin.js)
 *
 * 資料來自 Firebase 專案 observation-e158b 的三個 collection：
 * observation_cameras、observation_hourly、observation_daily，由觀測系統的
 * main.py 與 tools/recommend.py 以 Admin SDK 寫入。本頁**只讀不寫**。
 *
 * 這三份資料都帶 not_for_enforcement: true，是候選事件的彙總計數，不是違規成立。
 */

import { db, collection, onSnapshot } from './firebase-observation.js';

/**
 * 後端的 rule_name 是 snake_case 英文，本頁顯示中文。這份對照表由前端維護，
 * 後端新增規則時要同步；查不到就原樣顯示 rule_name，不猜一個中文名。
 */
const RULE_LABELS = {
    illegal_left_turn: '禁止左轉',
    double_yellow_crossing: '雙黃線跨越',
    lane_crossing: '標線跨越',
    motorcycle_prohibited_lane: '機車進入禁行區'
};

const ruleLabel = name => RULE_LABELS[name] ?? name;
const pad = value => String(value).padStart(2, '0');

const Store = {
    cameras: [],
    hourly: [],
    daily: [],
    dates: [],

    /**
     * 監聽三個 collection（SPEC_N M10）。每次快照只換掉該 collection 的陣列，
     * 衍生的 dates 照同一規則重算。
     *
     * 首次繪製等三個 collection 的第一次快照都到齊才呼叫 onUpdate：只到一部分
     * 就畫，會先閃一次「尚無資料」的空狀態。之後任一 collection 更新就呼叫。
     *
     * 讀取量：每次開頁的第一次快照會讀整個 observation_hourly，文件數隨部署
     * 天數線性增加；本期不加日期篩選。
     */
    subscribe(onUpdate, onError) {
        const sources = {
            cameras: 'observation_cameras',
            hourly: 'observation_hourly',
            daily: 'observation_daily'
        };
        const received = new Set();
        Object.entries(sources).forEach(([key, name]) => {
            onSnapshot(
                collection(db, name),
                snapshot => {
                    this.apply(key, snapshot.docs.map(doc => doc.data()));
                    received.add(key);
                    if (received.size === Object.keys(sources).length) onUpdate();
                },
                onError
            );
        });
    },

    apply(key, rows) {
        if (key === 'cameras') {
            this.cameras = rows.sort((a, b) => String(a.camera_id).localeCompare(String(b.camera_id)));
        } else if (key === 'hourly') {
            this.hourly = rows;
            this.dates = [...new Set(rows.map(row => row.date))].sort();
        } else {
            this.daily = rows;
        }
    },

    /**
     * 「今日」取**資料裡最新的一天**，不是瀏覽器的今天。
     *
     * 事件時間走影像時間軸（錄影起始時刻 + 軌跡偏移），影片回放的日期與牆上時鐘
     * 可以差很遠；用系統日期篩選會讓整頁在回放資料上變成全空。
     */
    activeDates(period) {
        if (!this.dates.length) return [];
        return period === 'today' ? this.dates.slice(-1) : this.dates.slice(-7);
    },

    ruleNames() {
        const names = new Set();
        this.cameras.forEach(camera => (camera.enabled_rules ?? []).forEach(name => names.add(name)));
        this.hourly.forEach(row => Object.keys(row.counts ?? {}).forEach(name => names.add(name)));
        return [...names].sort();
    },

    rowsFor(cameraIds, dates) {
        return this.hourly.filter(row =>
            cameraIds.includes(row.camera_id) && dates.includes(row.date));
    },

    countOf(row, ruleName) {
        const counts = row.counts ?? {};
        if (ruleName === 'all') return Object.values(counts).reduce((sum, value) => sum + value, 0);
        return counts[ruleName] ?? 0;
    },

    total(cameraIds, dates, ruleName) {
        return this.rowsFor(cameraIds, dates)
            .reduce((sum, row) => sum + this.countOf(row, ruleName), 0);
    },

    hourlySeries(cameraIds, dates, ruleName) {
        const series = new Array(24).fill(0);
        this.rowsFor(cameraIds, dates).forEach(row => {
            series[row.hour] += this.countOf(row, ruleName);
        });
        return series;
    },

    /** 日報表的 recommendations 逐列：{date, rule_name, camera_id, event_count, threshold}。 */
    recommendations(dates) {
        return this.daily
            .filter(report => dates.includes(report.date))
            .flatMap(report => report.recommendations ?? []);
    },

    cameraName(cameraId) {
        const camera = this.cameras.find(item => item.camera_id === cameraId);
        return camera ? camera.name : cameraId;
    }
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

    /** 監聽錯誤；有值後狀態列固定顯示錯誤，不再被之後的快照蓋掉。 */
    loadError: null,

    init() {
        this.setStatus('loading', '正在讀取 Firestore…', '');
        // 篩選只綁一次：refresh() 每次資料更新都會跑，放在那裡會重複綁定（SPEC_N W4）。
        this.bindFilters();
        Store.subscribe(() => this.refresh(), error => this.showLoadError(error));
    },

    /** 資料更新時重算一切衍生畫面；使用者目前的篩選盡量保留（SPEC_N §9.2）。 */
    refresh() {
        this.updateDataStatus();
        this.buildFilterOptions();
        this.reconcileState();
        this.syncFilterControls();
        this.render();
    },

    updateDataStatus() {
        if (this.loadError) return;
        if (!Store.cameras.length) {
            this.setStatus('empty', '尚無任何路口資料。', '請先在觀測系統端帶 --credentials 執行 main.py。');
        } else if (!Store.dates.length) {
            this.setStatus('empty', '已讀到路口清單，但尚無任何小時統計。', '路口已發佈，但該次執行沒有產生候選事件。');
        } else {
            this.clearStatus();
        }
    },

    /**
     * Firestore 監聽出錯後就停止、不再送更新；本期不自動重新訂閱（SPEC_N §9.4）。
     * 停的只是出錯的那個 collection，另外兩個仍會更新，所以措辭是「部分資料」。
     * 已畫出的資料留在畫面上，狀態列明講讀取失敗並請使用者重新整理。
     */
    showLoadError(error) {
        // 讀不到就明講讀不到。讓頁面停在空白會讓人以為「今天沒有候選事件」。
        this.loadError = error;
        const hint = error?.code === 'permission-denied'
            ? '這是 Firestore 安全規則拒絕，不是沒有資料。請確認 observation_* 三個 collection 的 read 規則已部署。'
            : '請確認網路連線，以及 js/firebase-observation-config.js 的專案設定。';
        this.setStatus(
            'error',
            `讀取 Firestore 失敗：${error?.code ?? error?.message ?? error}`,
            `${hint}部分資料已停止自動更新，請重新整理頁面。`
        );
    },

    /**
     * 篩選指向的路口或規則在新資料裡已不存在時改回「全部」（SPEC_N N-D15）；
     * 否則下拉選單沒有對應選項，畫面卻還照舊篩選。
     */
    reconcileState() {
        if (this.state.cameraId !== 'all'
            && !Store.cameras.some(camera => camera.camera_id === this.state.cameraId)) {
            this.state.cameraId = 'all';
        }
        if (this.state.rule !== 'all' && !Store.ruleNames().includes(this.state.rule)) {
            this.state.rule = 'all';
        }
    },

    setStatus(kind, message, hint) {
        const banner = document.getElementById('data-status');
        if (!banner) return;
        banner.hidden = false;
        banner.dataset.kind = kind;
        banner.innerHTML = `<strong>${message}</strong>${hint ? `<span>${hint}</span>` : ''}`;
    },

    clearStatus() {
        const banner = document.getElementById('data-status');
        if (banner) banner.hidden = true;
    },

    /* ---------- 篩選列 ---------- */

    buildFilterOptions() {
        // 每次重建前先清掉 JS 產生的選項，只留 admin.html 的靜態「全部」（SPEC_N W3）。
        const cameraSelect = document.getElementById('filter-camera');
        cameraSelect.querySelectorAll('option:not([value="all"])').forEach(option => option.remove());
        Store.cameras.forEach(camera => {
            const option = document.createElement('option');
            option.value = camera.camera_id;
            option.textContent = `${camera.camera_id}・${camera.name}`;
            cameraSelect.appendChild(option);
        });

        const ruleSelect = document.getElementById('filter-rule');
        ruleSelect.querySelectorAll('option:not([value="all"])').forEach(option => option.remove());
        Store.ruleNames().forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = ruleLabel(name);
            ruleSelect.appendChild(option);
        });

        // 期間選項的文字由資料決定，不寫死日期。
        const todayOption = document.getElementById('period-option-today');
        const weekOption = document.getElementById('period-option-week');
        const latest = Store.dates[Store.dates.length - 1];
        if (todayOption) todayOption.textContent = latest ? `${latest}（最新觀測日）` : '最新觀測日';
        if (weekOption) weekOption.textContent = `近 ${Math.min(Store.dates.length, 7)} 個觀測日`;

        const updatedAt = document.getElementById('page-updated-at');
        if (updatedAt) {
            const stamps = Store.cameras.map(camera => camera.last_observed_at).filter(Boolean).sort();
            updatedAt.textContent = stamps.length ? stamps[stamps.length - 1].slice(0, 19).replace('T', ' ') : '尚無觀測';
        }
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
            ? Store.cameras
            : Store.cameras.filter(camera => camera.camera_id === cameraId);
    },

    /**
     * 健康度只分「有沒有觀測紀錄」，不設逾時門檻。
     *
     * last_observed_at 在影像時間軸上，拿它跟瀏覽器的現在時刻相減在影片回放時
     * 沒有意義；憑空定一個「超過 N 小時算延遲」會產生看似精確的假狀態。
     */
    cameraHealth(camera) {
        const observed = Boolean(camera.last_observed_at);
        return {
            health: observed ? 'normal' : 'delayed',
            healthLabel: observed ? '已觀測' : '尚無觀測',
            lastUpdate: observed ? camera.last_observed_at.slice(11, 19) : '—'
        };
    },

    /* ---------- 繪製 ---------- */

    render() {
        const visibleCameras = this.getVisibleCameras();
        const dates = Store.activeDates(this.state.period);
        this.renderScope(visibleCameras, dates);
        this.renderMetrics(visibleCameras, dates);
        this.renderCameraTable(visibleCameras, dates);
        this.renderRecommendations(dates);
        this.renderDistribution(visibleCameras, dates);
        this.renderHeatmap(visibleCameras, dates);
        this.renderPeriodTabs();
    },

    renderScope(visibleCameras, dates) {
        const range = dates.length === 0
            ? '無觀測資料'
            : dates.length === 1
                ? dates[0]
                : `${dates[0]}–${dates[dates.length - 1]}`;
        document.getElementById('scope-detail').textContent =
            `${range}・${visibleCameras.length} 個路口`;
    },

    renderMetrics(visibleCameras, dates) {
        const observedCount = visibleCameras.filter(camera => this.cameraHealth(camera).health === 'normal').length;
        const pendingCount = visibleCameras.length - observedCount;
        const cameraIds = visibleCameras.map(camera => camera.camera_id);
        const candidateCount = Store.total(cameraIds, dates, this.state.rule);

        const healthCard = document.getElementById('metric-health');
        healthCard.querySelector('strong').textContent = `${observedCount} / ${visibleCameras.length}`;
        healthCard.querySelector('small').textContent =
            pendingCount ? `${pendingCount} 個路口尚無觀測紀錄` : '所有路口皆有觀測紀錄';

        document.querySelector('#metric-candidate strong').textContent = `${candidateCount} 件`;

        document.getElementById('status-summary-pill').textContent =
            `${observedCount} 已觀測・${pendingCount} 尚無`;
    },

    renderCameraTable(visibleCameras, dates) {
        const table = document.getElementById('camera-table');
        table.querySelectorAll('.camera-row:not(.camera-row--head)').forEach(row => row.remove());

        visibleCameras.forEach((camera, index) => {
            const { health, healthLabel, lastUpdate } = this.cameraHealth(camera);
            const rules = camera.enabled_rules ?? [];
            const count = Store.total([camera.camera_id], dates, 'all');
            const row = document.createElement('button');
            row.className = 'camera-row';
            row.setAttribute('role', 'row');
            row.innerHTML = `
                <span class="camera-preview camera-preview--${index + 1}"><i>● LIVE</i><em>示意影像</em></span>
                <span><strong>${camera.name}</strong><small>${camera.camera_id}${camera.direction ? `・${camera.direction}` : ''}</small></span>
                <span><i class="health-dot health-dot--${health}"></i><strong>${healthLabel}</strong><small>最後資料 ${lastUpdate}</small></span>
                <span><strong>${rules.length} 項</strong><small>${rules.map(ruleLabel).join('、') || '未啟用規則'}</small></span>
                <span><strong>${count} 件</strong><small>不作風險排名</small></span>
            `;
            row.addEventListener('click', () => {
                this.state.cameraId = camera.camera_id;
                this.syncFilterControls();
                this.render();
            });
            table.appendChild(row);
        });
    },

    renderRecommendations(dates) {
        const list = document.getElementById('recommendation-list');
        const { cameraId, rule } = this.state;
        const visible = Store.recommendations(dates).filter(item =>
            (cameraId === 'all' || item.camera_id === cameraId) &&
            (rule === 'all' || item.rule_name === rule)
        );

        list.innerHTML = '';

        if (!visible.length) {
            list.innerHTML = `
                <div class="empty-state">
                    <strong>此範圍沒有超過門檻的路口</strong>
                    <span>推薦來自日報表的跨路口 μ+2σ 門檻；目前沒有任何路口達標。</span>
                </div>
            `;
            return;
        }

        visible.forEach((item, index) => {
            const entry = document.createElement('button');
            entry.className = 'recommendation-item';
            entry.innerHTML = `
                <span class="recommendation-rank">${String(index + 1).padStart(2, '0')}</span>
                <span>
                    <small>${Store.cameraName(item.camera_id)}・${ruleLabel(item.rule_name)}</small>
                    <strong>候選事件 ${item.event_count} 件，達當日門檻 ${item.threshold}</strong>
                    <em>${item.date}・門檻為跨路口 μ+2σ，僅供安排人工檢視的先後順序</em>
                </span>
                <b>${item.event_count} 件</b>
            `;
            entry.addEventListener('click', () => {
                this.state.cameraId = item.camera_id;
                this.state.rule = item.rule_name;
                this.syncFilterControls();
                this.render();
            });
            list.appendChild(entry);
        });
    },

    renderDistribution(visibleCameras, dates) {
        const cameraIds = visibleCameras.map(camera => camera.camera_id);
        const distribution = Store.ruleNames()
            .map(name => ({ name, count: Store.total(cameraIds, dates, name) }))
            .filter(item => this.state.rule === 'all' || item.name === this.state.rule);

        const max = Math.max(...distribution.map(item => item.count), 1);
        const chart = document.getElementById('bar-chart');
        chart.innerHTML = '';

        distribution.forEach((item, index) => {
            const row = document.createElement('button');
            row.className = 'bar-row';
            row.innerHTML = `
                <span>${ruleLabel(item.name)}</span>
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

    renderHeatmap(visibleCameras, dates) {
        const cameraIds = visibleCameras.map(camera => camera.camera_id);
        const data = Store.hourlySeries(cameraIds, dates, this.state.rule);
        const max = Math.max(...data);

        const heatmap = document.getElementById('heatmap');
        heatmap.innerHTML = '';

        data.forEach((count, hour) => {
            const cell = document.createElement('div');
            cell.title = `${pad(hour)}:00・${count} 件`;
            // max 為 0 時不做正規化：除以 0 會讓整排色深變成 NaN 而全部消失。
            cell.style.opacity = max === 0 || count === 0 ? 0.1 : 0.2 + (count / max) * 0.8;
            cell.innerHTML = `<span>${hour % 3 === 0 ? pad(hour) : ''}</span>`;
            heatmap.appendChild(cell);
        });

        const summary = document.getElementById('heatmap-summary-pill');
        const note = document.getElementById('heatmap-note');

        if (max === 0) {
            summary.textContent = '此範圍無候選事件';
            note.innerHTML = '<strong>觀測摘要</strong>此範圍內沒有候選事件，無時段分布可看。';
            return;
        }

        const peakHour = data.indexOf(max);
        summary.textContent = `較多時段 ${pad(peakHour)}:00–${pad(peakHour + 1)}:00`;
        note.innerHTML =
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
