// 在最上方引入 Firebase 設定與 Firestore 方法
import { db, collection, getDocs, doc, updateDoc, auth } from "./firebase-config.js";

const HistoryController = {
    rawRecords: [],
    filteredRecords: [],
    currentPage: 1,
    pageSize: 10,
    currentReviewCaseId: null,

    async init() {
        let firebaseRecords = [];

        try {
            // 1. 取得 Firebase YOLO 集合的資料
            const querySnapshot = await getDocs(collection(db, "YOLO"));

            let realToken = "";
            const currentUser = auth?.currentUser;
            if (currentUser) {
                realToken = await currentUser.getIdToken();
            }

            querySnapshot.forEach((docSnap) => {
                const data = docSnap.data();
                const caseId = data.case_id || docSnap.id;

                // 🎯 核心篩選：只抓取 auditor 為「林警員」的案件
                if (data.auditor !== "林警員") return;

                let images = [];
                let videoUrl = "";

                // 處理影片與圖片路徑 (與首頁邏輯一致)
                if (caseId === "20260808_181318_010") {
                    videoUrl = `./video/${caseId}_video.mp4`;
                    images = [
                        { src: `./video/${caseId}_1.jpg`, time: 0 },
                        { src: `./video/${caseId}_2.jpg`, time: 0 },
                        { src: `./video/${caseId}_3.jpg`, time: 0 }
                    ];
                } else {
                    if (data.evidence_image_urls && Array.isArray(data.evidence_image_urls)) {
                        images = data.evidence_image_urls.map((img, index) => {
                            let proxyImgUrl = realToken ? `http://127.0.0.1:8000/api/image/${caseId}/${index}?token=${realToken}` : img.url;
                            return { src: proxyImgUrl, time: img.video_time_sec };
                        });
                    }
                    if (data.evidence_video && realToken) {
                        videoUrl = `http://127.0.0.1:8000/api/video/${caseId}?token=${realToken}`;
                    }
                }

                const formattedDate = data.timestamp ? data.timestamp.replace('T', ' ') : '未知時間';

                // 轉換為歷史紀錄需要的格式
                firebaseRecords.push({
                    rawId: caseId,
                    id: `#${caseId}`,
                    date: formattedDate,
                    location: data.intersection_name || '未知地點',
                    type: data.type || '未分類',
                    plate: data.track_id ? `T-${data.track_id}` : '未知車牌',
                    // 如果有自訂狀態則顯示，否則預設顯示裁決確認
                    status: data.status === 'canceled' ? '撤銷舉發' : '裁決確認',
                    confidence: 90,
                    image: images.length > 0 ? images[0].src : '',
                    imagesData: images,
                    video: videoUrl,
                    description: data.VLM_analysis?.總體說明 || data.VLM_analysis?.主角狀況描述 || "無詳細情境描述",
                    legalBasis: data.RAG_analysis?.判斷法規 || "相關法規研判中"
                });
            });
        } catch (error) {
            console.error("Firebase 歷史案件讀取失敗:", error);
        }

        // 2. 處理本地 data.js (mockCases) 的資料作為備用/合併
        let localRecords = [];
        if (typeof mockCases !== 'undefined') {
            localRecords = mockCases
                .filter(c => c.status !== 'pending' && c.auditor === '林警員')
                .map(c => {
                    const isVerified = c.status === 'verified';
                    const formattedDate = c.timestamp ? c.timestamp.replace('T', ' ') : '未知時間';

                    let desc = c.description;
                    if (!desc && c.aiReport) {
                        const aiItem = c.aiReport.find(item => item.type === 'ai' && item.text.includes('物件辨識'));
                        desc = aiItem ? aiItem.text.replace('物件辨識：', '') : '受處分人駕駛該車輛，違規事實明確。';
                    }

                    return {
                        rawId: c.id,
                        id: `#${c.id}`,
                        date: formattedDate,
                        location: c.location || '未知地點',
                        type: c.type || '未分類',
                        plate: c.plate || '未知車牌',
                        status: isVerified ? '裁決確認' : '撤銷舉發',
                        confidence: c.confidence || 0,
                        image: c.images && c.images.length > 0 ? c.images[0].src : '',
                        imagesData: c.images,
                        video: c.video,
                        description: desc,
                        legalBasis: c.legalBasis || '《道路交通管理處罰條例》'
                    };
                });
        }

        // 3. 將 Firebase 與本地資料合併，並依照時間由新到舊排序
        this.rawRecords = [...firebaseRecords, ...localRecords].sort((a, b) => new Date(b.date) - new Date(a.date));

        this.populateFilters();
        this.setupEventListeners();
        this.applyFilters();
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
                userInfo.querySelector('.flex-shrink-0')?.classList.remove('mr-3');
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
                userInfo.querySelector('.flex-shrink-0')?.classList.add('mr-3');
            }
            texts.forEach(el => el.classList.remove('hidden'));
            navItems.forEach(item => {
                item.classList.remove('justify-center');
                item.querySelector('i')?.classList.add('mr-3');
            });
            if (toggleIcon) { toggleIcon.classList.remove('fa-angle-right'); toggleIcon.classList.add('fa-angle-left'); }
        }
    },

    populateFilters() {
        const locations = [...new Set(this.rawRecords.map(r => r.location))].filter(Boolean);
        const types = [...new Set(this.rawRecords.map(r => r.type))].filter(Boolean);

        const appendOptions = (selectId, items) => {
            const select = document.getElementById(selectId);
            if (!select) return;

            const firstOption = select.options[0];
            select.innerHTML = '';
            select.appendChild(firstOption);

            items.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                select.appendChild(option);
            });
        };

        appendOptions('location-filter', locations);
        appendOptions('type-filter', types);
    },

    setupEventListeners() {
        const searchInput = document.getElementById('keyword-search');
        if (searchInput) searchInput.addEventListener('input', () => this.applyFilters());

        const today = new Date();
        const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 30);
        const pastDateStr = `${pastDate.getFullYear()}-${String(pastDate.getMonth() + 1).padStart(2, '0')}-${String(pastDate.getDate()).padStart(2, '0')}`;

        const startDate = document.getElementById('start-date');
        const endDate = document.getElementById('end-date');
        if (startDate) {
            startDate.max = todayStr;
            startDate.value = pastDateStr;
            startDate.addEventListener('change', () => this.applyFilters());
        }
        if (endDate) {
            endDate.max = todayStr;
            endDate.value = todayStr;
            endDate.addEventListener('change', () => this.applyFilters());
        }

        const filterBtn = document.getElementById('advanced-filter-btn');
        const filterPanel = document.getElementById('filter-panel');
        const closeFilterBtn = document.getElementById('close-filter-btn');
        const applyFilterBtn = document.getElementById('apply-advanced-filters');
        const clearFilterBtn = document.getElementById('clear-advanced-filters');

        if (filterBtn && filterPanel) {
            filterBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                filterPanel.classList.toggle('hidden');
            });

            closeFilterBtn?.addEventListener('click', () => filterPanel.classList.add('hidden'));

            document.addEventListener('click', (e) => {
                if (!filterPanel.contains(e.target) && !filterBtn.contains(e.target)) {
                    filterPanel.classList.add('hidden');
                }
            });
        }

        if (applyFilterBtn) {
            applyFilterBtn.addEventListener('click', () => {
                this.applyFilters();
                filterPanel.classList.add('hidden');
            });
        }

        if (clearFilterBtn) {
            clearFilterBtn.addEventListener('click', () => {
                ['status-filter', 'location-filter', 'type-filter'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.value = 'all';
                });
                this.applyFilters();
            });
        }

        const resetBtn = document.getElementById('reset-filters');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (searchInput) searchInput.value = '';
                if (startDate) startDate.value = pastDateStr;
                if (endDate) endDate.value = todayStr;

                ['status-filter', 'location-filter', 'type-filter'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.value = 'all';
                });

                this.applyFilters();
            });
        }
    },

    applyFilters() {
        const keywordInput = document.getElementById('keyword-search');
        const keyword = keywordInput ? keywordInput.value.toLowerCase() : '';

        const startInput = document.getElementById('start-date');
        const endInput = document.getElementById('end-date');
        const startDate = startInput?.value ? new Date(startInput.value + 'T00:00:00') : null;
        const endDate = endInput?.value ? new Date(endInput.value + 'T23:59:59') : null;

        const statusVal = document.getElementById('status-filter')?.value || 'all';
        const locationVal = document.getElementById('location-filter')?.value || 'all';
        const typeVal = document.getElementById('type-filter')?.value || 'all';

        let activeCount = 0;
        if (statusVal !== 'all') activeCount++;
        if (locationVal !== 'all') activeCount++;
        if (typeVal !== 'all') activeCount++;

        const countBadge = document.getElementById('active-filter-count');
        const filterBtn = document.getElementById('advanced-filter-btn');
        if (countBadge && filterBtn) {
            if (activeCount > 0) {
                countBadge.innerText = activeCount;
                countBadge.classList.remove('hidden');
                filterBtn.classList.add('border-blue-500', 'text-blue-600', 'bg-blue-50');
                filterBtn.classList.remove('text-gray-700', 'border-gray-200');
            } else {
                countBadge.classList.add('hidden');
                filterBtn.classList.remove('border-blue-500', 'text-blue-600', 'bg-blue-50');
                filterBtn.classList.add('text-gray-700', 'border-gray-200');
            }
        }

        this.filteredRecords = this.rawRecords.filter(r => {
            const matchKeyword = r.id.toLowerCase().includes(keyword) ||
                r.plate.toLowerCase().includes(keyword) ||
                r.location.toLowerCase().includes(keyword);

            let matchDate = true;
            const recordDate = new Date(r.date.replace(' ', 'T'));
            if (startDate && recordDate < startDate) matchDate = false;
            if (endDate && recordDate > endDate) matchDate = false;

            const matchStatus = (statusVal === 'all') || (r.status === statusVal);
            const matchLocation = (locationVal === 'all') || (r.location === locationVal);
            const matchType = (typeVal === 'all') || (r.type === typeVal);

            return matchKeyword && matchDate && matchStatus && matchLocation && matchType;
        });

        this.renderPage(1);
    },

    renderPage(page) {
        const totalPages = Math.ceil(this.filteredRecords.length / this.pageSize) || 1;

        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;

        this.currentPage = page;

        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        const pageData = this.filteredRecords.slice(startIndex, endIndex);

        this.renderTable(pageData);
        this.updatePaginationUI();
    },

    updatePaginationUI() {
        const total = this.filteredRecords.length;
        const startNum = total === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
        const endNum = Math.min(this.currentPage * this.pageSize, total);
        const totalPages = Math.ceil(total / this.pageSize) || 1;

        const infoContainer = document.getElementById('pagination-info');
        if (infoContainer) {
            infoContainer.innerHTML = `RECORDS <span class="text-gray-900">${startNum} - ${endNum}</span> OF <span class="text-gray-900">${total}</span>`;
        }

        const controlsContainer = document.getElementById('pagination-controls');
        if (!controlsContainer) return;

        let html = '';
        const prevDisabled = this.currentPage === 1;
        html += `<button onclick="HistoryController.renderPage(${this.currentPage - 1})" class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white ${prevDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-50'}" ${prevDisabled ? 'disabled' : ''}><i class="fas fa-chevron-left text-xs"></i></button>`;

        let startPage = Math.max(1, this.currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }

        if (startPage > 1) {
            html += `<button onclick="HistoryController.renderPage(1)" class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-bold text-xs">1</button>`;
            if (startPage > 2) html += `<span class="px-2 text-gray-400 text-xs">...</span>`;
        }

        for (let i = startPage; i <= endPage; i++) {
            if (i === this.currentPage) {
                html += `<button class="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white font-bold text-xs">${i}</button>`;
            } else {
                html += `<button onclick="HistoryController.renderPage(${i})" class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-bold text-xs">${i}</button>`;
            }
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) html += `<span class="px-2 text-gray-400 text-xs">...</span>`;
            html += `<button onclick="HistoryController.renderPage(${totalPages})" class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-bold text-xs">${totalPages}</button>`;
        }

        const nextDisabled = this.currentPage === totalPages || total === 0;
        html += `<button onclick="HistoryController.renderPage(${this.currentPage + 1})" class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white ${nextDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-50'}" ${nextDisabled ? 'disabled' : ''}><i class="fas fa-chevron-right text-xs"></i></button>`;

        controlsContainer.innerHTML = html;
    },

    renderTable(data) {
        const tbody = document.getElementById('history-table-body');
        if (!tbody) return;

        if (data.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" class="p-10 text-center text-gray-500 font-bold">沒有符合條件的紀錄</td></tr>`;
            return;
        }

        tbody.innerHTML = data.map(r => {
            const isVerified = r.status === '裁決確認';
            const statusClass = isVerified ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-red-50 text-red-500 border border-red-200';
            const [datePart, timePart] = r.date.split(' ');

            return `
            <tr class="border-b border-gray-100 hover:bg-gray-50 transition group">
                <td class="p-5">
                    <div class="text-sm font-extrabold text-blue-600">${r.id}</div>
                </td>
                <td class="p-5">
                    <div class="text-[10px] text-gray-500 font-mono tracking-widest">${datePart || ''}<br>${timePart || ''}</div>
                </td>
                <td class="p-5">
                    <div class="text-[12px] text-gray-600 font-bold max-w-[250px] truncate" title="${r.location}">${r.location}</div>
                </td>
                <td class="p-5 text-center">
                    <div class="inline-block border border-gray-200 rounded px-3 py-1.5 bg-gray-50 text-center shadow-sm">
                        <span class="text-[11px] font-extrabold text-gray-900 font-mono tracking-widest">${r.plate}</span>
                    </div>
                </td>
                <td class="p-5">
                    <div class="text-sm font-extrabold text-gray-900">${r.type}</div>
                </td>
                <td class="p-5 text-center">
                    <span class="px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest ${statusClass}">${r.status}</span>
                </td>
                <td class="p-5 text-center">
                    <button onclick="HistoryController.openModal('${r.rawId}')" class="text-gray-400 hover:text-blue-600 transition p-2 rounded hover:bg-blue-50" title="重新審查">
                        <i class="fas fa-file-signature text-lg"></i>
                    </button>
                </td>
            </tr>
        `}).join('');
    },

    openModal(caseId) {
        // 從我們合併過後的 rawRecords 中尋找，確保雲端與本地端資料都能順利打開彈窗
        const c = this.rawRecords.find(x => x.rawId === caseId);
        if (!c) return;

        this.currentReviewCaseId = caseId;
        document.getElementById('modal-case-id').innerText = c.id;
        document.getElementById('modal-plate').innerText = c.plate;
        document.getElementById('modal-location').innerText = c.location;
        document.getElementById('modal-type').innerText = c.type;
        document.getElementById('modal-legal').innerText = c.legalBasis;
        document.getElementById('modal-desc').innerText = c.description;

        const videoEl = document.getElementById('modal-video');
        if (videoEl) {
            videoEl.src = c.video || 'video/video01.mp4';
            videoEl.play().catch(e => console.log("Video auto-play prevented:", e));
        }

        const thumbContainer = document.getElementById('modal-thumbnails');
        if (thumbContainer && c.imagesData) {
            thumbContainer.innerHTML = c.imagesData.slice(0, 3).map(img => `
                <div class="relative aspect-video rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 cursor-pointer transition bg-black"
                     onclick="HistoryController.seekVideo(${img.time})">
                    <img src="${img.src}" class="w-full h-full object-cover opacity-80 hover:opacity-100">
                    <span class="absolute top-1 left-1 bg-blue-600 text-white text-[10px] px-1.5 rounded shadow">${img.time}s</span>
                </div>
            `).join('');
        }

        document.getElementById('re-review-modal').classList.remove('hidden');
    },

    closeModal() {
        document.getElementById('re-review-modal').classList.add('hidden');
        this.currentReviewCaseId = null;

        const videoEl = document.getElementById('modal-video');
        if (videoEl) videoEl.pause();
    },

    seekVideo(time) {
        const videoEl = document.getElementById('modal-video');
        if (videoEl) videoEl.currentTime = time;
    },

    async submitReReview(newStatus) {
        if (!this.currentReviewCaseId) return;

        const newStatusText = newStatus === 'verified' ? '裁決確認' : '撤銷舉發';
        const dbStatusVal = newStatus === 'verified' ? 'verified' : 'canceled';

        try {
            // 1. 同步更新 Firebase 上的狀態
            const caseRef = doc(db, "YOLO", this.currentReviewCaseId);
            await updateDoc(caseRef, {
                status: dbStatusVal
            });
            console.log("Firebase 狀態更新成功");
        } catch (error) {
            console.warn("無法更新 Firebase (可能是本地 mockCase 資料):", error);
        }

        // 2. 更新本地端畫面列表狀態
        const record = this.rawRecords.find(x => x.rawId === this.currentReviewCaseId);
        if (record) {
            record.status = newStatusText;
            this.applyFilters(); // 重新渲染表格
            this.closeModal();
            alert(`案件 ${record.id} 已經重新審查完畢，當前狀態：已${newStatusText === '裁決確認' ? '成立' : '撤銷'}。`);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => HistoryController.init());

window.HistoryController = HistoryController;
window.app = {
    toggleSidebar: () => HistoryController.toggleSidebar()
};