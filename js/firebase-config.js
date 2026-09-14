// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// 🟢 新增引入 Auth 模組
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC351iJ2MLddhE-cNEA1Nq9loljzF6XQ8Q",
    authDomain: "traffic-1020c.firebaseapp.com",
    projectId: "traffic-1020c",
    storageBucket: "traffic-1020c.firebasestorage.app",
    messagingSenderId: "944166426838",
    appId: "1:944166426838:web:b6cc649cd2ec7c30045177",
    measurementId: "G-PZJ204F377"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 明確指定連接名為 "(default)" 的資料庫
export const db = getFirestore(app, "default");

// 🟢 初始化 Auth 服務
export const auth = getAuth(app);

// 統一匯出所有需要的工具
export { collection, getDocs, addDoc, updateDoc, doc, signInWithEmailAndPassword, onAuthStateChanged, signOut };