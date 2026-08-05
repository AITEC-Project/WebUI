const HistoryController = {
    rawRecords: [],
    filteredRecords: [],
    currentPage: 1,
    pageSize: 10,
    currentReviewCaseId: null,

    init() {
        if (typeof mockCases !== 'undefined') {
            this.rawRecords = mockCases.filter(c => c.status !== 'pending').map(c => {
                const isVerified = c.status === 'verified';
                const formattedDate = c.timestamp ? c.timestamp.replace('T', ' ') : '未知時間';

                return {
                    rawId: c.id,
                    id: `#${c.id}`,
                    date: formattedDate,
                    location: c.location || '未知地點',
                    type: c.type || '未分類',
                    plate: c.plate || '未知車牌',
                    status: isVerified ? '裁決確認' : '撤銷舉發',
                    confidence: c.confidence || 0,
                    // 改為直接對齊 data.js 中的 auditor 欄位，若無則顯示「未指派」
                    auditor: c.auditor ? c.auditor : '未指派',
                    image: c.images && c.images.length > 0 ? c.images[0].src : ''
                };
            });
        }

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
        const auditors = [...new Set(this.rawRecords.map(r => r.auditor))].filter(Boolean);

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
        appendOptions('auditor-filter', auditors);
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
                ['status-filter', 'location-filter', 'type-filter', 'auditor-filter'].forEach(id => {
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

                ['status-filter', 'location-filter', 'type-filter', 'auditor-filter'].forEach(id => {
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
        const auditorVal = document.getElementById('auditor-filter')?.value || 'all';

        let activeCount = 0;
        if (statusVal !== 'all') activeCount++;
        if (locationVal !== 'all') activeCount++;
        if (typeVal !== 'all') activeCount++;
        if (auditorVal !== 'all') activeCount++;

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
            const matchAuditor = (auditorVal === 'all') || (r.auditor === auditorVal);

            return matchKeyword && matchDate && matchStatus && matchLocation && matchType && matchAuditor;
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
            tbody.innerHTML = `<tr><td colspan="8" class="p-10 text-center text-gray-500 font-bold">沒有符合條件的紀錄</td></tr>`;
            return;
        }

        tbody.innerHTML = data.map(r => {
            const isVerified = r.status === '裁決確認';
            const statusClass = isVerified ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-red-50 text-red-500 border border-red-200';
            const auditorInitial = r.auditor !== '未指派' ? r.auditor.charAt(0) : '?';
            const auditorColor = isVerified ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600';
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
                    <div class="text-[12px] text-gray-600 font-bold max-w-[200px] truncate" title="${r.location}">${r.location}</div>
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
                <td class="p-5">
                    <div class="flex items-center justify-center space-x-2">
                        <div class="w-6 h-6 rounded-full ${auditorColor} flex items-center justify-center text-[10px] font-bold">${auditorInitial}</div>
                        <span class="text-xs font-bold text-gray-700">${r.auditor}</span>
                    </div>
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
        const c = mockCases.find(x => x.id === caseId);
        if (!c) return;

        this.currentReviewCaseId = caseId;
        document.getElementById('modal-case-id').innerText = `#${c.id}`;
        document.getElementById('modal-plate').innerText = c.plate;
        document.getElementById('modal-location').innerText = c.location;
        document.getElementById('modal-type').innerText = c.type;
        document.getElementById('modal-legal').innerText = c.legalBasis || '《道路交通管理處罰條例》';

        let desc = c.description;
        if (!desc && c.aiReport) {
            const aiItem = c.aiReport.find(item => item.type === 'ai' && item.text.includes('物件辨識'));
            desc = aiItem ? aiItem.text.replace('物件辨識：', '') : '受處分人駕駛該車輛，違規事實明確。';
        }
        document.getElementById('modal-desc').innerText = desc || '受處分人駕駛該車輛，違規事實明確。';

        const videoEl = document.getElementById('modal-video');
        if (videoEl) {
            videoEl.src = c.video || 'video/video01.mp4';
            videoEl.play().catch(e => console.log("Video auto-play prevented:", e));
        }

        const thumbContainer = document.getElementById('modal-thumbnails');
        if (thumbContainer && c.images) {
            thumbContainer.innerHTML = c.images.slice(0, 3).map(img => `
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

    submitReReview(newStatus) {
        if (!this.currentReviewCaseId) return;

        const c = mockCases.find(x => x.id === this.currentReviewCaseId);
        if (c) {
            c.status = newStatus;
            this.init();
            this.closeModal();
            const statusText = newStatus === 'verified' ? '成立' : '撤銷';
            alert(`案件 #${c.id} 已經重新審查完畢，當前狀態：已${statusText}。`);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => HistoryController.init());

window.HistoryController = HistoryController;
window.app = {
    toggleSidebar: () => HistoryController.toggleSidebar()
};