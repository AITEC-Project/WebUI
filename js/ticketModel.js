const TicketModal = {
    // 儲存事件監聽器的引用，以便後續移除
    _handleKeyDown: null,

    /**
     * 開啟彈窗並填充案件資料
     * @param {Object} c 案件資料物件
     */
    open(c) {
        if (!c) return;

        // 1. 填充基本文字資訊
        document.getElementById('m-id').innerText = c.id;
        document.getElementById('m-plate').innerText = c.plate;
        document.getElementById('m-time').innerText = TimeUtils.formatFullTime(c.timestamp);
        document.getElementById('m-location').innerText = c.location;
        document.getElementById('m-type').innerText = c.type;
        document.getElementById('m-legal').innerText = c.legalBasis;

        // 2. 隨機生成車種 (僅供示範)
        const bodies = ["小客車", "大客車", "小貨車", "機車"];
        const mBody = document.getElementById('m-body');
        if (mBody) {
            mBody.innerText = bodies[Math.floor(Math.random() * bodies.length)];
        }

        // 3. 根據違規類型計算罰鍰
        let fine = 1200;
        if (c.type.includes('超速')) fine = 1600;
        if (c.type.includes('闖紅燈')) fine = 2700;
        if (c.type.includes('違規停車')) fine = 900;
        const mFine = document.getElementById('m-fine');
        if (mFine) {
            mFine.innerText = fine.toLocaleString();
        }

        // 4. 計算繳費期限 (30天後)
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 30);
        const mDeadline = document.getElementById('m-deadline');
        if (mDeadline) {
            mDeadline.innerText = deadline.toISOString().split('T')[0];
        }

        // 5. 渲染證據圖片 (修正：讀取 img.src 並標註關鍵幀秒數)
        const imgContainer = document.getElementById('m-images');
        if (imgContainer) {
            imgContainer.innerHTML = c.images.map(img => `
                <div class="relative">
                    <img src="${img.src}" class="w-full aspect-video object-cover rounded border border-gray-200 shadow-sm">
                    <div class="absolute bottom-1 right-1 bg-black/60 text-[10px] text-white px-1.5 py-0.5 rounded backdrop-blur-sm">
                        ${img.time}s
                    </div>
                </div>
            `).join('');
        }

        // 7. 顯示彈窗
        const modal = document.getElementById('ticket-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        if (this._handleKeyDown) {
            window.removeEventListener(
                'keydown',
                this._handleKeyDown,
                true
            );

            this._handleKeyDown = null;
        }

        // 綁定「第二次 Enter」監聽器
        // 使用 setTimeout 延遲掛載，防止第一個 Enter 產生的事件冒泡立即觸發第二次確認
        setTimeout(() => {
            // 定義彈窗專用的 Enter 處理
            this._handleKeyDown = (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopImmediatePropagation(); // 阻止事件傳遞到 app.js

                    console.log("彈窗內 Enter：確認送出");
                    if (typeof app !== 'undefined') app.confirmTicket();
                } else if (e.key === 'Escape') {
                    if (typeof app !== 'undefined') app.closeTicket();
                }
            };
            window.addEventListener('keydown', this._handleKeyDown, true); // 使用 Capture 模式優先攔截
        }, 250);
    },

    /**
     * 關閉彈窗並停止資源
     */
    close() {
        // 1. 隱藏 UI
        const modal = document.getElementById('ticket-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // 3. 關鍵修復：徹底移除鍵盤監聽器
        if (this._handleKeyDown) {
            console.log("移除彈窗 Enter 監聽器");
            window.removeEventListener('keydown', this._handleKeyDown, true);
            this._handleKeyDown = null; // 清空引用防止重複觸發
        }
    }
};