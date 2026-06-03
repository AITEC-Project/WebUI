const TicketModal = {
    // 儲存事件監聽器的引用，以便後續移除
    _handleKeyDown: null,

    /**
     * 開啟彈窗並填充案件資料
     * @param {Object} c 案件資料物件
     */
    /**
     * 開啟彈窗並填充案件資料
     * @param {Object} c 案件資料物件
     */
    open(c) {
        if (!c) return;

        // 1. 填充基本文字資訊 (單號、車牌已整合至詳情區)
        document.getElementById('m-id').innerText = c.id;
        document.getElementById('m-plate').innerText = c.plate;
        document.getElementById('m-time').innerText = TimeUtils.formatFullTime(c.timestamp);
        document.getElementById('m-location').innerText = c.location;
        document.getElementById('m-type').innerText = c.type;
        document.getElementById('m-legal').innerText = c.legalBasis;

        // (已刪除車輛種類、罰鍰總額、繳費期限的計算邏輯)

        // 2. 渲染證據圖片
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

        // 3. 顯示彈窗
        const modal = document.getElementById('ticket-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');

            // 回到彈窗最上方
            const modalScroll = modal.querySelector('.overflow-y-auto');
            if (modalScroll) {
                modalScroll.scrollTop = 0;
            }
        }

        if (this._handleKeyDown) {
            window.removeEventListener('keydown', this._handleKeyDown, true);
            this._handleKeyDown = null;
        }

        // 4. 綁定「第二次 Enter」監聽器
        setTimeout(() => {
            this._handleKeyDown = (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    console.log("彈窗內 Enter：確認送出");
                    if (typeof app !== 'undefined') app.confirmTicket();
                } else if (e.key === 'Escape') {
                    if (typeof app !== 'undefined') app.closeTicket();
                }
            };
            window.addEventListener('keydown', this._handleKeyDown, true);
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