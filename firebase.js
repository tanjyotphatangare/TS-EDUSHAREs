// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAspPUAm_k7w70t5biXuWnP-mUbKRhuHJA",
    authDomain: "ts-edushare-a045d.firebaseapp.com",
    projectId: "ts-edushare-a045d",
    storageBucket: "ts-edushare-a045d.firebasestorage.app",
    messagingSenderId: "796897514155",
    appId: "1:796897514155:web:40699804f798738d2fddee"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);