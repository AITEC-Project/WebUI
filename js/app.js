const ApiService = {
    async fetchCases() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(typeof mockCases !== 'undefined' ? mockCases : []);
            }, 300);
        });
    }
};

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

const UIRenderer = {
    createCaseItemHTML(c) {
        const displayTime = TimeUtils.formatRelativeTime(c.timestamp);
        return `
            <div class="card-bg p-3 rounded-lg border border-transparent hover:border-blue-500 cursor-pointer transition group" 
                 onclick="app.handleCaseClick('${c.id}')">
                <div class="flex items-center space-x-3">
                    <div class="w-16 h-12 bg-gray-800 rounded overflow-hidden">
                        <img src="${c.images[0].src}" alt="Case ${c.id}" class="w-full h-full object-cover">
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
                    <video id="main-video-view" class="w-full h-full object-contain" controls autoplay muted loop>
                        <source src="${c.video}" type="video/mp4">
                    </video>
                    <img id="main-img-view" src="${c.images[0].src}" class="hidden w-full h-full object-contain cursor-zoom-in" onclick="app.openLightbox(this.src)">
                    <div class="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition">
                        <span class="bg-black/70 text-white text-[9px] px-2 py-1 rounded border border-white/10 flex items-center">
                            <i class="fas fa-arrow-left mr-1"></i> <i class="fas fa-arrow-right mr-1"></i> 跳轉關鍵幀
                        </span>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-2">
                    <div class="relative aspect-video rounded-lg overflow-hidden border-2 border-blue-500 cursor-pointer flex items-center justify-center bg-gray-900 transition" 
                         onclick="app.switchMainDisplay('video', '${c.video}', 0, this)">
                        <i class="fas fa-play text-blue-500 text-xs"></i>
                        <span class="absolute top-1 left-1 bg-blue-600 text-white text-[9px] px-1 rounded font-bold">1</span>
                    </div>
                    ${c.images.map((img, idx) => `
                        <div class="relative aspect-video rounded-lg overflow-hidden border-2 border-gray-800 cursor-pointer transition-all hover:border-gray-600" 
                             onclick="app.switchMainDisplay('img', '${img.src}', ${idx + 1}, this)">
                            <img src="${img.src}" class="w-full h-full object-cover opacity-70 hover:opacity-100 transition">
                            <span class="absolute top-1 left-1 bg-gray-700 text-white text-[9px] px-1 rounded font-bold">${idx + 2}</span>
                            <div class="absolute bottom-1 right-1 bg-black/60 text-[8px] text-white px-1 rounded">${img.time}s</div>
                        </div>
                    `).join('')}
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

const app = {
    state: {
        allCases: [],
        pendingCases: [],
        filteredCases: [],
        selectedCaseId: null,
        currentLevel: 'all',
        hotkeysInitialized: false
    },

    async init() {
        if (!document.getElementById('ticket-modal')) {
            await this.loadComponent('ticketModel.html');
        }
        const rawData = await ApiService.fetchCases();
        this.state.allCases = rawData;
        this.state.pendingCases = rawData.filter(c => c.status === 'pending');
        this.applyFilters();
        this.updateStatistics();
        if (!this.state.hotkeysInitialized) {
            this.initHotkeys();
            this.state.hotkeysInitialized = true;
        }

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
        } catch (e) { console.error("Component error:", e); }
    },

    initHotkeys() {
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);
            if (!currentCase) return;

            const video = document.getElementById('main-video-view');
            const thumbnails = document.querySelectorAll('#evidence-grid .grid > div');

            switch (e.key) {
                case '1': // 切換影片並跳回開頭
                    this.switchMainDisplay('video', currentCase.video, 0, thumbnails[0]);
                    video.currentTime = 0;
                    break;
                case '2':
                case '3':
                case '4': // 切換圖片並同步影片時間點
                    const idx = parseInt(e.key) - 2;
                    const imgData = currentCase.images[idx];
                    if (imgData && thumbnails[idx + 1]) {
                        this.switchMainDisplay('img', imgData.src, idx + 1, thumbnails[idx + 1]);
                    }
                    break;
                case ' ':
                    e.preventDefault();
                    if (video && !video.classList.contains('hidden')) {
                        video.paused ? video.play() : video.pause();
                    }
                    break;
                case 'ArrowRight': // 方向鍵右：跳轉至下一個關鍵幀
                    e.preventDefault();
                    this.navigateKeyframe(1);
                    break;

                case 'ArrowLeft': // 方向鍵左：跳轉至上一個關鍵幀
                    e.preventDefault();
                    this.navigateKeyframe(-1);
                    break;

                case 'Enter':
                    e.preventDefault();
                    const modal = document.getElementById('ticket-modal');
                    if (this.state.selectedCaseId && modal && modal.classList.contains('hidden')) {
                        this.openTicket();
                    }
                    break;
            }
        });
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

    switchMainDisplay(type, src, idx, el) {
        const imgView = document.getElementById('main-img-view');
        const videoView = document.getElementById('main-video-view');
        const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);

        if (type === 'img') {
            videoView.pause();
            videoView.classList.add('hidden');
            imgView.classList.remove('hidden');
            imgView.src = src;

            // 同步跳轉影片時間點
            const time = currentCase.images[idx - 1]?.time;
            if (time !== undefined) videoView.currentTime = time;
        } else {
            imgView.classList.add('hidden');
            videoView.classList.remove('hidden');
            videoView.play();
        }

        if (el) {
            Array.from(el.parentElement.children).forEach(t => {
                t.classList.remove('border-blue-500', 'shadow-lg', 'shadow-blue-500/20');
                t.classList.add('border-gray-800');
            });
            el.classList.add('border-blue-500', 'shadow-lg', 'shadow-blue-500/20');
            el.classList.remove('border-gray-800');
        }
    },

    navigateKeyframe(direction) {
        const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);
        const video = document.getElementById('main-video-view');
        const thumbnails = document.querySelectorAll('#evidence-grid .grid > div');
        if (!currentCase || !video) return;

        // 取得所有關鍵幀的時間點 (3s, 5s, 13s 等)
        const keyframeTimes = currentCase.images.map(img => img.time);
        const currentTime = video.currentTime;

        let targetIdx;
        if (direction === 1) {
            // 找下一個比現在時間大的關鍵幀
            targetIdx = keyframeTimes.findIndex(t => t > currentTime + 0.5);
            if (targetIdx === -1) targetIdx = 0; // 若到底則循環回第一個
        } else {
            // 找上一個比現在時間小的關鍵幀
            targetIdx = keyframeTimes.filter(t => t < currentTime - 0.5).length - 1;
            if (targetIdx < 0) targetIdx = keyframeTimes.length - 1; // 若到頭則循環回最後一個
        }

        // 執行跳轉：切換回影片顯示模式，並設定時間點
        if (targetIdx >= 0) {
            const targetTime = keyframeTimes[targetIdx];

            // 強制切換回影片顯示 (type 為 'video')
            this.switchMainDisplay('video', currentCase.video, 0, thumbnails[0]);

            // 設定影片秒數並播放
            video.currentTime = targetTime;
            video.play();
        }
    },

    toggleFilterPanel() {
        const panel = document.getElementById('filter-panel');
        if (panel) panel.classList.toggle('hidden');
    },

    applyFilters() {
        const keyword = document.getElementById('keyword-search').value.toLowerCase();
        const selectedTypes = Array.from(document.querySelectorAll('.filter-type:checked')).map(el => el.value);
        const selectedLocations = Array.from(document.querySelectorAll('.filter-location:checked')).map(el => el.value);

        this.state.filteredCases = this.state.pendingCases.filter(c => {
            let matchLevel = true;
            if (this.state.currentLevel === 'high') matchLevel = c.confidence >= 90;
            if (this.state.currentLevel === 'mid') matchLevel = c.confidence >= 80 && c.confidence < 90;
            if (this.state.currentLevel === 'low') matchLevel = c.confidence < 80;

            const matchKeyword = c.id.toLowerCase().includes(keyword) ||
                c.plate.toLowerCase().includes(keyword) ||
                c.location.toLowerCase().includes(keyword);

            const matchType = selectedTypes.length === 0 || selectedTypes.some(t => c.type.includes(t));

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

    resetFilters() {
        document.querySelectorAll('#filter-panel input[type="checkbox"]').forEach(cb => cb.checked = false);
        document.getElementById('keyword-search').value = '';
        this.applyFilters();
    },

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
        const container = document.getElementById('case-list');
        if (container) {
            container.innerHTML = this.state.filteredCases.map(c => UIRenderer.createCaseItemHTML(c)).join('');
        }
    },

    openTicket() {
        const c = this.state.allCases.find(item => item.id === this.state.selectedCaseId);
        if (c && typeof TicketModal !== 'undefined') TicketModal.open(c);
    },
    openLightbox(src) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        if (lightbox && lightboxImg) {
            lightboxImg.src = src;
            lightbox.classList.remove('hidden');
        }
    },

    closeTicket() {
        if (typeof TicketModal !== 'undefined') {
            TicketModal.close();
        }
    },

    confirmTicket() {
        const currentCase = this.state.allCases.find(
            c => c.id === this.state.selectedCaseId
        );

        this.closeTicket();

        if (currentCase) {
            currentCase.status = 'verified';
            alert(`案件 #${currentCase.id} 已成立。`);
            this.init();
        }
    },
};

document.addEventListener('DOMContentLoaded', () => app.init());