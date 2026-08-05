const DashboardApp = {
    charts: {
        goal: null,
        trend: null
    },

    // 指定當前登入或查看的警員名稱
    currentAuditor: '葉警員',

    // 每日目標件數
    dailyTarget: 450,

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

    init() {
        this.allCases = (typeof mockCases !== 'undefined') ? mockCases : [];
        this.auditorCases = this.getAuditorCases();

        const quotaLabel = document.getElementById('goal-quota-label');
        if (quotaLabel) quotaLabel.innerText = `Daily quota: ${this.dailyTarget} units`;

        this.calculateAndRenderMetrics();
        this.renderGoalChart();
        this.renderTrendChart();
        this.renderRecentTable();
    },

    getAuditorCases() {
        const cases = this.allCases;
        const hasAuditorField = cases.some(c => 'auditor' in c);
        if (!hasAuditorField) return cases;
        return cases.filter(c => c.auditor === this.currentAuditor);
    },

    getDateStr(c) {
        return c.timestamp ? c.timestamp.substring(0, 10) : null;
    },

    getCaseDuration(c) {
        if (!c.images || c.images.length === 0) return null;
        const times = c.images.map(img => img.time || 0);
        return Math.max(...times);
    },

    calculateAndRenderMetrics() {
        const cases = this.auditorCases;
        const processed = cases.filter(c => c.status !== 'pending');
        const verified = cases.filter(c => c.status === 'verified');
        const rejected = cases.filter(c => c.status === 'rejected');

        const dateStrs = cases.map(c => this.getDateStr(c)).filter(Boolean).sort();
        const latestDateStr = dateStrs[dateStrs.length - 1] || null;
        const latestMonth = latestDateStr ? latestDateStr.substring(0, 7) : null;
        const casesThisMonth = latestMonth
            ? cases.filter(c => (this.getDateStr(c) || '').startsWith(latestMonth))
            : cases;

        const totalCasesEl = document.getElementById('total-cases-display');
        if (totalCasesEl) totalCasesEl.innerText = casesThisMonth.length.toLocaleString();

        const accuracy = processed.length > 0 ? (verified.length / processed.length) * 100 : 0;
        const accuracyEl = document.getElementById('accuracy-display');
        if (accuracyEl) accuracyEl.innerText = `${accuracy.toFixed(1)}%`;

        const todayStr = latestDateStr;
        const todayCases = todayStr ? cases.filter(c => this.getDateStr(c) === todayStr) : [];
        const completedToday = todayCases.filter(c => c.status !== 'pending').length;
        const remainingToday = Math.max(0, this.dailyTarget - completedToday);
        const percent = Math.min(100, Math.round((completedToday / this.dailyTarget) * 100));

        const goalPercentEl = document.getElementById('goal-percent');
        const goalCompletedEl = document.getElementById('goal-completed');
        const goalRemainingEl = document.getElementById('goal-remaining');
        if (goalPercentEl) goalPercentEl.innerText = `${percent}%`;
        if (goalCompletedEl) goalCompletedEl.innerText = completedToday;
        if (goalRemainingEl) goalRemainingEl.innerText = remainingToday;

        this.metricData = { completed: completedToday, remaining: remainingToday };

        this.renderTypeDistribution(processed);
        this.renderConfidenceDistribution(processed);
        this.renderProcessingTimeCard(cases, latestDateStr);

        const anomalyRate = processed.length > 0 ? (rejected.length / processed.length) * 100 : 0;
        const anomalyEl = document.getElementById('anomaly-rate-display');
        if (anomalyEl) anomalyEl.innerText = `${anomalyRate.toFixed(1)}%`;
    },

    renderProcessingTimeCard(cases, latestDateStr) {
        const avgTimeEl = document.getElementById('avg-processing-time');
        const compareEl = document.getElementById('processing-time-compare');

        const withDuration = cases.filter(c => c.status !== 'pending' && this.getCaseDuration(c) !== null);

        if (withDuration.length === 0) {
            if (avgTimeEl) avgTimeEl.innerText = '--';
            if (compareEl) compareEl.innerText = '尚無足夠資料';
            return;
        }

        const avgAll = withDuration.reduce((sum, c) => sum + this.getCaseDuration(c), 0) / withDuration.length;
        if (avgTimeEl) avgTimeEl.innerText = avgAll.toFixed(1);

        if (!compareEl || !latestDateStr) return;

        const latestDate = new Date(latestDateStr);
        const thisWeekStart = new Date(latestDate); thisWeekStart.setDate(latestDate.getDate() - 6);
        const lastWeekEnd = new Date(thisWeekStart); lastWeekEnd.setDate(thisWeekStart.getDate() - 1);
        const lastWeekStart = new Date(lastWeekEnd); lastWeekStart.setDate(lastWeekEnd.getDate() - 6);

        const inRange = (dateStr, start, end) => {
            const d = new Date(dateStr);
            return d >= start && d <= end;
        };

        const thisWeekCases = withDuration.filter(c => inRange(this.getDateStr(c), thisWeekStart, latestDate));
        const lastWeekCases = withDuration.filter(c => inRange(this.getDateStr(c), lastWeekStart, lastWeekEnd));

        if (thisWeekCases.length === 0 || lastWeekCases.length === 0) {
            compareEl.innerHTML = `<i class="fas fa-minus mr-1.5"></i> 上週資料不足以比較`;
            return;
        }

        const thisWeekAvg = thisWeekCases.reduce((sum, c) => sum + this.getCaseDuration(c), 0) / thisWeekCases.length;
        const lastWeekAvg = lastWeekCases.reduce((sum, c) => sum + this.getCaseDuration(c), 0) / lastWeekCases.length;
        const diff = lastWeekAvg - thisWeekAvg;

        if (diff > 0.05) {
            compareEl.innerHTML = `<i class="fas fa-arrow-trend-down mr-1.5"></i> 比上週快了 ${diff.toFixed(1)} 秒`;
        } else if (diff < -0.05) {
            compareEl.innerHTML = `<i class="fas fa-arrow-trend-up mr-1.5"></i> 比上週慢了 ${Math.abs(diff).toFixed(1)} 秒`;
        } else {
            compareEl.innerHTML = `<i class="fas fa-minus mr-1.5"></i> 與上週持平`;
        }
    },

    renderTypeDistribution(processedCases) {
        const container = document.getElementById('type-distribution-container');
        if (!container) return;

        if (!processedCases || processedCases.length === 0) {
            container.innerHTML = `<div class="text-xs text-gray-400 font-bold">尚無分佈資料</div>`;
            return;
        }

        const typeCounts = {};
        processedCases.forEach(c => {
            const t = c.type || '其他';
            typeCounts[t] = (typeCounts[t] || 0) + 1;
        });

        const total = processedCases.length;
        const styles = [
            { textClass: 'text-blue-600', barBg: 'bg-blue-50', barFill: 'bg-blue-600' },
            { textClass: 'text-gray-900', barBg: 'bg-gray-100', barFill: 'bg-gray-900' },
            { textClass: 'text-orange-500', barBg: 'bg-orange-50', barFill: 'bg-orange-400' },
            { textClass: 'text-gray-500', barBg: 'bg-gray-100', barFill: 'bg-gray-300' }
        ];

        const sortedEntries = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]).slice(0, 4);

        let index = 0;
        let html = '';
        for (const [typeName, count] of sortedEntries) {
            const percentage = Math.round((count / total) * 100);
            const style = styles[index % styles.length];

            html += `
                <div class="space-y-1.5">
                    <div class="flex justify-between text-xs">
                        <span class="font-bold text-gray-700">${typeName}</span>
                        <span class="font-extrabold ${style.textClass}">${percentage}%</span>
                    </div>
                    <div class="w-full ${style.barBg} rounded-full h-2">
                        <div class="${style.barFill} h-2 rounded-full" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
            index++;
        }
        container.innerHTML = html;
    },

    renderConfidenceDistribution(processedCases) {
        const container = document.getElementById('confidence-distribution-container');
        if (!container) return;

        if (!processedCases || processedCases.length === 0) {
            container.innerHTML = `<div class="text-xs text-gray-400 font-bold">尚無分級資料</div>`;
            return;
        }

        let high = 0, mid = 0, low = 0;
        processedCases.forEach(c => {
            const conf = c.confidence || 0;
            if (conf >= 90) high++;
            else if (conf >= 80) mid++;
            else low++;
        });

        const total = processedCases.length;

        const data = [
            { label: '確信違規 (≥90%)', count: high, textClass: 'text-red-600', barBg: 'bg-red-50', barFill: 'bg-red-500' },
            { label: '疑似違規 (80%-89%)', count: mid, textClass: 'text-yellow-600', barBg: 'bg-yellow-50', barFill: 'bg-yellow-500' },
            { label: '邊界案例 (<80%)', count: low, textClass: 'text-green-600', barBg: 'bg-green-50', barFill: 'bg-green-500' }
        ];

        let html = '';
        data.forEach(item => {
            const percentage = total > 0 ? Math.round((item.count / total) * 100) : 0;
            html += `
                <div class="space-y-1.5 mt-[2px]">
                    <div class="flex justify-between text-xs">
                        <span class="font-bold text-gray-700">${item.label}</span>
                        <span class="font-extrabold ${item.textClass}">${percentage}%</span>
                    </div>
                    <div class="w-full ${item.barBg} rounded-full h-2">
                        <div class="${item.barFill} h-2 rounded-full" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    },

    renderRecentTable() {
        const tbody = document.getElementById('recent-audit-tbody');
        if (!tbody) return;

        const recentCases = [...this.auditorCases]
            .filter(c => c.status !== 'pending')
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .slice(0, 5);

        if (recentCases.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" class="p-6 text-center text-gray-400 font-bold">目前尚無${this.currentAuditor}的審核紀錄</td></tr>`;
            return;
        }

        tbody.innerHTML = recentCases.map(c => {
            const isVerified = c.status === 'verified';
            const statusBadge = isVerified
                ? `<span class="text-green-600 font-bold text-xs tracking-wider">VERIFIED</span>`
                : `<span class="text-red-500 font-bold text-xs tracking-wider">REJECTED</span>`;

            const timeStr = c.timestamp ? c.timestamp.replace('T', ' ').substring(0, 16) : '--';
            const duration = this.getCaseDuration(c);
            const durationStr = duration !== null ? `${duration}s` : '--';

            return `
                <tr class="hover:bg-gray-50/80 transition">
                    <td class="p-4 pl-6 font-extrabold text-blue-600">#${c.id}</td>
                    <td class="p-4 font-bold text-gray-900">${c.type || '未分類'}</td>
                    <td class="p-4 text-xs font-mono text-gray-500">${timeStr}</td>
                    <td class="p-4 text-xs font-mono text-gray-500">${durationStr}</td>
                    <td class="p-4 pr-6 text-right">${statusBadge}</td>
                </tr>
            `;
        }).join('');
    },

    renderGoalChart() {
        const ctx = document.getElementById('goalDoughnutChart');
        if (!ctx) return;
        if (this.charts.goal) this.charts.goal.destroy();

        const completed = this.metricData?.completed || 0;
        const remaining = this.metricData?.remaining ?? this.dailyTarget;

        this.charts.goal = new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['已完成', '剩餘'],
                datasets: [{
                    data: [completed, remaining],
                    backgroundColor: ['#3662D8', '#EFF6FF'],
                    borderWidth: 0,
                    hoverOffset: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
                plugins: { legend: { display: false }, tooltip: { enabled: false } }
            }
        });
    },

    renderTrendChart() {
        const ctx = document.getElementById('performanceTrendChart');
        if (!ctx) return;
        if (this.charts.trend) this.charts.trend.destroy();

        const weekdayMap = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

        const personalDates = [...new Set(this.auditorCases.map(c => this.getDateStr(c)).filter(Boolean))].sort();
        const last7Dates = personalDates.slice(-7);

        const labels = last7Dates.map(d => weekdayMap[new Date(d).getDay()]);
        const personalData = last7Dates.map(d =>
            this.auditorCases.filter(c => this.getDateStr(c) === d && c.status !== 'pending').length
        );

        const hasAuditorField = this.allCases.some(c => 'auditor' in c);
        let teamData = null;
        if (hasAuditorField) {
            const auditors = [...new Set(this.allCases.map(c => c.auditor).filter(Boolean))];
            teamData = last7Dates.map(d => {
                const dayCases = this.allCases.filter(c => this.getDateStr(c) === d && c.status !== 'pending');
                return auditors.length > 0 ? dayCases.length / auditors.length : 0;
            });
        }

        const peakIndex = personalData.length > 0
            ? personalData.indexOf(Math.max(...personalData))
            : -1;
        const peakMarkerData = personalData.map((v, i) => (i === peakIndex ? v : null));

        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(229, 231, 235, 1)');
        gradient.addColorStop(1, 'rgba(249, 250, 251, 0.2)');

        const datasets = [
            {
                label: '個人產能',
                data: personalData,
                borderColor: 'transparent',
                backgroundColor: gradient,
                fill: true,
                tension: 0.4,
                pointRadius: 0
            },
            {
                label: '標記點',
                data: peakMarkerData,
                borderColor: '#111827',
                backgroundColor: '#111827',
                borderWidth: 2,
                pointRadius: 4,
                showLine: false
            }
        ];

        if (teamData) {
            datasets.push({
                label: '團隊平均',
                data: teamData,
                borderColor: '#9CA3AF',
                backgroundColor: 'transparent',
                borderDash: [4, 4],
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                fill: false
            });
        }

        const maxVal = Math.max(1, ...personalData, ...(teamData || [0]));

        this.charts.trend = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: { labels, datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { color: '#9CA3AF', font: { size: 10, weight: 'bold' } } },
                    y: { display: false, beginAtZero: true, max: maxVal * 1.2 }
                }
            }
        });
    }
};

window.app = {
    toggleSidebar: () => DashboardApp.toggleSidebar()
};

document.addEventListener('DOMContentLoaded', () => {
    DashboardApp.init();
});