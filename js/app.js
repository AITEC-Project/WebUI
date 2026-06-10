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
        const absoluteTime = TimeUtils.formatFullTime(c.timestamp).substring(0, 16);

        return `
            <div class="card-bg p-3 rounded-lg border border-transparent hover:border-blue-500 cursor-pointer transition group" 
                 onclick="app.handleCaseClick('${c.id}')">
                <div class="flex items-center space-x-3">
                    <div class="w-16 h-12 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                        <img src="${c.images[0]?.src || ''}" alt="Case ${c.id}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex justify-between items-center">
                            <span class="text-sm font-bold text-gray-200">#${c.id}</span>
                            <span class="text-[10px] text-gray-500 font-mono tracking-tighter">${absoluteTime}</span>
                        </div>
                        <div class="mt-0.5 space-y-0.5">
                            <p class="text-[11px] text-gray-300 font-medium">車牌：${c.plate}</p>
                            <p class="text-[10px] text-gray-400 truncate flex items-center">
                                <i class="fas fa-map-marker-alt text-gray-500 mr-1 text-[9px]"></i>
                                ${c.location || '未知地點'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderDetail(c) {
        if (!c) return;

        // 清空或隱藏原本最上方的標頭區域
        const headerArea = document.getElementById('detail-header');
        if (headerArea) {
            headerArea.innerHTML = '';
            headerArea.className = 'hidden';
        }

        // 渲染證物區塊
        const evidenceBox = document.getElementById('evidence-grid');
        if (evidenceBox) {
            // 【修改重點 1】外層改為 items-stretch，讓左右兩欄高度切齊
            evidenceBox.className = "card-bg p-4 rounded-2xl border border-gray-800 shadow-xl space-y-3";
            evidenceBox.innerHTML = `
                <div class="flex flex-col md:flex-row gap-4 h-auto items-stretch">
                    <div class="w-full md:w-[60%] flex flex-col gap-2">
                        <div class="relative rounded-xl overflow-hidden bg-black border border-gray-700 aspect-video">
                            <video id="main-video-view" class="w-full h-full object-cover" controls autoplay muted loop>
                                <source src="${c.video}" type="video/mp4">
                            </video>
                        </div>
                        
                        <div class="w-full px-1 mt-1">
                            <div class="relative w-full h-1.5 bg-gray-800 rounded-full cursor-pointer hover:h-2 transition-all group" id="custom-progress-container">
                                <div id="custom-progress-bar" class="absolute top-0 left-0 h-full bg-gray-500 rounded-full pointer-events-none transition-all duration-75 w-0"></div>
                                <div id="marker-container" class="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                            </div>
                            <div class="flex justify-between text-[9px] text-gray-500 mt-1.5 px-1 font-mono uppercase tracking-wider">
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-full md:w-[40%] flex flex-col justify-between gap-2">
                        
                        <div class="flex flex-col gap-2">
                            <div class="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-700 bg-black cursor-pointer group" 
                                 onclick="app.openLightbox(document.getElementById('main-img-view').src)">
                                <img id="main-img-view" src="${c.images[0]?.src || ''}" alt="違規關鍵幀" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500">
                                
                                <div class="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm flex items-center border border-gray-600">
                                    <i class="fas fa-camera mr-1.5 text-blue-400"></i>
                                    <span id="img-time-tag">${c.images[0]?.time || '0'}</span>s
                                </div>
                                
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                    <i class="fas fa-search-plus text-white text-3xl drop-shadow-lg"></i>
                                </div>
                            </div>

                            <div class="grid grid-cols-3 gap-2">
                                ${c.images.slice(0, 3).map((img, idx) => `
                                    <div class="thumbnail-item relative aspect-video rounded-lg overflow-hidden border-2 ${idx === 0 ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-800'} cursor-pointer transition-all hover:border-gray-500" 
                                         onclick="app.switchPhoto(${idx}, '${img.src}', ${img.time}, this)">
                                        <img src="${img.src}" class="w-full h-full object-cover opacity-70 hover:opacity-100 transition">
                                        <span class="absolute top-1 left-1 bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">${idx + 1}</span>
                                        <div class="absolute bottom-1 right-1 bg-black/70 text-[8px] text-white px-1.5 rounded">${img.time}s</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="mt-1 text-[10px] px-0.5 flex items-center gap-1.5 text-gray-500">
                            <span class="flex items-center gap-1.5 text-gray-400">關鍵幀擷取微調</span>
                            <span class="font-mono">
                                <span class="bg-gray-800 text-gray-300 px-1 py-0.5 rounded border border-gray-700 text-[9px]">←</span> 
                                <span class="bg-gray-800 text-gray-300 px-1 py-0.5 rounded border border-gray-700 text-[9px]">→</span> 鍵 (±0.1s)
                            </span>
                        </div>
                    </div>
                </div>
            `;
        }

        const analysisArea = document.getElementById('analysis-container');
        if (analysisArea) {
            const envData = c.aiReport.find(item => item.type === 'ai' && item.text.includes('物件辨識'));
            const description = envData ? envData.text.replace('物件辨識：', '') : '';

            analysisArea.innerHTML = `
                <div class="mt-6 space-y-4">
                    <div class="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                        <h3 class="text-blue-400 font-bold mb-2 flex items-center text-sm">
                            <i class="fas fa-file-alt mr-2"></i> 違規敘述
                        </h3>
                        <p class="text-white text-lg font-semibold">${c.type}</p>
                        
                        ${description ? `<p class="text-gray-400 text-sm mt-1 leading-relaxed">${description}</p>` : ''}
                    </div>
                    
                    <div class="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                        <h3 class="text-purple-400 font-bold mb-2 flex items-center text-sm">
                            <i class="fas fa-gavel mr-2"></i> 適用法條
                        </h3>
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
        hotkeysInitialized: false,
        isSidebarCollapsed: false,
        currentKeyframeIdx: 0
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
            const cancelModal = document.getElementById('cancel-modal');
            if (cancelModal && !cancelModal.classList.contains('hidden')) {
                const isTyping = document.activeElement.tagName === 'INPUT' && document.activeElement.type === 'text';

                if (isTyping) {
                    if (e.key === 'Enter') { e.preventDefault(); this.confirmCancelCase(); }
                    if (e.key === 'Escape') { e.preventDefault(); this.closeCancelModal(); }
                    return;
                }

                const radios = document.querySelectorAll('input[name="cancel-reason"]');
                if (radios.length > 0) {
                    switch (e.key) {
                        case '1': radios[0].checked = true; e.preventDefault(); break;
                        case '2': radios[1].checked = true; e.preventDefault(); break;
                        case '3': radios[2].checked = true; e.preventDefault(); break;
                        case '4':
                            radios[3].checked = true;
                            document.getElementById('other-reason-input').focus();
                            e.preventDefault();
                            break;
                        case 'Enter': this.confirmCancelCase(); e.preventDefault(); break;
                        case 'Escape': this.closeCancelModal(); e.preventDefault(); break;
                    }
                }
                return;
            }

            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);
            if (!currentCase) return;

            const video = document.getElementById('main-video-view');
            const thumbnails = document.querySelectorAll('.thumbnail-item');
            const modal = document.getElementById('ticket-modal');

            switch (e.key) {
                case '1':
                case '2':
                case '3': {
                    e.preventDefault();
                    const idx = parseInt(e.key) - 1;
                    const imgData = currentCase.images[idx];
                    if (imgData && thumbnails[idx]) {
                        this.switchPhoto(idx, imgData.src, imgData.time, thumbnails[idx]);
                    }
                    break;
                }
                case ' ':
                    e.preventDefault();
                    if (video) {
                        video.paused ? video.play() : video.pause();
                    }
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.adjustKeyframeTime(0.1);
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.adjustKeyframeTime(-0.1);
                    break;
                case 'Delete':
                    e.preventDefault();
                    if (!modal || modal.classList.contains('hidden')) {
                        this.cancelCase();
                    }
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (this.state.selectedCaseId && modal && modal.classList.contains('hidden')) {
                        this.openTicket();
                    }
                    break;
            }
        });
    },

    updateCategoryNotch() {
        const notch = document.getElementById('category-notch');
        if (!notch) return;

        if (this.state.isSidebarCollapsed && this.state.currentLevel !== 'all') {
            let colorClass = '';
            let labelText = '';

            switch (this.state.currentLevel) {
                case 'high':
                    colorClass = 'bg-green-500';
                    labelText = '確信違規';
                    break;
                case 'mid':
                    colorClass = 'bg-yellow-500';
                    labelText = '疑似違規';
                    break;
                case 'low':
                    colorClass = 'bg-red-500';
                    labelText = '邊界案例';
                    break;
            }

            notch.innerHTML = `
                <div class="mx-3 mt-2 p-2 rounded-lg ${colorClass}/10 border border-${colorClass}/30 flex items-center justify-between text-[11px] font-bold">
                    <span class="flex items-center text-gray-200">
                        <span class="w-2 h-2 ${colorClass} rounded-full mr-2 animate-pulse"></span>
                        ${labelText}
                    </span>
                    <span class="text-gray-500 font-mono text-[10px]">共 ${this.state.filteredCases.length} 件</span>
                </div>
            `;
            notch.classList.remove('h-0', 'opacity-0');
        } else {
            notch.innerHTML = '';
            notch.classList.add('h-0', 'opacity-0');
        }
    },

    toggleSidebar() {
        this.state.isSidebarCollapsed = !this.state.isSidebarCollapsed;

        const sidebar = document.getElementById('sidebar-panel');
        const toggleIcon = document.getElementById('toggle-icon');
        const userInfo = document.getElementById('sidebar-user-info');
        const subMenu = document.getElementById('sidebar-sub-menu');
        const texts = document.querySelectorAll('.sidebar-text');
        const navItems = document.querySelectorAll('nav > a');

        if (this.state.isSidebarCollapsed) {
            sidebar.classList.remove('w-64', 'p-4');
            sidebar.classList.add('w-20', 'p-2');

            if (userInfo) {
                userInfo.classList.add('justify-center');
                userInfo.querySelector('.flex-shrink-0')?.classList.remove('mr-3');
            }

            if (subMenu) subMenu.classList.add('hidden');
            texts.forEach(el => el.classList.add('hidden'));

            navItems.forEach(item => {
                item.classList.remove('justify-between');
                item.classList.add('justify-center');
                item.querySelector('i')?.classList.remove('mr-3');
            });

            if (toggleIcon) {
                toggleIcon.classList.remove('fa-angle-left');
                toggleIcon.classList.add('fa-angle-right');
            }
        } else {
            sidebar.classList.remove('w-20', 'p-2');
            sidebar.classList.add('w-64', 'p-4');

            if (userInfo) {
                userInfo.classList.remove('justify-center');
                userInfo.querySelector('.flex-shrink-0')?.classList.add('mr-3');
            }

            if (subMenu) subMenu.classList.remove('hidden');
            texts.forEach(el => el.classList.remove('hidden'));

            navItems.forEach(item => {
                item.classList.remove('justify-center');
                if (item.id === 'nav-all') {
                    item.classList.add('justify-between');
                }
                item.querySelector('i')?.classList.add('mr-3');
            });

            if (toggleIcon) {
                toggleIcon.classList.remove('fa-angle-right');
                toggleIcon.classList.add('fa-angle-left');
            }
        }

        this.updateCategoryNotch();
    },

    handleCaseClick(id) {
        this.state.selectedCaseId = id;
        this.state.currentKeyframeIdx = 0;
        const selectedData = this.state.allCases.find(c => c.id === id);

        UIRenderer.renderDetail(selectedData);
        this.setupVideoMarkers(selectedData);

        const detailSection = document.getElementById('detail-scroll-area');
        if (detailSection) {
            detailSection.scrollTop = 0;
        }

        document.querySelectorAll('#case-list > div').forEach(item => {
            const isTarget = item.getAttribute('onclick').includes(id);
            item.classList.toggle('border-blue-500', isTarget);
            item.classList.toggle('bg-blue-900/10', isTarget);
        });
    },

    setupVideoMarkers(caseData) {
        const video = document.getElementById('main-video-view');
        const markerContainer = document.getElementById('marker-container');
        const customProgress = document.getElementById('custom-progress-bar');
        const customProgressContainer = document.getElementById('custom-progress-container');

        if (!video || !markerContainer) return;

        video.addEventListener('loadedmetadata', () => {
            const duration = video.duration || 10;
            markerContainer.innerHTML = '';

            caseData.images.slice(0, 3).forEach((img, idx) => {
                const percent = (img.time / duration) * 100;
                const marker = document.createElement('div');

                const isActive = idx === (app.state.currentKeyframeIdx || 0);
                marker.className = `keyframe-marker absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#0d1117] shadow cursor-pointer transition-all hover:scale-150 pointer-events-auto ${isActive ? 'bg-blue-500 scale-125 z-20' : 'bg-yellow-500 scale-100 z-10'}`;
                marker.style.left = `calc(${percent}% - 6px)`;
                marker.title = `點擊跳至關鍵幀 ${idx + 1} (${img.time}s)`;

                marker.onclick = (e) => {
                    e.stopPropagation();
                    const thumbnails = document.querySelectorAll('.thumbnail-item');
                    app.switchPhoto(idx, img.src, img.time, thumbnails[idx]);
                };

                markerContainer.appendChild(marker);
            });
        });

        video.addEventListener('timeupdate', () => {
            if (video.duration) {
                const percent = (video.currentTime / video.duration) * 100;
                customProgress.style.width = `${percent}%`;
            }
        });

        customProgressContainer.addEventListener('click', (e) => {
            const rect = customProgressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            video.currentTime = pos * video.duration;
        });
    },

    switchPhoto(idx, src, time, el) {
        this.state.currentKeyframeIdx = idx;
        const imgView = document.getElementById('main-img-view');
        const videoView = document.getElementById('main-video-view');
        const timeTag = document.getElementById('img-time-tag');

        if (imgView) imgView.src = src;
        if (timeTag) timeTag.innerText = time;

        if (videoView && time !== undefined) {
            videoView.currentTime = time;
        }

        if (el) {
            Array.from(el.parentElement.children).forEach(t => {
                t.classList.remove('border-blue-500', 'shadow-lg', 'shadow-blue-500/20');
                t.classList.add('border-gray-800');
            });
            el.classList.add('border-blue-500', 'shadow-lg', 'shadow-blue-500/20');
            el.classList.remove('border-gray-800');
        }

        const markers = document.querySelectorAll('.keyframe-marker');
        markers.forEach((m, mIdx) => {
            if (mIdx === idx) {
                m.classList.replace('bg-yellow-500', 'bg-blue-500');
                m.classList.replace('scale-100', 'scale-125');
                m.classList.add('z-20');
            } else {
                m.classList.replace('bg-blue-500', 'bg-yellow-500');
                m.classList.replace('scale-125', 'scale-100');
                m.classList.remove('z-20');
            }
        });
    },

    adjustKeyframeTime(offset) {
        const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);
        const video = document.getElementById('main-video-view');
        if (!currentCase || !video) return;

        const idx = this.state.currentKeyframeIdx;
        const currentImgTime = currentCase.images[idx].time;

        let newTime = currentImgTime + offset;
        newTime = Math.max(0, Math.min(newTime, video.duration || 0));
        newTime = parseFloat(newTime.toFixed(1));

        currentCase.images[idx].time = newTime;

        const timeTag = document.getElementById('img-time-tag');
        if (timeTag) timeTag.innerText = newTime;

        const thumbnails = document.querySelectorAll('.thumbnail-item');
        if (thumbnails[idx]) {
            const thumbTimeTag = thumbnails[idx].querySelector('div.absolute.bottom-1.right-1');
            if (thumbTimeTag) thumbTimeTag.innerText = newTime + 's';
        }

        const markers = document.querySelectorAll('.keyframe-marker');
        if (markers[idx] && video.duration) {
            const percent = (newTime / video.duration) * 100;
            markers[idx].style.left = `calc(${percent}% - 6px)`;
            markers[idx].title = `點擊跳至關鍵幀 ${idx + 1} (${newTime}s)`;
        }

        if (video._seekHandler) {
            video.removeEventListener('seeked', video._seekHandler);
        }

        video._seekHandler = () => {
            if (video.videoWidth && video.videoHeight) {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                const newDataUrl = canvas.toDataURL('image/jpeg', 0.8);

                currentCase.images[idx].src = newDataUrl;

                const mainImg = document.getElementById('main-img-view');
                if (mainImg) mainImg.src = newDataUrl;

                if (thumbnails[idx]) {
                    const thumbImg = thumbnails[idx].querySelector('img');
                    if (thumbImg) thumbImg.src = newDataUrl;
                }
            }
        };

        video.addEventListener('seeked', video._seekHandler, { once: true });
        video.currentTime = newTime;
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
        this.updateStatistics();

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

    clearDetail() {
        const headerArea = document.getElementById('detail-header');
        const evidenceBox = document.getElementById('evidence-grid');
        const analysisArea = document.getElementById('analysis-container');
        if (headerArea) headerArea.innerHTML = `<p class="text-gray-500">暫無待審核案件</p>`;
        if (evidenceBox) { evidenceBox.innerHTML = ''; evidenceBox.className = ''; }
        if (analysisArea) analysisArea.innerHTML = '';
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
        const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);
        this.closeTicket();
        if (currentCase) {
            currentCase.status = 'verified';
            alert(`案件 #${currentCase.id} 已成立。`);
            this.init();
        }
    },

    cancelCase: function() {
        const modal = document.getElementById('cancel-modal');
        if (modal) {
            modal.classList.remove('hidden');
            const radios = document.querySelectorAll('input[name="cancel-reason"]');
            radios.forEach(r => r.checked = false);
            document.getElementById('other-reason-input').value = '';
        }
    },

    closeCancelModal: function() {
        const modal = document.getElementById('cancel-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    },

    confirmCancelCase: function() {
        const selectedRadio = document.querySelector('input[name="cancel-reason"]:checked');

        if (!selectedRadio) {
            alert('請先選擇撤銷原因！');
            return;
        }

        let reason = selectedRadio.value;

        if (reason === 'other') {
            const otherInput = document.getElementById('other-reason-input').value.trim();
            if (!otherInput) {
                alert('請輸入具體的其他原因！');
                document.getElementById('other-reason-input').focus();
                return;
            }
            reason = otherInput;
        }

        const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);

        if (currentCase) {
            currentCase.status = 'canceled';
            currentCase.cancelReason = reason;

            this.state.pendingCases = this.state.allCases.filter(c => c.status === 'pending');
            this.updateStatistics();
            this.applyFilters();

            console.log(`[系統紀錄] 案件 #${currentCase.id} 已撤銷。原因：${reason}`);

            this.closeCancelModal();
            alert(`案件 #${currentCase.id} 已成功撤銷。\n紀錄原因：${reason}`);
        } else {
            this.closeCancelModal();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());