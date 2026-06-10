/**
 * AI 交通違規管理系統 - 設備管理邏輯 (devices.js)
 */

window.devicesApp = {
    state: {
        // 設定台中地區主要科技執法路口的硬體參數
        nodes: [
            { id: 'N001', name: "西屯路/逢甲路口", lat: 24.1786, lng: 120.6450, camId: "snd-1200", hostId: "sni-450", vendor: "研華物聯網", status: "online" },
            { id: 'N002', name: "文心路/台灣大道", lat: 24.1617, lng: 120.6467, camId: "snd-1201", hostId: "sni-451", vendor: "研華物聯網", status: "online" },
            { id: 'N003', name: "崇德路/漢口路口", lat: 24.1661, lng: 120.6853, camId: "cam-cx20", hostId: "hst-cx99", vendor: "中華電信", status: "online" },
            { id: 'N004', name: "五權西路/忠明南路", lat: 24.1378, lng: 120.6592, camId: "cam-cx21", hostId: "hst-cx100", vendor: "中華電信", status: "warning" },
            { id: 'N005', name: "三民路/精武路口", lat: 24.1485, lng: 120.6841, camId: "px-900", hostId: "edge-30", vendor: "遠傳電信", status: "online" },
            { id: 'N006', name: "公益路/美村路口", lat: 24.1512, lng: 120.6625, camId: "px-901", hostId: "edge-31", vendor: "遠傳電信", status: "online" },
        ],
        selectedNodeId: 'N001',
        map: null,
        markers: {},
        sparklines: {}, // 存儲各種微型心電圖表實例
        yoloAnimationId: null
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
    },

    init() {
        // 1. 初始化 1/4 區塊的設備列表
        this.renderEquipmentList();

        // 2. 初始化 1/4 區塊的地圖
        this.initMap();

        // 3. 初始化地圖旁的狀態小圖表 (送期待審核量心電圖)
        this.renderStatusSparklines();

        // 4. 載入首個節點到下半部具體細節畫面中
        this.selectNode(this.state.nodes[0].id);

        // 5. 啟動背景全域資料串流 (讓所有心電圖會統一跳動更新)
        this.startDataStream();
    },

    // ==========================================
    // 區塊 1: 設備列表
    // ==========================================
    renderEquipmentList() {
        const container = document.getElementById('equipment-list-panel');
        if (!container) return;

        let html = '';
        this.state.nodes.forEach((node, idx) => {
            const isSelected = node.id === this.state.selectedNodeId;
            const statusColor = node.status === 'online' ? 'bg-emerald-500' : 'bg-red-500 animate-pulse';

            html += `
                <div class="p-3 rounded-lg border border-gray-800/80 cursor-pointer transition hover:bg-gray-800/40 ${isSelected ? 'active-row' : ''}" 
                     onclick="devicesApp.selectNode('${node.id}')" id="list-row-${node.id}">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <span class="text-xs font-bold text-gray-200">${idx + 1}. ${node.name}</span>
                            <span class="status-dot ${statusColor}"></span>
                        </div>
                        <span class="text-[10px] text-gray-500 font-mono">ID: ${node.id}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-[10px] text-gray-400">
                        <div class="flex flex-col gap-1 bg-black/30 p-1.5 rounded border border-gray-800">
                            <span class="flex justify-between">鏡頭 <span class="text-blue-400 font-mono">${node.camId}</span></span>
                            <div class="sparkline-container"><canvas id="spark-list-cam-${node.id}"></canvas></div>
                        </div>
                        <div class="flex flex-col gap-1 bg-black/30 p-1.5 rounded border border-gray-800">
                            <span class="flex justify-between">主機 <span class="text-purple-400 font-mono">${node.hostId}</span></span>
                            <div class="sparkline-container"><canvas id="spark-list-host-${node.id}"></canvas></div>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;

        // 生成清單列表內的心電圖實例
        this.state.nodes.forEach(node => {
            this.createEcgChart(`spark-list-cam-${node.id}`, '#3b82f6');
            this.createEcgChart(`spark-list-host-${node.id}`, '#a855f7');
        });
    },

    // ==========================================
    // 區塊 2: 設備狀態與地圖
    // ==========================================
    initMap() {
        const mapEl = document.getElementById('live-devices-map');
        if (!mapEl) return;
        this.state.map = L.map('live-devices-map', { zoomControl: false }).setView([24.155, 120.665], 13);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(this.state.map);

        // 放置地理熱點 Marker
        this.state.nodes.forEach(node => {
            const intensity = Math.floor(Math.random() * 50) + 10;
            const radius = Math.max(8, intensity / 3);
            const color = node.status === 'online' ? '#3b82f6' : '#ef4444';

            const marker = L.circleMarker([node.lat, node.lng], {
                radius: radius,
                fillColor: color,
                color: '#fff',
                weight: 1,
                opacity: 0.8,
                fillOpacity: 0.5
            }).bindPopup(`<b>${node.name}</b><br>1hr 案件量: ${intensity}`).addTo(this.state.map);

            marker.on('click', () => {
                this.selectNode(node.id);
            });

            this.state.markers[node.id] = marker;
        });
    },

    renderStatusSparklines() {
        const container = document.getElementById('map-sparklines-panel');
        if (!container) return;

        let html = '';
        this.state.nodes.forEach(node => {
            html += `
                <div class="flex items-center gap-3 p-2 bg-black/20 rounded-lg border border-gray-800">
                    <div class="w-16 h-8 flex-shrink-0 relative"><canvas id="spark-status-${node.id}"></canvas></div>
                    <div class="flex-1 min-w-0">
                        <p class="text-[11px] font-bold text-gray-300 truncate">${node.name}</p>
                        <p class="text-[9px] text-gray-500 font-mono truncate">1HR 待審核上傳量</p>
                    </div>
                    <div class="text-[10px] text-gray-400 font-mono text-right w-10">
                        <span id="status-val-${node.id}">0</span>件
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;

        // 生成地圖右側心電圖
        this.state.nodes.forEach(node => {
            this.createEcgChart(`spark-status-${node.id}`, '#10b981', true);
        });
    },

    // ==========================================
    // 區塊 3: 單一設備具體細節
    // ==========================================
    selectNode(id) {
        this.state.selectedNodeId = id;
        const node = this.state.nodes.find(n => n.id === id);
        if(!node) return;

        // 同步更新左上角列表 UI
        document.querySelectorAll('[id^="list-row-"]').forEach(el => el.classList.remove('active-row'));
        const row = document.getElementById(`list-row-${id}`);
        if(row) row.classList.add('active-row');

        // 同步移動地圖視角
        if(this.state.map) {
            this.state.map.flyTo([node.lat, node.lng], 15, { duration: 0.8 });
        }

        // ================= 更新文字元資料 =================
        document.getElementById('detail-node-title').innerText = node.name;
        document.getElementById('meta-location').innerText = node.name;
        document.getElementById('meta-loc-id').innerText = node.id;
        document.getElementById('meta-cam-id').innerText = node.camId;
        document.getElementById('meta-host-id').innerText = node.hostId;
        document.getElementById('meta-vendor').innerText = node.vendor;

        // 隨機抽取 mockCases 資料做為該節點今日事件 (利用共用的 data.js)
        const nodeCases = (typeof mockCases !== 'undefined' ? mockCases : []).filter(c => Math.random() > 0.6).slice(0, 15);
        document.getElementById('meta-today-count').innerText = nodeCases.length + 42;

        // ================= 更新違規樣態分佈圖 =================
        const types = ["闖紅燈", "未禮讓行人", "違規停車", "超速", "違規左轉"];
        let typeHtml = '';
        types.forEach(t => {
            const count = Math.floor(Math.random() * 20);
            const percent = count * 2 + 5;
            typeHtml += `
                <div class="flex items-center justify-between group">
                    <span class="w-16 truncate">${t}</span>
                    <div class="flex-1 mx-2 bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-blue-500 h-full group-hover:bg-blue-400 transition-colors" style="width: ${percent}%"></div>
                    </div>
                    <span class="w-6 text-right font-mono">${count}</span>
                </div>
            `;
        });
        document.getElementById('type-counts-panel').innerHTML = typeHtml;

        // ================= 更新案件列表清單 =================
        const tbody = document.getElementById('detail-case-tbody');
        if(tbody) {
            tbody.innerHTML = nodeCases.map(c => `
                <tr class="border-b border-gray-800/30 hover:bg-gray-800/40 transition">
                    <td class="p-2 pl-3">${c.id.substring(0,8)}</td>
                    <td class="p-2 text-gray-500">${c.timestamp.substring(11,16)}</td>
                    <td class="p-2 text-blue-400">${c.type}</td>
                    <td class="p-2">${c.plate}</td>
                    <td class="p-2 text-right pr-3 ${c.confidence >= 90 ? 'text-emerald-400' : 'text-yellow-400'}">${c.confidence}%</td>
                </tr>
            `).join('') || `<tr><td colspan="5" class="p-4 text-center text-gray-500">暫無今日案件數據</td></tr>`;
        }

        // ================= 建立 4 個 Pipeline 心電圖 =================
        this.createEcgChart('pipe-chart-cam', '#3b82f6', false, 40);
        this.createEcgChart('pipe-chart-scene', '#10b981', false, 40);
        this.createEcgChart('pipe-chart-law', '#f59e0b', false, 40);
        this.createEcgChart('pipe-chart-upload', '#ef4444', false, 40);

        // 重啟左下方即時影像 YOLO Bounding Box 畫布動畫
        this.startYoloCanvasAnimation();
    },

    startYoloCanvasAnimation() {
        const canvas = document.getElementById('yolo-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // 畫布解析度同步至容器大小
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        if (this.state.yoloAnimationId) {
            cancelAnimationFrame(this.state.yoloAnimationId);
        }

        let time = 0;
        // 模擬 3 個會飄移的 YOLO 偵測框
        const boxes = [
            { x: 0.2, y: 0.4, w: 0.15, h: 0.25, label: "car 0.94", color: "#10b981", speedX: 0.002, speedY: 0.001 },
            { x: 0.7, y: 0.5, w: 0.1, h: 0.2, label: "motorcycle 0.88", color: "#f59e0b", speedX: -0.003, speedY: 0.0005 },
            { x: 0.4, y: 0.6, w: 0.05, h: 0.15, label: "person 0.91", color: "#3b82f6", speedX: 0.001, speedY: -0.001 }
        ];

        const render = () => {
            time++;
            // 填滿背景 (模擬黑暗街道)
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 繪製微弱斑馬線特效
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            for(let i=0; i<10; i++) {
                ctx.fillRect(canvas.width*0.2 + i*40, canvas.height*0.7, 20, 100);
            }

            // 更新並繪製 YOLO Box
            boxes.forEach(b => {
                b.x += b.speedX;
                b.y += b.speedY;
                // 邊界反彈
                if (b.x < 0 || b.x + b.w > 1) b.speedX *= -1;
                if (b.y < 0 || b.y + b.h > 1) b.speedY *= -1;

                const px = b.x * canvas.width;
                const py = b.y * canvas.height;
                const pw = b.w * canvas.width;
                const ph = b.h * canvas.height;

                // 畫出物件框
                ctx.strokeStyle = b.color;
                ctx.lineWidth = 2;
                ctx.strokeRect(px, py, pw, ph);

                // 畫出頂部信心度標籤
                ctx.fillStyle = b.color;
                ctx.fillRect(px, py - 16, ctx.measureText(b.label).width + 8, 16);
                ctx.fillStyle = '#000';
                ctx.font = '10px monospace';
                ctx.fillText(b.label, px + 4, py - 4);
            });

            // 繪製向下滾動的掃描線特效
            const scanY = (time * 2) % canvas.height;
            ctx.fillStyle = 'rgba(16, 185, 129, 0.1)';
            ctx.fillRect(0, scanY, canvas.width, 4);

            this.state.yoloAnimationId = requestAnimationFrame(render);
        };
        render();
    },

    // ==========================================
    // 圖表與串流公用函數
    // ==========================================
    createEcgChart(canvasId, color, showFill = false, dataLength = 30) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        if (this.state.sparklines[canvasId]) {
            this.state.sparklines[canvasId].destroy();
        }

        // 建立無座標軸的隱藏線條資料
        const data = Array(dataLength).fill(0);
        const labels = Array(dataLength).fill('');

        this.state.sparklines[canvasId] = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderColor: color,
                    borderWidth: 1.5,
                    tension: 0.4, // 平滑曲線
                    pointRadius: 0, // 隱藏節點
                    fill: showFill,
                    backgroundColor: showFill ? color.replace(')', ', 0.1)').replace('rgb', 'rgba') : 'transparent',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 0 }, // 【重要】關閉動畫讓即時跳動不閃爍
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: {
                    x: { display: false },
                    y: { display: false, min: -20, max: 100 } // 固定 Y 軸範圍，確保波動呈現出心電圖感
                }
            }
        });
    },

    startDataStream() {
        // 設定每 1 秒推送一次新資料，讓畫布上的 Chart.js 線條向左位移
        setInterval(() => {
            Object.keys(this.state.sparklines).forEach(id => {
                const chart = this.state.sparklines[id];
                const ds = chart.data.datasets[0];

                // 將陣列往前推
                ds.data.shift();

                // 產生新的隨機心跳值 (加入隨機尖峰模擬事件產生)
                let nextVal = Math.random() * 10;
                if (Math.random() > 0.85) {
                    nextVal = Math.random() * 60 + 30; // 尖峰
                }
                ds.data.push(nextVal);

                chart.update();

                // 若是地圖旁的小圖表，一併更新旁邊的案件計數數字
                if (id.startsWith('spark-status-')) {
                    const nodeId = id.replace('spark-status-', '');
                    const valEl = document.getElementById(`status-val-${nodeId}`);
                    if (valEl) {
                        const cur = parseInt(valEl.innerText);
                        if (Math.random() > 0.7) valEl.innerText = cur + Math.floor(Math.random() * 3);
                    }
                }
            });
        }, 1000);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.devicesApp.init();
});