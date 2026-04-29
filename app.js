/**
 * API 服務層 - 負責獲取後端（目前為 data.js）的資料
 */
const ApiService = {
    async fetchCases() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // mockCases 定義於 data.js 中
                resolve(typeof mockCases !== 'undefined' ? mockCases : []);
            }, 300);
        });
    }
};

/**
 * 工具函數：處理時間格式與相對時間計算
 */
const TimeUtils = {
    formatRelativeTime(dateString) {
        const now = new Date();
        const past = new Date(dateString);
        const diffInMs = now - past;
        const diffInMins = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (diffInMins < 1) return '剛剛';
        if (diffInMins < 60) return `${diffInMins}m ago`;
        if (diffInHours < 24) return `${diffInHours}h ago`;
        return `${diffInDays}d ago`;
    },
    formatFullTime(dateString) {
        if (!dateString) return '';
        return dateString.replace('T', ' ').split('.')[0];
    }
};

/**
 * UI 渲染引擎
 */
const UIRenderer = {
    createCaseItemHTML(c) {
        const displayTime = TimeUtils.formatRelativeTime(c.timestamp);
        return `
            <div class="card-bg p-3 rounded-lg border border-transparent hover:border-blue-500 cursor-pointer transition group" 
                 onclick="app.handleCaseClick('${c.id}')">
                <div class="flex items-center space-x-3">
                    <div class="w-16 h-12 bg-gray-800 rounded overflow-hidden">
                        <img src="${c.images[0]}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between">
                            <span class="text-sm font-bold text-gray-200">#${c.id}</span>
                            <span class="text-[10px] text-gray-500">${displayTime}</span>
                        </div>
                        <p class="text-[10px] text-gray-400">車牌：${c.plate}</p>
                    </div>
                </div>
            </div>
        `;
    },

    renderDetail(c) {
        if (!c) return;
        const headerArea = document.getElementById('detail-header');
        if (headerArea) {
            headerArea.innerHTML = `
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="text-2xl font-black tracking-tighter text-white">Case #${c.id}</h2>
                        <div class="flex items-center space-x-4 mt-1">
                            <span class="text-blue-400 font-mono text-sm"><i class="fas fa-car mr-1"></i> ${c.plate}</span>
                            <span class="text-gray-400 text-sm"><i class="fas fa-map-marker-alt mr-1"></i> ${c.location}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-[10px] px-2 py-1 rounded border font-bold uppercase">待審核</span>
                    </div>
                </div>
            `;
        }

        const evidenceBox = document.getElementById('evidence-grid');
        if (evidenceBox) {
            const fullTime = TimeUtils.formatFullTime(c.timestamp);
            evidenceBox.className = "card-bg p-4 rounded-2xl border border-gray-800 shadow-xl space-y-3";
            evidenceBox.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <span class="text-blue-400 font-semibold text-sm flex items-center">
                        <i class="fas fa-camera mr-2"></i> 違規證據影像
                    </span>
                    <span class="text-[10px] text-gray-500 font-mono">${fullTime}</span>
                </div>
                <div id="main-display-area" class="relative rounded-xl overflow-hidden bg-black aspect-video border border-gray-700 group">
                    <img id="main-img-view" src="${c.images[0]}" class="w-full h-full object-contain cursor-zoom-in" onclick="app.openLightbox(this.src)">
                    <video id="main-video-view" class="hidden w-full h-full object-contain" controls muted loop>
                        <source src="${c.video}" type="video/mp4">
                    </video>
                    <div id="display-label" class="absolute bottom-3 left-3 text-[10px] bg-black/60 text-gray-300 px-2 py-1 rounded backdrop-blur-sm">違規主景 (CAM 1)</div>
                </div>
                <div class="grid grid-cols-4 gap-2">
                    ${c.images.map((img, idx) => `
                        <div class="relative aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${idx === 0 ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-800 hover:border-gray-600'}" 
                             onclick="app.switchMainDisplay('img', '${img}', ${idx}, this)">
                            <img src="${img}" class="w-full h-full object-cover opacity-70 hover:opacity-100 transition">
                        </div>
                    `).join('')}
                    <div class="relative aspect-video rounded-lg overflow-hidden border-2 border-gray-800 cursor-pointer flex items-center justify-center bg-gray-900 hover:border-gray-600 transition" 
                         onclick="app.switchMainDisplay('video', '${c.video}', 3, this)">
                        <i class="fas fa-play text-blue-500 text-xs"></i>
                    </div>
                </div>
            `;
        }

        const analysisArea = document.getElementById('analysis-container');
        if (analysisArea) {
            analysisArea.innerHTML = `
                <div class="mt-6 space-y-4">
                    <div class="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                        <h3 class="text-blue-400 font-bold mb-2 flex items-center text-sm"><i class="fas fa-file-alt mr-2"></i> 違規敘述</h3>
                        <p class="text-white text-lg font-semibold">${c.type}</p>
                    </div>
                    <div class="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                        <h3 class="text-purple-400 font-bold mb-2 flex items-center text-sm"><i class="fas fa-gavel mr-2"></i> 適用法條</h3>
                        <p class="text-gray-300 text-sm leading-relaxed">${c.legalBasis}</p>
                    </div>
                </div>
            `;
        }
    }
};

/**
 * 主程式控制器
 */
const app = {
    state: {
        allCases: [],
        pendingCases: [],
        filteredCases: [],
        selectedCaseId: null,
        currentLevel: 'all' // 紀錄左側分級狀態
    },

    async init() {
        // 1. 載入外部元件
        await this.loadComponent('ticketModel.html');

        // 2. 初始化資料
        const rawData = await ApiService.fetchCases();
        this.state.allCases = rawData;
        this.state.pendingCases = rawData.filter(c => c.status === 'pending');

        // 3. 執行初始篩選與渲染
        this.applyFilters();
        this.updateStatistics();

        const lightbox = document.getElementById('lightbox');
        if (lightbox) lightbox.onclick = () => lightbox.classList.add('hidden');
    },

    async loadComponent(file) {
        try {
            const response = await fetch(file);
            const html = await response.text();
            const div = document.createElement('div');
            div.innerHTML = html;
            document.body.appendChild(div);
        } catch (e) { console.error("Component load error:", e); }
    },

    // 切換篩選面板
    toggleFilterPanel() {
        const panel = document.getElementById('filter-panel');
        if (panel) panel.classList.toggle('hidden');
    },

    // 綜合篩選邏輯
    applyFilters() {
        const keyword = document.getElementById('keyword-search').value.toLowerCase();
        const selectedTypes = Array.from(document.querySelectorAll('.filter-type:checked')).map(el => el.value);
        const selectedLocations = Array.from(document.querySelectorAll('.filter-location:checked')).map(el => el.value);

        this.state.filteredCases = this.state.pendingCases.filter(c => {
            // A. 左側信心分級
            let matchLevel = true;
            if (this.state.currentLevel === 'high') matchLevel = c.confidence >= 90;
            if (this.state.currentLevel === 'mid') matchLevel = c.confidence >= 80 && c.confidence < 90;
            if (this.state.currentLevel === 'low') matchLevel = c.confidence < 80;

            // B. 關鍵字 (案號、車牌、地點)
            const matchKeyword = c.id.toLowerCase().includes(keyword) ||
                c.plate.toLowerCase().includes(keyword) ||
                c.location.toLowerCase().includes(keyword);

            // C. 違規樣態 (勾選項目)
            const matchType = selectedTypes.length === 0 || selectedTypes.some(t => c.type.includes(t));

            // D. 路段 (勾選項目)
            const matchLocation = selectedLocations.length === 0 || selectedLocations.some(l => c.location.includes(l));

            return matchLevel && matchKeyword && matchType && matchLocation;
        });

        this.renderCaseList();

        if (this.state.filteredCases.length > 0) {
            this.handleCaseClick(this.state.filteredCases[0].id);
        } else {
            this.clearDetail();
        }
    },

    // 重置篩選
    resetFilters() {
        document.querySelectorAll('#filter-panel input[type="checkbox"]').forEach(cb => cb.checked = false);
        document.getElementById('keyword-search').value = '';
        this.applyFilters();
    },

    // 左側導覽列分級篩選
    filterCases(level, el) {
        const navAll = document.getElementById('nav-all');
        if (navAll) {
            navAll.classList.remove('sidebar-active', 'text-blue-400');
            navAll.classList.add('text-gray-400');
        }
        document.querySelectorAll('.filter-item').forEach(item => item.classList.remove('filter-active'));

        if (el) {
            if (level === 'all') {
                el.classList.add('sidebar-active', 'text-blue-400');
                el.classList.remove('text-gray-400');
            } else {
                el.classList.add('filter-active');
            }
        }

        this.state.currentLevel = level;
        this.applyFilters();
    },

    updateStatistics() {
        const stats = { total: this.state.pendingCases.length, high: 0, mid: 0, low: 0 };
        this.state.pendingCases.forEach(c => {
            if (c.confidence >= 90) stats.high++;
            else if (c.confidence >= 80) stats.mid++;
            else stats.low++;
        });

        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.innerText = val;
        };
        setVal('total-cases-count', stats.total);
        setVal('high-confidence-count', stats.high);
        setVal('mid-confidence-count', stats.mid);
        setVal('low-confidence-count', stats.low);
    },

    renderCaseList() {
        const listContainer = document.getElementById('case-list');
        if (listContainer) {
            listContainer.innerHTML = this.state.filteredCases
                .map(c => UIRenderer.createCaseItemHTML(c))
                .join('');
        }
    },

    handleCaseClick(id) {
        this.state.selectedCaseId = id;
        const selectedData = this.state.allCases.find(c => c.id === id);
        UIRenderer.renderDetail(selectedData);

        document.querySelectorAll('#case-list > div').forEach(item => {
            const isTarget = item.getAttribute('onclick').includes(id);
            item.classList.toggle('border-blue-500', isTarget);
            item.classList.toggle('bg-blue-900/10', isTarget);
        });
    },

    clearDetail() {
        document.getElementById('detail-header').innerHTML = '<p class="text-gray-500 text-center mt-10">查無待處理案件</p>';
        document.getElementById('evidence-grid').innerHTML = '';
        document.getElementById('analysis-container').innerHTML = '';
    },

    openTicket() {
        const c = this.state.allCases.find(item => item.id === this.state.selectedCaseId);
        if (c && typeof TicketModal !== 'undefined') TicketModal.open(c);
    },

    closeTicket() {
        if (typeof TicketModal !== 'undefined') TicketModal.close();
    },

    confirmTicket() {
        const target = this.state.allCases.find(c => c.id === this.state.selectedCaseId);
        if (target) {
            target.status = 'verified';
            alert(`案件 ${this.state.selectedCaseId} 舉發成功，已寄送通知。`);
        }
        this.closeTicket();
        this.init(); // 重新整理狀態
    },

    switchMainDisplay(type, src, idx, el) {
        const imgView = document.getElementById('main-img-view');
        const videoView = document.getElementById('main-video-view');
        const label = document.getElementById('display-label');
        const labels = ['違規主景 (CAM 1)', '車牌特寫 (CAM 2)', '環境關聯 (CAM 3)', '動態追蹤錄影'];
        if (label) label.innerText = labels[idx];

        if (type === 'img') {
            if (videoView) videoView.pause();
            videoView.classList.add('hidden');
            imgView.classList.remove('hidden');
            imgView.src = src;
        } else {
            imgView.classList.add('hidden');
            videoView.classList.remove('hidden');
            videoView.play();
        }

        const thumbnails = el.parentElement.children;
        Array.from(thumbnails).forEach(thumb => {
            thumb.classList.remove('border-blue-500', 'shadow-lg', 'shadow-blue-500/20');
            thumb.classList.add('border-gray-800');
        });
        el.classList.add('border-blue-500', 'shadow-lg', 'shadow-blue-500/20');
        el.classList.remove('border-gray-800');
    },

    openLightbox(src) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        if (lightbox && lightboxImg) {
            lightboxImg.src = src;
            lightbox.classList.remove('hidden');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());