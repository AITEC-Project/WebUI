/**
 * 歷史案件紀錄控制器 - 抓取 data.js 中的 mockCases
 */
const HistoryController = {
    rawRecords: [],

    init() {
        // 1. 從 data.js 抓取資料 (mockCases 是全域變數)
        // 篩選出非 pending 的案件作為歷史紀錄
        if (typeof mockCases !== 'undefined') {
            this.rawRecords = mockCases.filter(c => c.status !== 'pending').map(c => ({
                id: c.id,
                date: c.timestamp.replace('T', ' ').substring(0, 16),
                location: c.location,
                type: c.type,
                plate: c.plate,
                status: c.status === 'verified' ? '已成立' : '已撤銷'
            }));
        }
        this.renderTable(this.rawRecords);
        this.setupEventListeners();
    },

    renderTable(data) {
        const tbody = document.getElementById('history-table-body');
        if (!tbody) return;

        if (data.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" class="p-10 text-center text-gray-500">暫無歷史紀錄</td></tr>`;
            return;
        }

        tbody.innerHTML = data.map(r => `
            <tr class="border-b border-gray-800/50 hover:bg-gray-800/30 transition group">
                <td class="p-4 font-mono text-sm">${r.id}</td>
                <td class="p-4 text-xs text-gray-400">${r.date}</td>
                <td class="p-4 text-sm">${r.location}</td>
                <td class="p-4"><span class="px-2 py-1 bg-gray-800 rounded text-xs">${r.type}</span></td>
                <td class="p-4 text-sm font-bold text-blue-400">${r.plate}</td>
                <td class="p-4">
                    <span class="${r.status === '已成立' ? 'text-green-400' : 'text-red-400'} text-xs font-bold">
                        ● ${r.status}
                    </span>
                </td>
                <td class="p-4 text-right">
                    <button class="text-gray-500 hover:text-white transition" title="查看詳情">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    },

    setupEventListeners() {
        const filterIds = ['filter-range', 'filter-type', 'filter-status'];

        filterIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('change', () => this.applyFilters());
            }
        });

        const resetBtn = document.getElementById('reset-filters');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                filterIds.forEach(id => {
                    document.getElementById(id).value = 'all';
                });
                this.renderTable(this.rawRecords);
            });
        }
    },

    applyFilters() {
        const range = document.getElementById('filter-range').value;
        const type = document.getElementById('filter-type').value;
        const status = document.getElementById('filter-status').value;

        const filtered = this.rawRecords.filter(r => {
            const matchType = type === 'all' || r.type.includes(type);
            const matchStatus = status === 'all' || r.status === status;

            // 時間篩選邏輯 (這裡示範今日 2026-04-29)
            let matchRange = true;
            if (range === 'today') {
                matchRange = r.date.includes('2026-04-29');
            } else if (range === 'weekly') {
                // 簡化逻辑：只要是 4 月份都算
                matchRange = r.date.includes('2026-04');
            }

            return matchType && matchStatus && matchRange;
        });

        this.renderTable(filtered);
    }
};

// 確保在 DOM 載入後初始化
document.addEventListener('DOMContentLoaded', () => HistoryController.init());