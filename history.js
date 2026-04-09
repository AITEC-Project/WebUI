/**
 * 模擬歷史數據源
 */
const HistoryData = {
    async fetchAll() {
        // 模擬延遲
        await new Promise(r => setTimeout(r, 200));
        return [
            { id: 'AA-0000', date: '2026-04-08 23:12', type: '超速', plate: 'K82-LMP', conf: 88, status: '已成立' },
            { id: 'AA-0001', date: '2026-04-08 23:04', type: '超速', plate: 'M66-DFG', conf: 80, status: '已成立' },
            { id: 'AA-0002', date: '2026-04-07 14:22', type: '闖紅燈', plate: 'H55-EES', conf: 93, status: '已成立' },
            { id: 'AA-0003', date: '2026-04-05 09:10', type: '違規停車', plate: 'ABC-1234', conf: 100, status: '已撤銷' },
            { id: 'AA-0004', date: '2026-03-28 16:45', type: '超速', plate: 'T90-RTC', conf: 79, status: '已成立' },
            { id: 'AA-0005', date: '2026-03-15 11:30', type: '闖紅燈', plate: 'E41-CJA', conf: 85, status: '已撤銷' },
            { id: 'AA-0006', date: '2026-03-02 08:20', type: '違規停車', plate: 'XYZ-9988', conf: 98, status: '已成立' }
        ];
    }
};

const historyApp = {
    rawRecords: [],

    async init() {
        this.rawRecords = await HistoryData.fetchAll();
        this.renderTable(this.rawRecords);
        this.setupEventListeners();
    },

    renderTable(data) {
        const tbody = document.getElementById('history-table-body');
        tbody.innerHTML = data.map(record => `
            <tr class="border-b border-gray-800 hover:bg-gray-800/30 transition">
                <td class="p-4 font-mono text-blue-400">#${record.id}</td>
                <td class="p-4 text-gray-400">${record.date}</td>
                <td class="p-4">${record.type}</td>
                <td class="p-4 font-mono font-bold">${record.plate}</td>
                <td class="p-4">
                    <span class="${record.conf > 90 ? 'text-green-500' : 'text-yellow-500'}">${record.conf}%</span>
                </td>
                <td class="p-4">
                    <span class="px-2 py-1 rounded-full text-[10px] font-bold ${
            record.status === '已成立' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
        }">${record.status}</span>
                </td>
                <td class="p-4 text-right">
                    <button class="text-gray-500 hover:text-white transition"><i class="fas fa-eye"></i></button>
                </td>
            </tr>
        `).join('');
    },

    setupEventListeners() {
        const filters = ['filter-range', 'filter-type', 'filter-status'];
        filters.forEach(id => {
            document.getElementById(id).addEventListener('change', () => this.applyFilters());
        });

        document.getElementById('reset-filters').addEventListener('click', () => {
            filters.forEach(id => document.getElementById(id).value = 'all');
            this.renderTable(this.rawRecords);
        });
    },

    applyFilters() {
        const range = document.getElementById('filter-range').value;
        const type = document.getElementById('filter-type').value;
        const status = document.getElementById('filter-status').value;

        const filtered = this.rawRecords.filter(r => {
            const matchType = type === 'all' || r.type === type;
            const matchStatus = status === 'all' || r.status === status;

            // 時間篩選邏輯 (簡化版：模擬今日篩選)
            let matchRange = true;
            if (range === 'today') matchRange = r.date.includes('2026-04-08');

            return matchType && matchStatus && matchRange;
        });

        this.renderTable(filtered);
    }
};

document.addEventListener('DOMContentLoaded', () => historyApp.init());