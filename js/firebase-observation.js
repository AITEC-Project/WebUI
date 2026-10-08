/**
 * 觀測統計專用的 Firebase 連線（Firebase 專案 observation-e158b）。
 *
 * 刻意**不叫** firebase-config.js：那個檔名被 index.html、login.html 與
 * history.js 引用，它們要的是舉發案件的專案（stage2_qwen_vlm、YOLO）。用同一個
 * 檔名會讓那三頁連到觀測專案，查不到集合而顯示成空清單——那是靜默的錯，比現在
 * 「檔案不存在」的明確錯誤更難發現。
 *
 * 連線設定（含 apiKey）放在 firebase-observation-config.js，比照 firebase-config.js
 * 列入 .gitignore、不進版控；新環境從 firebase-observation-config.example.js 複製
 * 一份填入。apiKey 仍會出現在網頁原始碼裡，真正的存取邊界在 firestore.rules。
 *
 * 只匯出讀取需要的東西。observation_* 三個 collection 由 Python 端的 Admin SDK
 * 寫入，前端不該有任何寫入路徑，因此不匯出 setDoc / updateDoc。
 *
 * 讀取用 onSnapshot 監聽，資料一更新頁面就重繪，不必重新整理（SPEC_J §1、
 * §6.1 原本的規劃；先前實作曾改用一次性的 getDocs，SPEC_N M10 改回）。
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
    getFirestore,
    collection,
    onSnapshot,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { firebaseConfig } from './firebase-observation-config.js';

// 具名 app：日後同一頁若要同時連舉發專案，預設 app 會互相覆蓋。
const observationApp = initializeApp(firebaseConfig, 'observation');
const db = getFirestore(observationApp);

export { db, collection, onSnapshot };
