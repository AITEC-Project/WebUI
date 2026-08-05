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
        const d = new Date(c.timestamp);
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const day = d.getDate().toString().padStart(2, '0');
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        const seconds = d.getSeconds().toString().padStart(2, '0');

        const displayTime = `${month}/${day} ${hours}:${minutes}:${seconds}`;

        // 根據信心指數對應紅、黃、綠分類背景與邊框
        let confidenceClass = 'bg-red-50 border-red-100 text-red-600';
        if (c.confidence >= 90) {
            confidenceClass = 'bg-red-50 border-red-100';
        } else if (c.confidence >= 80) {
            confidenceClass = 'bg-yellow-50 border-yellow-100';
        } else {
            confidenceClass = 'bg-green-50 border-green-100';
        }

        return `
            <div id="case-card-${c.id}" class="case-card ${confidenceClass} py-3 px-4 border cursor-pointer transition-all duration-200 group" 
                 onclick="app.handleCaseClick('${c.id}')">
                <div class="flex justify-between items-center mb-1.5">
                    <span class="text-[9px] font-bold text-gray-400 tracking-wider case-card-id uppercase">CASE #${c.id}</span>
                    <span class="text-[10px] font-bold text-gray-500 case-card-time">${displayTime}</span>
                </div>
                <div class="text-xl font-extrabold text-gray-900 mb-1 tracking-widest case-card-plate">${c.plate}</div>
                <div class="text-[11px] font-medium text-gray-500 flex items-center case-card-loc">
                    <i class="fas fa-map-marker-alt mr-1.5 opacity-70"></i>${c.location || '未知地點'}
                </div>
            </div>
        `;
    },

    renderDetail(c) {
        if (!c) return;

        const headerArea = document.getElementById('detail-header');
        if (headerArea) {
            headerArea.innerHTML = '';
            headerArea.className = 'hidden';
        }

        const evidenceBox = document.getElementById('evidence-grid');
        if (evidenceBox) {
            evidenceBox.className = "space-y-4 w-full";
            evidenceBox.innerHTML = `
                <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 w-full items-start">
                    <!-- 左側影片區塊 -->
                    <div class="xl:col-span-7 flex flex-col gap-2 w-full">
                        <div class="relative overflow-hidden bg-black aspect-video shadow-lg w-full">
                            <video id="main-video-view" class="w-full h-full object-cover" controls autoplay muted loop>
                                <source src="${c.video}" type="video/mp4">
                            </video>
                        </div>
                        <div class="w-full px-1 mt-1">
                            <div class="relative w-full h-1.5 bg-gray-200 cursor-pointer hover:h-2 transition-all group" id="custom-progress-container">
                                <div id="custom-progress-bar" class="absolute top-0 left-0 h-full bg-blue-500 pointer-events-none transition-all duration-75 w-0"></div>
                                <div id="marker-container" class="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 右側照片與縮圖區塊 -->
                    <div class="xl:col-span-5 flex flex-col justify-between gap-3 w-full">
                        <div class="flex flex-col gap-3 w-full">
                            <div class="relative w-full aspect-video overflow-hidden bg-black cursor-pointer group shadow-lg" 
                                 onclick="app.openLightbox(document.getElementById('main-img-view').src)">
                                <img id="main-img-view" src="${c.images[0]?.src || ''}" alt="違規關鍵幀" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute top-3 left-3 bg-black/70 text-white text-[10px] px-2 py-1 backdrop-blur-sm flex items-center border border-gray-600">
                                    <i class="fas fa-camera mr-1.5 text-blue-400"></i>
                                    <span id="img-time-tag">${c.images[0]?.time || '0'}</span>s
                                </div>
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                    <i class="fas fa-search-plus text-white text-3xl drop-shadow-lg"></i>
                                </div>
                            </div>

                            <div class="grid grid-cols-3 gap-2 w-full">
                                ${c.images.slice(0, 3).map((img, idx) => `
                                    <div class="thumbnail-item relative aspect-video overflow-hidden border-2 ${idx === 0 ? 'border-blue-500 shadow-md' : 'border-transparent opacity-70'} cursor-pointer transition-all hover:opacity-100 bg-black" 
                                         onclick="app.switchPhoto(${idx}, '${img.src}', ${img.time}, this)">
                                        <img src="${img.src}" class="w-full h-full object-cover transition">
                                        <span class="absolute top-1 left-1 bg-blue-600 text-white text-[9px] px-1.5 py-0.5 shadow font-bold">${idx + 1}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="mt-1 text-[10px] px-1 flex items-center gap-1.5 text-gray-500 font-medium">
                            <span class="flex items-center gap-1.5 text-gray-400">
                                <i class="fas fa-sliders-h text-blue-400"></i>關鍵幀微調
                            </span>
                            <span class="font-mono">
                                ：<span class="bg-gray-100 text-gray-500 px-1 py-0.5 border border-gray-200">←</span> 
                                <span class="bg-gray-100 text-gray-500 px-1 py-0.5 border border-gray-200">→</span> 鍵 (±0.1s)
                            </span>
                        </div>
                    </div>
                </div>
            `;
        }

        const analysisArea = document.getElementById('analysis-container');
        if (analysisArea) {
            const description = c.description || '受處分人駕駛該車輛，違規事實明確。';

            let badgeClass = '';
            let badgeText = '';
            if (c.confidence >= 90) {
                badgeClass = 'bg-red-50 text-red-600 border-red-200';
                badgeText = '確信違規';
            } else if (c.confidence >= 80) {
                badgeClass = 'bg-yellow-50 text-yellow-600 border-yellow-200';
                badgeText = '疑似違規';
            } else {
                badgeClass = 'bg-green-50 text-green-600 border-green-200';
                badgeText = '邊界案例';
            }

            analysisArea.innerHTML = `
                <div class="mt-4 bg-white p-5 border border-gray-100 shadow-sm w-full relative">
                    
                    <div class="absolute top-5 right-5 border px-2.5 py-1 text-base font-extrabold tracking-widest ${badgeClass}">
                        ${badgeText}
                    </div>

                    <!-- 使用 divide-y divide-gray-200 來自動生成均勻的灰色分隔線 -->
                    <div class="flex flex-col divide-y divide-gray-200">
                        <div class="flex flex-col pb-4 gap-1.5 pr-28">
                            <span class="text-sm text-[#54595D] font-bold tracking-wider">違規樣態</span>
                            <span class="text-lg text-gray-900 font-extrabold font-mono text-left">${c.type}</span>
                        </div>
                        
                        <div class="flex flex-col py-4 gap-1.5">
                            <span class="text-sm text-[#54595D] font-bold tracking-wider">違規法條</span>
                            <span class="text-base text-blue-600 font-bold tracking-wide text-left">${c.legalBasis}</span>
                        </div>
                        
                        <div class="flex flex-col pt-4 gap-1.5">
                            <span class="text-sm text-[#54595D] font-bold tracking-wider whitespace-nowrap">情境描述</span>
                            <span class="text-base text-gray-900 font-extrabold font-mono leading-relaxed text-left">${description}</span>
                        </div>
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
        currentLevel: 'high',
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

        const certainBtn = document.querySelector('.filter-btn');
        if(certainBtn) this.filterCases('high', certainBtn);

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
                    if (video) { video.paused ? video.play() : video.pause(); }
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
                    if (!modal || modal.classList.contains('hidden')) { this.cancelCase(); }
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (this.state.selectedCaseId && modal && modal.classList.contains('hidden')) { this.openTicket(); }
                    break;
            }
        });
    },

    toggleSidebar() {
        this.state.isSidebarCollapsed = !this.state.isSidebarCollapsed;

        const sidebar = document.getElementById('sidebar-panel');
        const toggleIcon = document.getElementById('toggle-icon');
        const userInfo = document.getElementById('sidebar-user-info');
        const texts = document.querySelectorAll('.sidebar-text');
        const navItems = document.querySelectorAll('nav > a');

        if (this.state.isSidebarCollapsed) {
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

            texts.forEach(el => el.classList.remove('hidden'));

            navItems.forEach(item => {
                item.classList.remove('justify-center');
                item.querySelector('i')?.classList.add('mr-3');
            });

            if (toggleIcon) {
                toggleIcon.classList.remove('fa-angle-right');
                toggleIcon.classList.add('fa-angle-left');
            }
        }
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
            detailSection.className = "flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10 bg-gray-50/50 w-full transition-colors duration-300";
        }

        document.querySelectorAll('.case-card').forEach(item => {
            const cardId = item.id.replace('case-card-', '');
            const cardData = this.state.allCases.find(c => c.id === cardId);
            const isTarget = cardId === id;

            item.className = item.className.replace(/bg-\w+-\d+/g, '').replace(/border-\w+-\d+/g, '').replace(/text-\w+-\d+/g, '').replace(/shadow-\w+/g, '').replace(/scale-\[\d+\.\d+\]/g, '');

            if (isTarget) {
                item.className += " bg-blue-600 text-white shadow-md scale-[1.02] border border-blue-700 py-3 px-4 cursor-pointer transition-all duration-200 group";
                item.querySelector('.case-card-id').className = "text-[9px] font-bold text-blue-200 tracking-wider case-card-id uppercase";
                item.querySelector('.case-card-time').className = "text-[10px] font-bold text-blue-100 case-card-time";
                item.querySelector('.case-card-plate').className = "text-xl font-extrabold text-white mb-1 tracking-widest case-card-plate";
                item.querySelector('.case-card-loc').className = "text-[11px] font-medium text-blue-100 flex items-center case-card-loc";
            } else {
                let defaultBg = 'bg-red-50 border-red-100';
                if (cardData.confidence >= 90) defaultBg = 'bg-red-50 border-red-100';
                else if (cardData.confidence >= 80) defaultBg = 'bg-yellow-50 border-yellow-100';
                else defaultBg = 'bg-green-50 border-green-100';

                item.className += ` ${defaultBg} text-gray-900 py-3 px-4 border cursor-pointer transition-all duration-200 group`;
                item.querySelector('.case-card-id').className = "text-[9px] font-bold text-gray-400 tracking-wider case-card-id uppercase";
                item.querySelector('.case-card-time').className = "text-[10px] font-bold text-gray-500 case-card-time";
                item.querySelector('.case-card-plate').className = "text-xl font-extrabold text-gray-900 mb-1 tracking-widest case-card-plate";
                item.querySelector('.case-card-loc').className = "text-[11px] font-medium text-gray-500 flex items-center case-card-loc";
            }
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
                marker.className = `keyframe-marker absolute top-1/2 -translate-y-1/2 w-3 h-3 border-2 border-white shadow cursor-pointer transition-all hover:scale-150 pointer-events-auto ${isActive ? 'bg-blue-500 scale-125 z-20' : 'bg-gray-400 scale-100 z-10'}`;
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
                t.classList.remove('border-blue-500', 'shadow-md', 'opacity-100');
                t.classList.add('border-transparent', 'opacity-70');
            });
            el.classList.add('border-blue-500', 'shadow-md', 'opacity-100');
            el.classList.remove('border-transparent', 'opacity-70');
        }

        const markers = document.querySelectorAll('.keyframe-marker');
        markers.forEach((m, mIdx) => {
            if (mIdx === idx) {
                m.classList.replace('bg-gray-400', 'bg-blue-500');
                m.classList.replace('scale-100', 'scale-125');
                m.classList.add('z-20');
            } else {
                m.classList.replace('bg-blue-500', 'bg-gray-400');
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

        const markers = document.querySelectorAll('.keyframe-marker');
        if (markers[idx] && video.duration) {
            const percent = (newTime / video.duration) * 100;
            markers[idx].style.left = `calc(${percent}% - 6px)`;
            markers[idx].title = `點擊跳至關鍵幀 ${idx + 1} (${newTime}s)`;
        }

        if (video._seekHandler) video.removeEventListener('seeked', video._seekHandler);

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

                const thumbnails = document.querySelectorAll('.thumbnail-item');
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

        this.state.filteredCases = this.state.pendingCases.filter(c => {
            let matchLevel = true;
            if (this.state.currentLevel === 'high') matchLevel = c.confidence >= 90;
            if (this.state.currentLevel === 'mid') matchLevel = c.confidence >= 80 && c.confidence < 90;
            if (this.state.currentLevel === 'low') matchLevel = c.confidence < 80;

            const matchKeyword = c.id.toLowerCase().includes(keyword) ||
                c.plate.toLowerCase().includes(keyword) ||
                c.location.toLowerCase().includes(keyword);

            return matchLevel && matchKeyword;
        });

        this.renderCaseList();
        this.updateStatistics();

        if (this.state.filteredCases.length > 0) {
            this.handleCaseClick(this.state.filteredCases[0].id);
        } else {
            this.clearDetail();
        }
    },

    filterCases(level, el) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove(
                'shadow-sm',
                'text-green-600', 'bg-green-50', 'border-green-100',
                'text-yellow-600', 'bg-yellow-50', 'border-yellow-100',
                'text-red-600', 'bg-red-50', 'border-red-100',
                'border'
            );
            btn.classList.add('text-gray-400', 'border-transparent');
        });

        if (el) {
            el.classList.remove('text-gray-400', 'border-transparent');
            el.classList.add('shadow-sm', 'border');

            if (level === 'high') {
                el.classList.add('text-red-600', 'bg-red-50', 'border-red-100');
            } else if (level === 'mid') {
                el.classList.add('text-yellow-600', 'bg-yellow-50', 'border-yellow-100');
            } else if (level === 'low') {
                el.classList.add('text-green-600', 'bg-green-50', 'border-green-100');
            }
        }

        this.state.currentLevel = level;
        this.applyFilters();
    },

    updateStatistics() {
        const stats = { high: 0, mid: 0, low: 0 };
        this.state.pendingCases.forEach(c => {
            if (c.confidence >= 90) stats.high++;
            else if (c.confidence >= 80) stats.mid++;
            else stats.low++;
        });

        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.innerText = val;
        };
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
        if (typeof TicketModal !== 'undefined') TicketModal.close();
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
        if (modal) modal.classList.add('hidden');
    },

    confirmCancelCase: function() {
        const selectedRadio = document.querySelector('input[name="cancel-reason"]:checked');
        if (!selectedRadio) { alert('請先選擇撤銷原因！'); return; }

        let reason = selectedRadio.value;
        if (reason === 'other') {
            const otherInput = document.getElementById('other-reason-input').value.trim();
            if (!otherInput) { alert('請輸入具體的其他原因！'); document.getElementById('other-reason-input').focus(); return; }
            reason = otherInput;
        }

        const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);
        if (currentCase) {
            currentCase.status = 'canceled';
            currentCase.cancelReason = reason;

            this.state.pendingCases = this.state.allCases.filter(c => c.status === 'pending');
            this.updateStatistics();
            this.applyFilters();

            this.closeCancelModal();
            alert(`案件 #${currentCase.id} 已成功撤銷。\n紀錄原因：${reason}`);
        } else {
            this.closeCancelModal();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());