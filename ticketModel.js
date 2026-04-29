/**
 * 交通違規通知單元件邏輯
 */
const TicketModal = {
    /**
     * 更新並顯示彈窗
     * @param {Object} c 案件資料
     */
    open(c) {
        if (!c) return;

        // 1. 填入文字資料
        document.getElementById('m-id').innerText = c.id;
        document.getElementById('m-plate').innerText = c.plate;
        document.getElementById('m-time').innerText = TimeUtils.formatFullTime(c.timestamp);
        document.getElementById('m-location').innerText = c.location;
        document.getElementById('m-type').innerText = c.type;
        document.getElementById('m-legal').innerText = c.legalBasis;

        // 2. 模擬邏輯：車輛種類
        const bodies = ["小客車", "大客車", "小貨車", "機車"];
        document.getElementById('m-body').innerText = bodies[Math.floor(Math.random() * bodies.length)];

        // 3. 模擬邏輯：計算罰鍰 (根據違規敘述關鍵字)
        let fine = 1200;
        if (c.type.includes('超速')) fine = 1600;
        if (c.type.includes('闖紅燈')) fine = 2700;
        if (c.type.includes('違規停車')) fine = 900;
        document.getElementById('m-fine').innerText = fine.toLocaleString();

        // 4. 模擬邏輯：應到案日期 (今天 + 30天)
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 30);
        document.getElementById('m-deadline').innerText = deadline.toISOString().split('T')[0];

        // 5. 插入圖片與影片
        const imgContainer = document.getElementById('m-images');
        imgContainer.innerHTML = c.images.map(src => `
            <img src="${src}" class="w-full aspect-video object-cover rounded border border-gray-200 shadow-sm">
        `).join('');

        const video = document.getElementById('m-video');
        if (video) {
            video.src = c.video;
            video.play();
        }

        // 顯示 Modal
        document.getElementById('ticket-modal').classList.remove('hidden');
    },

    /**
     * 關閉彈窗
     */
    close() {
        const video = document.getElementById('m-video');
        if (video) video.pause();
        document.getElementById('ticket-modal').classList.add('hidden');
    }
};