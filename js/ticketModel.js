const TicketModal = {

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
                </div>
            `).join('');
        }

        // 6. 處理影片預覽
        const video = document.getElementById('m-video');
        if (video) {
            video.src = c.video;
            video.load(); // 重新載入影片資源以確保正確切換
            video.play().catch(e => console.warn("影片自動播放受阻:", e));
        }

        // 7. 顯示彈窗 (移除 hidden)
        const modal = document.getElementById('ticket-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    },

    /**
     * 關閉彈窗並停止資源
     */
    close() {
        const video = document.getElementById('m-video');
        if (video) {
            video.pause();
            video.src = ""; // 清空來源以釋放記憶體
        }

        const modal = document.getElementById('ticket-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }
};