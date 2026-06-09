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

        // 1. 清空或隱藏原本最上方的標頭區域（編號、車牌、路段、待審核）
        const headerArea = document.getElementById('detail-header');
        if (headerArea) {
            headerArea.innerHTML = ''; // 直接清空，移除了編號、車牌、路段與待審核標籤
            headerArea.className = 'hidden'; // 將容器隱藏，避免留白影響排版
        }

        // 在 UIRenderer.renderDetail 中替換原有的 video 區塊：
        const evidenceBox = document.getElementById('evidence-grid');
        if (evidenceBox) {
            evidenceBox.className = "card-bg p-4 rounded-2xl border border-gray-800 shadow-xl space-y-3";
            evidenceBox.innerHTML = `
                <div class="flex flex-col md:flex-row gap-4 h-auto">
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
                                <span>Video Timeline</span>
                                <span>Keyframes</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-full md:w-[40%] flex flex-col gap-2">
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

                        <div class="grid grid-cols-3 gap-2 mt-auto">
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
                // 檢查是否正在「其他原因」輸入框打字
                const isTyping = document.activeElement.tagName === 'INPUT' && document.activeElement.type === 'text';

                if (isTyping) {
                    // 如果正在打字，只允許 Enter(確認) 跟 Escape(取消)
                    if (e.key === 'Enter') { e.preventDefault(); this.confirmCancelCase(); }
                    if (e.key === 'Escape') { e.preventDefault(); this.closeCancelModal(); }
                    return; // 結束執行，避免輸入文字時觸發下方邏輯
                }

                // 處理彈窗內的 1234 與 Enter/Esc
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
                // ★ 核心機制：只要彈窗開著，按鍵處理到這裡就強制 return，絕不干擾下方原本的邏輯！
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

        // 條件：必須是側邊欄收起，且當前不是 'all' 狀態
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

            // 渲染精緻的橫條標籤，並帶有閃爍動態與分類文字
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
            // 展開狀態或 'all' 狀態時，優雅地收起並隱藏
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

        // 取得導覽列中所有的超連結項目（包含首頁、數據儀表板、歷史案件等）
        const navItems = document.querySelectorAll('nav > a');

        if (this.state.isSidebarCollapsed) {
            // === 執行「收納」 ===
            sidebar.classList.remove('w-64', 'p-4');
            sidebar.classList.add('w-20', 'p-2');

            // 使用者資訊區塊置中
            if (userInfo) {
                userInfo.classList.add('justify-center');
                // 隱藏頭像右側的外距，確保單獨頭像完美置中
                userInfo.querySelector('.flex-shrink-0')?.classList.remove('mr-3');
            }

            // 隱藏子選單
            if (subMenu) subMenu.classList.add('hidden');

            // 隱藏所有純文字與數量標籤
            texts.forEach(el => el.classList.add('hidden'));

            // 【核心修改】將所有導覽按鈕改為水平置中
            navItems.forEach(item => {
                item.classList.remove('justify-between');
                item.classList.add('justify-center');
                // 移除 Icon 右側原本的 mr-3 外距，避免置中時產生微幅右偏
                item.querySelector('i')?.classList.remove('mr-3');
            });

            // 改變收折箭頭方向
            if (toggleIcon) {
                toggleIcon.classList.remove('fa-angle-left');
                toggleIcon.classList.add('fa-angle-right');
            }
        } else {
            // === 執行「展開」 ===
            sidebar.classList.remove('w-20', 'p-2');
            sidebar.classList.add('w-64', 'p-4');

            if (userInfo) {
                userInfo.classList.remove('justify-center');
                userInfo.querySelector('.flex-shrink-0')?.classList.add('mr-3');
            }

            if (subMenu) subMenu.classList.remove('hidden');
            texts.forEach(el => el.classList.remove('hidden'));

            // 恢復原本的靠左與分散對齊樣式，並補回 Icon 右側外距
            navItems.forEach(item => {
                item.classList.remove('justify-center');
                // 只有第一個首頁按鈕原本是 justify-between（因為有數量標籤）
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

        // 確保收合側邊欄時，註記條能即時顯示或消失
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

    // 將此方法加在 app 物件內 (例如放在 handleCaseClick 下方)
    setupVideoMarkers(caseData) {
        const video = document.getElementById('main-video-view');
        const markerContainer = document.getElementById('marker-container');
        const customProgress = document.getElementById('custom-progress-bar');
        const customProgressContainer = document.getElementById('custom-progress-container');

        if (!video || !markerContainer) return;

        // 當影片載入詮釋資料後，計算總長度並標記
        video.addEventListener('loadedmetadata', () => {
            const duration = video.duration || 10;
            markerContainer.innerHTML = ''; // 清空舊標記

            caseData.images.slice(0, 3).forEach((img, idx) => {
                const percent = (img.time / duration) * 100;
                const marker = document.createElement('div');

                const isActive = idx === (app.state.currentKeyframeIdx || 0);
                marker.className = `keyframe-marker absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#0d1117] shadow cursor-pointer transition-all hover:scale-150 pointer-events-auto ${isActive ? 'bg-blue-500 scale-125 z-20' : 'bg-yellow-500 scale-100 z-10'}`;
                marker.style.left = `calc(${percent}% - 6px)`;
                marker.title = `點擊跳至關鍵幀 ${idx + 1} (${img.time}s)`;

                // 點擊標記：跳轉影片並連動右側照片
                marker.onclick = (e) => {
                    e.stopPropagation(); // 避免觸發底層進度條點擊
                    const thumbnails = document.querySelectorAll('.thumbnail-item');
                    app.switchPhoto(idx, img.src, img.time, thumbnails[idx]);
                };

                markerContainer.appendChild(marker);
            });
        });

        // 連動自訂進度條長度
        video.addEventListener('timeupdate', () => {
            if (video.duration) {
                const percent = (video.currentTime / video.duration) * 100;
                customProgress.style.width = `${percent}%`;
            }
        });

        // 點擊自訂進度條：讓影片跳轉到該時間
        customProgressContainer.addEventListener('click', (e) => {
            const rect = customProgressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            video.currentTime = pos * video.duration;
        });
    },

    // 專注於右側照片切換，同時連動影片時間點
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

        // 1. 計算新時間，確保不超出影片範圍，並取至小數第一位
        let newTime = currentImgTime + offset;
        newTime = Math.max(0, Math.min(newTime, video.duration || 0));
        newTime = parseFloat(newTime.toFixed(1));

        // 2. 更新當前案件資料層的關鍵幀時間
        currentCase.images[idx].time = newTime;

        // 3. 更新 UI: 文字標籤與時間軸標記
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

        // ★ 4. 核心新增：影片跳轉與動態截圖邏輯

        // 為了避免使用者連續狂按左右鍵導致截圖事件卡頓，先清除前一次未執行的監聽器
        if (video._seekHandler) {
            video.removeEventListener('seeked', video._seekHandler);
        }

        // 定義當影片成功跳轉到指定時間後，要執行的截圖動作
        video._seekHandler = () => {
            if (video.videoWidth && video.videoHeight) {
                // 建立一個隱藏的畫布來繪製影片當下幀
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // 將畫布轉為 Base64 圖片 (使用 0.8 壓縮比維持效能)
                const newDataUrl = canvas.toDataURL('image/jpeg', 0.8);

                // 同步更新資料層的圖片網址
                currentCase.images[idx].src = newDataUrl;

                // 更新右側大圖
                const mainImg = document.getElementById('main-img-view');
                if (mainImg) mainImg.src = newDataUrl;

                // 更新右側下方對應的小縮圖
                if (thumbnails[idx]) {
                    const thumbImg = thumbnails[idx].querySelector('img');
                    if (thumbImg) thumbImg.src = newDataUrl;
                }
            }
        };

        // 綁定一次性的 seeked (跳轉完成) 事件
        video.addEventListener('seeked', video._seekHandler, { once: true });

        // 觸發影片跳轉，跳轉完成後會自動觸發上方的 _seekHandler 進行截圖
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

        this.updateCategoryNotch();

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
            // 顯示彈窗
            modal.classList.remove('hidden');

            // 重置先前的選擇狀態
            const radios = document.querySelectorAll('input[name="cancel-reason"]');
            radios.forEach(r => r.checked = false);
            document.getElementById('other-reason-input').value = '';
        }
    },

    // 2. 關閉彈窗
    closeCancelModal: function() {
        const modal = document.getElementById('cancel-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    },

    // 3. 確認送出撤銷原因
    confirmCancelCase: function() {
        // 1. 尋找被選中的選項
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

        // 2. 找到當前正在審核的案件
        const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);

        if (currentCase) {
            // 更新狀態與附加撤銷原因 (這樣資料庫或後端就能收到這筆紀錄)
            currentCase.status = 'canceled';
            currentCase.cancelReason = reason;

            // 重新過濾出剩餘的待審核案件
            this.state.pendingCases = this.state.allCases.filter(c => c.status === 'pending');

            // 重新計算側邊欄的數字統計
            this.updateStatistics();

            // 重新套用篩選與渲染清單
            // (這會自動更新左側列表，並自動選取下一個案件，或清空右側畫面)
            this.applyFilters();

            console.log(`[系統紀錄] 案件 #${currentCase.id} 已撤銷。原因：${reason}`);

            // 關閉彈窗並給予提示
            this.closeCancelModal();
            alert(`案件 #${currentCase.id} 已成功撤銷。\n紀錄原因：${reason}`);
        } else {
            // 系統防呆
            this.closeCancelModal();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());