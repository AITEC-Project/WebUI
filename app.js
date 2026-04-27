/**
 * API 服務層 - 未來串接 FastAPI 時，將 fetchCases 改為非同步請求後端接口
 */
const ApiService = {
    async fetchCases() {
        // 模擬從後端獲取的 JSON 數據
        // 為符合需求，將原本單一 image 改為 images 陣列
        return [
            {
                id: 'AA-0000',
                type: '超速行駛 (限速 45, 實測 65)',
                plate: 'K82-LMP',
                time: '2m ago',
                confidence: 88,
                timestamp: '2026-04-08 23:12:05',
                // 存放三張不同角度的影像
                images: [
                    'pictures/AA-0000-1.jpg', // 左上：違規當下
                    'pictures/AA-0000-2.jpg', // 右上：車牌特寫
                    'pictures/AA-0000-3.jpg'  // 左下：標線與環境
                ],
                video: 'https://www.w3schools.com/html/mov_bbb.mp4',
                aiReport: [
                    { type: 'env', text: '環境感測：測速雷達偵測該車速為 65km/h，超過該路段限速 45km/h。' },
                    { type: 'obj', text: '物件辨識：標的車輛為黑色 Sedan，車牌 K82-LMP 清晰可見。' },
                    { type: 'law', text: '法規匹配：符合《道路交通管理處罰條例》第 40 條：超速行駛。' }
                ]
            },
            {
                id: 'BB-1234',
                type: '違規停車',
                plate: 'ABC-5678',
                time: '15m ago',
                confidence: 95,
                timestamp: '2026-04-08 22:55:10',
                images: [
                    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
                    'https://via.placeholder.com/800x450/222/fff?text=Cam+2',
                    'https://via.placeholder.com/800x450/222/fff?text=Cam+3'
                ],
                aiReport: [
                    { type: 'env', text: '環境感測：該區域為紅線路段，禁止臨時停車。' },
                    { type: 'obj', text: '物件辨識：偵測到車輛於紅線處靜止超過 3 分鐘。' },
                    { type: 'law', text: '法規匹配：違反《道路交通管理處罰條例》第 56 條。' }
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
                        <img src="${c.images[0]}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between">
                            <span class="text-sm font-bold text-gray-200">#${c.id}</span>
                            <span class="text-[10px] text-gray-500">${c.time}</span>
                        </div>
                        <p class="text-xs text-gray-400">事項：${c.type.split(' ')[0]}</p>
                        <p class="text-[10px] text-gray-500">車牌：${c.plate}</p>
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

        const tsElement = document.querySelector('.font-mono');
        if (tsElement) tsElement.innerText = `TIMESTAMP: ${c.timestamp}`;

        // 2. 渲染三張影像 (左上、右上、左下排列)
        const gridContainer = document.getElementById('evidence-grid');
        if (gridContainer) {
            const labels = ['違規主景 (CAM 1)', '車牌特寫 (CAM 2)', '環境關聯 (CAM 3)'];
            let gridHTML = '';

            // 生成三張圖片的 HTML
            for (let i = 0; i < 3; i++) {
                const imgSrc = c.images[i] || 'https://via.placeholder.com/400x225?text=No+Data';
                gridHTML += `
                    <div class="relative rounded-xl overflow-hidden bg-black aspect-video group cursor-zoom-in border border-gray-800">
                        <img src="${imgSrc}" 
                             class="evidence-img w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-300" 
                             onclick="app.openLightbox('${imgSrc}')"
                             alt="Evidence ${i+1}">
                        <div class="absolute bottom-2 left-2 text-[10px] bg-black/60 text-gray-300 px-2 py-0.5 rounded backdrop-blur-sm">
                            ${labels[i]}
                        </div>
                    </div>
                `;
            }

            // 第四格填入資訊或留白
            const videoSrc = c.video || '';
            gridHTML += `
                <div class="relative rounded-xl overflow-hidden bg-black aspect-video border border-gray-800">
                    <video class="w-full h-full object-cover" controls muted loop>
                        <source src="${videoSrc}" type="video/mp4">
                        您的瀏覽器不支援影片播放。
                    </video>
                    <div class="absolute top-2 left-2 text-[10px] bg-blue-600/80 text-white px-2 py-0.5 rounded backdrop-blur-sm">
                        <i class="fas fa-video mr-1"></i> 動態追蹤錄影
                    </div>
                </div>
            `;

            gridContainer.innerHTML = gridHTML;
        }

        // 3. 渲染 AI 分析列表
        const reportList = document.getElementById('ai-report-list');
        if (reportList) {
            reportList.innerHTML = c.aiReport.map(item => {
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

        // 4. 初始化燈箱點擊關閉事件
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.onclick = () => lightbox.classList.add('hidden');
        }

        console.log('交通執法系統已啟動，版本：v2.0 (多視角支援)');
    },

    /**
     * 處理案件點擊事件
     */
    handleCaseClick(id) {
        this.state.selectedCaseId = id;
        const selectedData = this.state.cases.find(c => c.id === id);

        // 更新 UI
        UIRenderer.renderDetail(selectedData);

        // 視覺反饋：切換選中狀態樣式
        document.querySelectorAll('#case-list > div').forEach(el => {
            if (el.getAttribute('onclick').includes(id)) {
                el.classList.add('border-blue-500', 'bg-blue-900/10');
            } else {
                el.classList.remove('border-blue-500', 'bg-blue-900/10');
            }
        });

        console.log(`已切換至案件: ${id}`);
    },

    /**
     * 開啟全螢幕燈箱
     * @param {string} src - 圖片來源路徑
     */
    openLightbox(src) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        if (lightbox && lightboxImg) {
            lightboxImg.src = src;
            lightbox.classList.remove('hidden');
        }
    }
};

// 確保 DOM 載入後再初始化程式
document.addEventListener('DOMContentLoaded', () => app.init());