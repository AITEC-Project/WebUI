// 在最上方引入您的 Firebase 設定與 Firestore 方法
import { db, collection, getDocs, doc, updateDoc, deleteDoc, auth, onAuthStateChanged } from "./firebase-config.js";

const ApiService = {
    async fetchCases() {
        try {
            // 1. 取得 YOLO 集合的資料
            const querySnapshot = await getDocs(collection(db, "stage2_qwen_vlm"));
            const cases = [];

            // 🌟 在迴圈開始前，先取得當前使用者的真實 JWT Token
            let realToken = "";
            const currentUser = auth.currentUser;
            if (currentUser) {
                realToken = await currentUser.getIdToken();
            }

            querySnapshot.forEach((docSnap) => {
                const data = docSnap.data();
                const caseId = data.case_id || docSnap.id;

                let images = [];
                let videoUrl = "";

                // 🌟 針對特定案件使用本地端檔案
                if (caseId === "20260808_181318_010") {
                    videoUrl = `./video/${caseId}_video.mp4`;
                    images = [
                        { src: `./video/${caseId}_1.jpg`, originalSrc: `./video/${caseId}_1.jpg`, time: 0 },
                        { src: `./video/${caseId}_2.jpg`, originalSrc: `./video/${caseId}_2.jpg`, time: 0 },
                        { src: `./video/${caseId}_3.jpg`, originalSrc: `./video/${caseId}_3.jpg`, time: 0 }
                    ];
                } else {
                    // ☁️ 其他案件走 FastAPI 代理或雲端直連
                    if (data.evidence_image_urls && Array.isArray(data.evidence_image_urls)) {
                        images = data.evidence_image_urls.map((img, index) => {
                            let proxyImgUrl = "";
                            if (realToken) {
                                proxyImgUrl = `http://127.0.0.1:8000/api/image/${caseId}/${index}?token=${realToken}`;
                            }
                            const finalSrc = proxyImgUrl || img.url;
                            return {
                                src: finalSrc,
                                originalSrc: finalSrc,
                                time: img.video_time_sec
                            };
                        });
                    }

                    if (data.evidence_video) {
                        if (realToken) {
                            videoUrl = `http://127.0.0.1:8000/api/video/${caseId}?token=${realToken}`;
                        }
                    }
                }

                // 4. 處理 VLM 與 RAG 的分析描述
                const description = data.VLM_analysis?.總體說明 || data.VLM_analysis?.主角狀況描述 || "無詳細情境描述";
                const legalBasis = data.RAG_analysis?.判斷法規 || "相關法規研判中";

                // 🌟 解析 Firebase 中的文字分級
                let rawLevel = data["分級"] !== undefined ? data["分級"] : (data.confidence !== undefined ? data.confidence : null);
                let caseLevel = "none";
                let parsedConfidence = null;

                if (typeof rawLevel === 'string') {
                    if (rawLevel.includes("確信")) { caseLevel = "high"; parsedConfidence = 90; }
                    else if (rawLevel.includes("疑似")) { caseLevel = "mid"; parsedConfidence = 80; }
                    else if (rawLevel.includes("邊界")) { caseLevel = "low"; parsedConfidence = 70; }
                } else if (typeof rawLevel === 'number') {
                    parsedConfidence = rawLevel;
                    if (rawLevel >= 90) caseLevel = "high";
                    else if (rawLevel >= 80) caseLevel = "mid";
                    else caseLevel = "low";
                }

                // 🌟 寬容物件的英翻中對應邏輯
                let rawTolerance = data.y_tolerance_class || "";
                let displayTolerance = rawTolerance;
                if (rawTolerance.toLowerCase() === "emergency") {
                    displayTolerance = "救護車";
                } else if (rawTolerance.toLowerCase() === "construction") {
                    displayTolerance = "施工";
                } else if (!rawTolerance) {
                    displayTolerance = "未知寬容物件";
                }

                // 5. 轉換為前端系統支援的格式
                cases.push({
                    id: caseId,
                    status: "pending",
                    type: data.type || "未分類",
                    plate: data.track_id ? `T-${data.track_id}` : "未知車牌",
                    location: data.intersection_name || "未知路口",
                    level: caseLevel,
                    confidence: parsedConfidence,
                    toleranceAppear: data.y_tolerance_appear === true || String(data.y_tolerance_appear).toLowerCase() === 'true',
                    toleranceClass: displayTolerance,
                    timestamp: data.timestamp ? data.timestamp.replace(' ', 'T') : new Date().toISOString(),
                    images: images,
                    video: videoUrl,
                    originalVideoUrl: videoUrl,
                    legalBasis: legalBasis,
                    description: description,
                    auditor: data.auditor || null
                });
            });

            return cases.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        } catch (error) {
            console.error("Firebase 讀取失敗:", error);
            return typeof mockCases !== 'undefined' ? mockCases : [];
        }
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

        let confidenceClass = 'bg-gray-100 border-gray-200 text-gray-700';
        if (c.level === 'high') {
            confidenceClass = 'bg-red-50 border-red-100 text-red-600';
        } else if (c.level === 'mid') {
            confidenceClass = 'bg-yellow-50 border-yellow-100 text-yellow-600';
        } else if (c.level === 'low') {
            confidenceClass = 'bg-green-50 border-green-100 text-green-600';
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

    createFolderHTML(date, loc, tolClass, folderId, cases, isExpanded) {
        const casesHTML = cases.map(c => this.createCaseItemHTML(c)).join('');

        const reasonName = tolClass === '施工' ? '施工繞道' : (tolClass === '救護車' ? '避讓救護車' : tolClass);

        return `
            <div class="mb-4">
                <div class="bg-gray-200/80 border border-gray-300 p-3 flex flex-col gap-2.5 cursor-pointer hover:bg-gray-200 transition-colors shadow-sm" onclick="app.toggleFolder('${folderId}')">
                    <div class="flex items-start w-full">
                        <i class="fas ${isExpanded ? 'fa-folder-open' : 'fa-folder'} text-gray-500 mr-2.5 text-sm mt-[2px] flex-shrink-0"></i>
                        <span class="font-bold text-[11px] text-gray-700 tracking-wide leading-relaxed break-words flex-1">
                            ${date} / ${loc}<br>
                            <span class="text-blue-600">${reasonName}</span>
                        </span>
                    </div>
                    <div class="flex justify-between items-center w-full pl-6">
                        <span class="bg-white text-gray-500 text-[10px] px-2 py-0.5 font-bold shadow-sm border border-gray-200 flex-shrink-0">${cases.length} 件</span>
                        <div class="flex items-center space-x-2">
                            <button onclick="app.batchCancelGroup('${date}', '${loc}', '${tolClass}', '${reasonName}', event)" class="text-[10px] font-bold bg-white text-gray-600 border border-gray-300 px-2.5 py-1 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors shadow-sm" title="一鍵撤銷此資料夾內所有案件">
                                一鍵撤銷
                            </button>
                            <i class="fas ${isExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-gray-400 text-xs w-4 text-center"></i>
                        </div>
                    </div>
                </div>
                <div class="${isExpanded ? 'block' : 'hidden'} border-l-2 border-gray-200 ml-2.5 pl-3 mt-3 space-y-3">
                    ${casesHTML}
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
        const existingVideo = document.getElementById('main-video-view');
        const isSameCase = evidenceBox && evidenceBox.getAttribute('data-case-id') === c.id;

        const description = c.description || '受處分人駕駛該車輛，違規事實明確。';

        if (evidenceBox && (!existingVideo || !isSameCase)) {
            evidenceBox.setAttribute('data-case-id', c.id);

            if (!existingVideo) {
                evidenceBox.className = "space-y-4 w-full";
                evidenceBox.innerHTML = `
                    <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 w-full items-start">
                        <div class="xl:col-span-7 flex flex-col gap-2 w-full">
                            <div class="relative overflow-hidden bg-black aspect-video shadow-lg w-full">
                                <video id="main-video-view" class="w-full h-full object-cover" src="${c.video}" controls autoplay muted loop></video>
                            </div>
                            <div class="w-full px-1 mt-1">
                                <div class="relative w-full h-1.5 bg-gray-200 cursor-pointer hover:h-2 transition-all group" id="custom-progress-container">
                                    <div id="custom-progress-bar" class="absolute top-0 left-0 h-full bg-blue-500 pointer-events-none transition-all duration-75 w-0"></div>
                                    <div id="marker-container" class="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                        
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

                                <div class="grid grid-cols-3 gap-2 w-full" id="thumbnails-container">
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
                    
                    <div class="bg-white p-5 border border-gray-100 shadow-sm w-full">
                        <p id="video-description-text" class="text-base text-blue-600 font-extrabold font-mono leading-relaxed text-left">${description}</p>
                    </div>
                `;
            } else {
                if (existingVideo.getAttribute('src') !== c.video) {
                    existingVideo.src = c.video;
                    existingVideo.play().catch(e => console.log(e));
                }

                const mainImg = document.getElementById('main-img-view');
                if (mainImg && mainImg.getAttribute('src') !== (c.images[0]?.src || '')) {
                    mainImg.src = c.images[0]?.src || '';
                }

                const timeTag = document.getElementById('img-time-tag');
                if (timeTag) timeTag.innerText = c.images[0]?.time || '0';

                const thumbsContainer = document.getElementById('thumbnails-container');
                if (thumbsContainer) {
                    thumbsContainer.innerHTML = c.images.slice(0, 3).map((img, idx) => `
                        <div class="thumbnail-item relative aspect-video overflow-hidden border-2 ${idx === 0 ? 'border-blue-500 shadow-md' : 'border-transparent opacity-70'} cursor-pointer transition-all hover:opacity-100 bg-black" 
                             onclick="app.switchPhoto(${idx}, '${img.src}', ${img.time}, this)">
                            <img src="${img.src}" class="w-full h-full object-cover transition">
                            <span class="absolute top-1 left-1 bg-blue-600 text-white text-[9px] px-1.5 py-0.5 shadow font-bold">${idx + 1}</span>
                        </div>
                    `).join('');
                }

                const descEl = document.getElementById('video-description-text');
                if (descEl) descEl.innerText = description;
            }
        }

        const analysisArea = document.getElementById('analysis-container');
        if (analysisArea) {
            let badgeHTML = '';
            if (c.toleranceAppear) {
                badgeHTML = `
                    <div class="absolute top-5 right-5 border px-2.5 py-1 text-base font-extrabold tracking-widest bg-purple-50 text-purple-600 border-purple-200 shadow-sm">
                        ${c.toleranceClass}
                    </div>
                `;
            }

            // 🌟 這裡修改了違規法條的 UI：加入 contenteditable 讓文字可以點擊編輯
            analysisArea.innerHTML = `
                <div class="mt-4 bg-white p-5 border border-gray-100 shadow-sm w-full relative">
                    
                    ${badgeHTML}

                    <div class="flex flex-col divide-y divide-gray-200">
                        <div class="flex flex-col pb-4 gap-1.5 pr-28">
                            <span class="text-sm text-[#54595D] font-bold tracking-wider">違規樣態</span>
                            <span class="text-lg text-gray-900 font-extrabold font-mono text-left">${c.type}</span>
                        </div>
                        
                        <div class="flex flex-col pt-4 gap-1.5 group/legal">
                            <span class="text-sm text-[#54595D] font-bold tracking-wider flex items-center">
                                違規法條
                                <i class="fas fa-pencil-alt text-[10px] text-gray-400 ml-2 opacity-0 group-hover/legal:opacity-100 transition-opacity"></i>
                            </span>
                            <span class="text-base text-gray-900 font-bold tracking-wide text-left cursor-text border border-transparent hover:bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded px-1 -ml-1 py-0.5 outline-none transition-all"
                                  contenteditable="true"
                                  title="點擊修改法條"
                                  onblur="app.updateLegalBasis('${c.id}', this.innerText)"
                                  onkeydown="if(event.key === 'Enter') { event.preventDefault(); this.blur(); }"
                            >${c.legalBasis}</span>
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
        currentLevel: 'none',
        hotkeysInitialized: false,
        isSidebarCollapsed: false,
        currentKeyframeIdx: 0,

        expandedFolders: {},
        preloadTaskCount: 0,
        preloadedCaseIds: new Set()
    },

    async init() {
        if (!document.getElementById('ticket-modal')) {
            await this.loadComponent('ticketModel.html');
        }

        const rawData = await ApiService.fetchCases();
        this.state.allCases = rawData;
        this.state.pendingCases = rawData.filter(c => !c.auditor);

        this.applyFilters();
        this.updateStatistics();

        const filterBtns = document.querySelectorAll('.filter-btn');
        if (filterBtns.length > 0) {
            this.filterCases('high', filterBtns[0]);
        }

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

            // 🌟 確保：如果在編輯「違規法條 (contenteditable)」或其他輸入框，不會觸發快捷鍵
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

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
                case 'z':
                case 'Z':
                    e.preventDefault();
                    this.updateCaseLevel('high');
                    break;
                case 'x':
                case 'X':
                    e.preventDefault();
                    this.updateCaseLevel('mid');
                    break;
                case 'c':
                case 'C':
                    e.preventDefault();
                    this.updateCaseLevel('low');
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
            detailSection.className = "flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10 bg-white w-full transition-colors duration-300";
        }

        document.querySelectorAll('.case-card').forEach(item => {
            const cardId = item.id.replace('case-card-', '');
            const cardData = this.state.allCases.find(c => c.id === cardId);
            const isTarget = cardId === id;

            item.className = item.className.replace(/bg-\w+-\d+/g, '').replace(/border-\w+-\d+/g, '').replace(/text-\w+-\d+/g, '').replace(/shadow-\w+/g, '').replace(/scale-\[\d+\.\d+\]/g, '');

            if (isTarget) {
                item.className += " bg-blue-600 text-white shadow-md scale-[1.02] border border-blue-700 py-3 px-4 cursor-pointer transition-all duration-200 group relative";
                item.querySelector('.case-card-id').className = "text-[9px] font-bold text-blue-200 tracking-wider case-card-id uppercase block mb-0.5";
                item.querySelector('.case-card-time').className = "text-[10px] font-bold text-blue-100 case-card-time";
                item.querySelector('.case-card-plate').className = "text-xl font-extrabold text-white mb-1 tracking-widest case-card-plate";
                item.querySelector('.case-card-loc').className = "text-[11px] font-medium text-blue-100 flex items-center case-card-loc";
            } else {
                let defaultBg = 'bg-gray-100 border-gray-200';
                if (cardData.level === 'none') defaultBg = 'bg-gray-100 border-gray-200';
                else if (cardData.level === 'high') defaultBg = 'bg-red-50 border-red-100';
                else if (cardData.level === 'mid') defaultBg = 'bg-yellow-50 border-yellow-100';
                else if (cardData.level === 'low') defaultBg = 'bg-green-50 border-green-100';

                item.className += ` ${defaultBg} text-gray-900 py-3 px-4 border cursor-pointer transition-all duration-200 group relative`;
                item.querySelector('.case-card-id').className = "text-[9px] font-bold text-gray-400 tracking-wider case-card-id uppercase block mb-0.5";
                item.querySelector('.case-card-time').className = "text-[10px] font-bold text-gray-500 case-card-time";
                item.querySelector('.case-card-plate').className = "text-xl font-extrabold text-gray-900 mb-1 tracking-widest case-card-plate";
                item.querySelector('.case-card-loc').className = "text-[11px] font-medium text-gray-500 flex items-center case-card-loc";
            }
        });

        this.preloadNextCases();
    },

    toggleFolder(folderId) {
        if (this.state.expandedFolders[folderId] === undefined) {
            this.state.expandedFolders[folderId] = false;
        } else {
            this.state.expandedFolders[folderId] = !this.state.expandedFolders[folderId];
        }
        this.renderCaseList();
    },

    async batchCancelGroup(date, location, tolClass, reasonName, e) {
        e.stopPropagation();

        const groupCases = this.state.filteredCases.filter(c =>
            c.timestamp.split('T')[0] === date &&
            (c.location || "未知路口") === location &&
            c.toleranceClass === tolClass
        );
        if (groupCases.length === 0) return;

        const isConfirmed = window.confirm(`確認要一鍵撤銷【${date} / ${location}】的 ${groupCases.length} 個案件嗎？\n(撤銷原因將統一標註為「${reasonName}」)`);
        if (!isConfirmed) return;

        const canceledIds = new Set();
        for (const c of groupCases) {
            c.status = 'canceled';
            c.cancelReason = reasonName;
            c.auditor = "林警員(批量撤銷)";
            canceledIds.add(c.id);

            try {
                const caseRef = doc(db, "stage2_qwen_vlm", c.id);
                await updateDoc(caseRef, {
                    '狀態': 'canceled',
                    '撤銷原因': reasonName,
                    'auditor': "林警員(批量撤銷)"
                });
            } catch (err) {
                console.error(`批量撤銷案件 #${c.id} 失敗:`, err);
            }
        }

        this.state.pendingCases = this.state.pendingCases.filter(c => !canceledIds.has(c.id));

        if (canceledIds.has(this.state.selectedCaseId)) {
            this.state.selectedCaseId = null;
        }

        this.updateStatistics();
        this.applyFilters();
        alert(`已成功批量撤銷 ${groupCases.length} 個「${reasonName}」案件！`);
    },

    async preloadNextCases() {
        const currentTask = ++(this.state.preloadTaskCount);
        const currentIndex = this.state.filteredCases.findIndex(c => c.id === this.state.selectedCaseId);
        if (currentIndex === -1) return;

        const nextCases = this.state.filteredCases.slice(currentIndex + 1, currentIndex + 6);
        const targetIds = new Set([this.state.selectedCaseId, ...nextCases.map(c => c.id)]);

        this.state.allCases.forEach(c => {
            if (this.state.preloadedCaseIds.has(c.id) && !targetIds.has(c.id)) {
                if (c.video && c.video.startsWith('blob:')) {
                    URL.revokeObjectURL(c.video);
                    c.video = c.originalVideoUrl;
                }
                if (c.images) {
                    c.images.forEach(img => {
                        if (img.src && img.src.startsWith('blob:')) {
                            URL.revokeObjectURL(img.src);
                            img.src = img.originalSrc;
                        }
                    });
                }
                this.state.preloadedCaseIds.delete(c.id);
            }
        });

        for (const nextCase of nextCases) {
            if (this.state.preloadTaskCount !== currentTask) break;

            if (!this.state.preloadedCaseIds.has(nextCase.id)) {
                this.state.preloadedCaseIds.add(nextCase.id);

                try {
                    if (nextCase.video && !nextCase.video.startsWith('blob:')) {
                        const vResp = await fetch(nextCase.video);
                        const vBlob = await vResp.blob();
                        if (this.state.preloadedCaseIds.has(nextCase.id)) {
                            nextCase.video = URL.createObjectURL(vBlob);
                        }
                    }

                    if (nextCase.images && nextCase.images.length > 0) {
                        for (let img of nextCase.images) {
                            if (img.src && !img.src.startsWith('blob:')) {
                                const iResp = await fetch(img.src);
                                const iBlob = await iResp.blob();
                                if (this.state.preloadedCaseIds.has(nextCase.id)) {
                                    img.src = URL.createObjectURL(iBlob);
                                }
                            }
                        }
                    }
                } catch (err) {
                    console.error(`預載案件 #${nextCase.id} 失敗:`, err);
                }

                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
    },

    setupVideoMarkers(caseData) {
        const video = document.getElementById('main-video-view');
        const markerContainer = document.getElementById('marker-container');
        const customProgress = document.getElementById('custom-progress-bar');
        const customProgressContainer = document.getElementById('custom-progress-container');

        if (!video || !markerContainer) return;

        video.onloadedmetadata = () => {
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
        };

        if (video.readyState >= 1) {
            video.onloadedmetadata();
        }

        video.ontimeupdate = () => {
            if (video.duration) {
                const percent = (video.currentTime / video.duration) * 100;
                customProgress.style.width = `${percent}%`;
            }
        };

        customProgressContainer.onclick = (e) => {
            const rect = customProgressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            video.currentTime = pos * video.duration;
        };
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

    applyFilters() {
        const keyword = document.getElementById('keyword-search').value.toLowerCase();

        this.state.filteredCases = this.state.pendingCases.filter(c => {
            let matchLevel = false;
            if (this.state.currentLevel === 'none') matchLevel = (c.level === 'none');
            if (this.state.currentLevel === 'high') matchLevel = (c.level === 'high');
            if (this.state.currentLevel === 'mid') matchLevel = (c.level === 'mid');
            if (this.state.currentLevel === 'low') matchLevel = (c.level === 'low');

            const matchKeyword = c.id.toLowerCase().includes(keyword) ||
                c.plate.toLowerCase().includes(keyword) ||
                c.location.toLowerCase().includes(keyword);

            return matchLevel && matchKeyword;
        });

        this.renderCaseList();
        this.updateStatistics();

        if (this.state.filteredCases.length > 0) {
            const stillExists = this.state.filteredCases.find(c => c.id === this.state.selectedCaseId);
            if (stillExists) {
                this.handleCaseClick(this.state.selectedCaseId);
            } else {
                this.handleCaseClick(this.state.filteredCases[0].id);
            }
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
                'text-gray-700', 'bg-gray-100', 'border-gray-300',
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
            } else if (level === 'none') {
                el.classList.add('text-gray-700', 'bg-gray-100', 'border-gray-300');
            }
        }

        this.state.currentLevel = level;
        this.applyFilters();
    },

    updateStatistics() {
        const stats = { high: 0, mid: 0, low: 0 };
        this.state.pendingCases.forEach(c => {
            if (c.level === 'high') stats.high++;
            else if (c.level === 'mid') stats.mid++;
            else if (c.level === 'low') stats.low++;
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
        if (!container) return;

        if (this.state.currentLevel === 'low' || this.state.currentLevel === 'mid') {
            const groups = {};
            this.state.filteredCases.forEach(c => {
                if (c.toleranceAppear && c.toleranceClass) {
                    const date = c.timestamp.split('T')[0];
                    const loc = c.location || "未知路口";
                    const tolClass = c.toleranceClass;
                    const key = `${date}_${loc}_${tolClass}`;
                    if (!groups[key]) groups[key] = [];
                    groups[key].push(c);
                }
            });

            let html = '';
            const renderedFolders = new Set();

            this.state.filteredCases.forEach(c => {
                let isGrouped = false;

                if (c.toleranceAppear && c.toleranceClass) {
                    const date = c.timestamp.split('T')[0];
                    const loc = c.location || "未知路口";
                    const tolClass = c.toleranceClass;
                    const folderId = `${date}_${loc}_${tolClass}`;

                    if (groups[folderId] && groups[folderId].length >= 2) {
                        isGrouped = true;

                        if (!renderedFolders.has(folderId)) {
                            const isExpanded = this.state.expandedFolders[folderId] !== false;
                            html += UIRenderer.createFolderHTML(date, loc, tolClass, folderId, groups[folderId], isExpanded);
                            renderedFolders.add(folderId);
                        }
                    }
                }

                if (!isGrouped) {
                    html += UIRenderer.createCaseItemHTML(c);
                }
            });

            container.innerHTML = html;
        } else {
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

    // 🌟 新增：直接在頁面上更新並儲存法條的函式
    async updateLegalBasis(id, newText) {
        newText = newText.trim();
        const currentCase = this.state.allCases.find(c => c.id === id);
        if (!currentCase || currentCase.legalBasis === newText) return;

        currentCase.legalBasis = newText;

        try {
            const caseRef = doc(db, "stage2_qwen_vlm", id);
            await updateDoc(caseRef, {
                'RAG_analysis.判斷法規': newText
            });
            console.log(`案件 #${id} 法條已更新`);
        } catch (error) {
            console.error("更新法條失敗:", error);
        }
    },

    async updateCaseLevel(level) {
        const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);
        if (!currentCase) return;

        let levelText = '';
        if (level === 'high') levelText = '確信違規';
        else if (level === 'mid') levelText = '疑似違規';
        else if (level === 'low') levelText = '邊界案例';

        currentCase.level = level;
        this.applyFilters();

        try {
            const caseRef = doc(db, "stage2_qwen_vlm", currentCase.id);
            await updateDoc(caseRef, {
                '分級': levelText
            });
        } catch (error) {
            console.error("更新分級失敗:", error);
        }
    },

    async confirmTicket() {
        const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);
        this.closeTicket();

        if (currentCase) {
            try {
                const caseRef = doc(db, "stage2_qwen_vlm", currentCase.id);
                await updateDoc(caseRef, {
                    auditor: "林警員"
                });

                currentCase.auditor = "林警員";
                this.state.pendingCases = this.state.allCases.filter(c => !c.auditor);

                this.updateStatistics();
                this.applyFilters();

            } catch (error) {
                console.error("寫入資料庫失敗:", error);
                alert("案件成立失敗，請檢查網路連線或資料庫權限設定！");
            }
        }
    },

    cancelCase: function() {
        const modal = document.getElementById('cancel-modal');
        if (modal) {
            modal.classList.remove('hidden');
            const radios = document.querySelectorAll('input[name="cancel-reason"]');
            radios.forEach(r => r.checked = false);

            const currentCase = this.state.allCases.find(c => c.id === this.state.selectedCaseId);
            const defaultDesc = currentCase && currentCase.description ? currentCase.description : '';

            document.getElementById('other-reason-input').value = defaultDesc;
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
            currentCase.auditor = "林警員(撤銷)";

            this.state.pendingCases = this.state.allCases.filter(c => !c.auditor && c.status === 'pending');

            this.updateStatistics();
            this.applyFilters();
            this.closeCancelModal();
        } else {
            this.closeCancelModal();
        }
    }
};

window.app = app;
window.TimeUtils = TimeUtils;

document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            app.init();
        } else {
            window.location.href = "login.html";
        }
    });
});