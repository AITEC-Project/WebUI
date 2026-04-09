/**
 * API 服務層 - 未來串接 FastAPI 時，將 fetchCases 改為非同步請求後端接口
 */
const ApiService = {
    async fetchCases() {
        // 模擬從後端獲取的 JSON 數據
        return [
            {
                id: 'AA-0000',
                type: '超速(65 in 45)',
                plate: 'K82-LMP',
                time: '2m ago',
                confidence: 88,
                timestamp: '2026-04-08 23:12:05',
                image: 'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=1200',
                aiReport: [
                    { type: 'env', text: '環境感測：測速雷達偵測該車速為 65km/h，超過該路段限速 45km/h。' },
                    { type: 'obj', text: '物件辨識：標的車輛為黑色 Sedan，車牌 K82-LMP 清晰可見。' },
                    { type: 'law', text: '法規匹配：符合《道路交通管理處罰條例》第 40 條：超速行駛。' }
                ]
            },
            {
                id: 'AA-0002',
                type: '闖紅燈',
                plate: 'H55-EES',
                time: '22m ago',
                confidence: 93,
                timestamp: '2026-04-07 14:22:05',
                image: 'https://via.placeholder.com/1200x675/111/fff?text=Red+Light+Violation',
                aiReport: [
                    { type: 'env', text: '環境感測：偵測到紅燈亮起，該車輛於紅燈啟動後 2.3 秒進入路口。' },
                    { type: 'obj', text: '物件辨識：標的車輛為白色 SUV，車牌 H55-EES 辨識度極高。' },
                    { type: 'law', text: '法規匹配：符合《道路交通管理處罰條例》第 53 條第 1 項：闖紅燈。' }
                ]
            },
            {
                id: 'AA-0005',
                type: '違規停車',
                plate: 'E41-CJA',
                time: '1h ago',
                confidence: 100,
                timestamp: '2026-04-07 11:30:00',
                image: 'https://via.placeholder.com/1200x675/222/ccc?text=Illegal+Parking',
                aiReport: [
                    { type: 'env', text: '環境感測：該區域為紅線禁止停車路段，且設有明確告示牌。' },
                    { type: 'obj', text: '物件辨識：偵測到車輛靜止於禁停區超過 3 分鐘，車牌 E41-CJA。' },
                    { type: 'law', text: '法規匹配：符合《道路交通管理處罰條例》第 56 條第 1 項：違規停車。' }
                ]
            }
        ];
    }
};

/**
 * UI 渲染引擎 - 負責將數據轉化為 HTML 標籤
 */
const UIRenderer = {
    // 渲染左側列表的單一項目
    createCaseItemHTML(c) {
        return `
            <div class="card-bg p-3 rounded-lg border border-transparent hover:border-blue-500 cursor-pointer transition group" 
                 onclick="app.handleCaseClick('${c.id}')">
                <div class="flex items-center space-x-3">
                    <div class="w-16 h-12 bg-gray-800 rounded overflow-hidden">
                        <img src="https://via.placeholder.com/150/222/fff?text=Car" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between">
                            <span class="text-sm font-bold text-gray-200">#${c.id}</span>
                            <span class="text-[10px] text-gray-500">${c.time}</span>
                        </div>
                        <p class="text-xs text-gray-400">違規事項：${c.type}</p>
                        <p class="text-[10px] text-gray-500">車牌號碼：${c.plate}</p>
                        <div class="mt-1 flex items-center justify-between">
                            <span class="text-[10px] text-red-500 font-bold">信心值：${c.confidence}%</span>
                            <i class="fas fa-chevron-right text-gray-700 group-hover:text-blue-500 text-xs"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // 更新右側詳細內容區塊
    renderDetail(c) {
        if (!c) return;

        // 1. 更新基本資訊 (案號、標題、時間)
        document.querySelector('header h2').innerText = `Case #${c.id}`;
        document.querySelector('header p').innerText = `違規事項：${c.type}`;
        document.querySelector('.font-mono').innerText = `TIMESTAMP: ${c.timestamp}`;

        // 2. 更新證據影像
        const evidenceImg = document.querySelector('img[alt="Evidence"]');
        if (evidenceImg) evidenceImg.src = c.image;

        // 3. 渲染 AI 分析列表
        const reportList = document.getElementById('ai-report-list');
        if (reportList) {
            reportList.innerHTML = c.aiReport.map(item => {
                // 根據類型選擇圖標與顏色
                let iconClass = 'fa-check-circle text-green-500';
                let label = '分析項目';

                if (item.type === 'env') label = '環境感測';
                if (item.type === 'obj') label = '物件辨識';
                if (item.type === 'law') {
                    label = '法規匹配';
                    iconClass = 'fa-info-circle text-blue-400';
                }

                return `
                    <li class="flex items-start">
                        <i class="fas ${iconClass} mt-1 mr-3"></i>
                        <div><strong>${label}：</strong>${item.text.replace(`${label}：`, '')}</div>
                    </li>
                `;
            }).join('');
        }
    }
};

/**
 * 主程式控制器 - 負責狀態管理與事件分發
 */
const app = {
    state: {
        cases: [],
        selectedCaseId: null
    },

    async init() {
        // 1. 初始化獲取資料
        this.state.cases = await ApiService.fetchCases();

        // 2. 渲染左側案件列表
        const listContainer = document.getElementById('case-list');
        if (listContainer) {
            listContainer.innerHTML = this.state.cases.map(c => UIRenderer.createCaseItemHTML(c)).join('');
        }

        // 3. 預設選中第一筆案件
        if (this.state.cases.length > 0) {
            this.handleCaseClick(this.state.cases[0].id);
        }

        console.log('交通執法系統已啟動，模式：數據驅動');
    },

    /**
     * 處理案件點擊事件
     * @param {string} id - 案號
     */
    handleCaseClick(id) {
        this.state.selectedCaseId = id;
        const selectedData = this.state.cases.find(c => c.id === id);

        // 更新 UI
        UIRenderer.renderDetail(selectedData);

        // 可以在這裡添加點擊後的樣式切換 (如 Highlight 點擊項)
        console.log(`已切換至案件: ${id}`);
    }
};

// 確保 DOM 載入後再初始化程式
document.addEventListener('DOMContentLoaded', () => app.init());