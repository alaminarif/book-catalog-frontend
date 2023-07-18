import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoIDteDUbq35dYO3wYpBxlMBROFzsWCIA",
  authDomain: "book-catalog-d80f1.firebaseapp.com",
  projectId: "book-catalog-d80f1",
  storageBucket: "book-catalog-d80f1.appspot.com",
  messagingSenderId: "7789540091",
  appId: "1:7789540091:web:7fb46fdb06a0ff0140b65e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// VITE_apiKey=AIzaSyDGU2aChn212ppuYC43224oECfgRYazMMA
// VITE_authDomain=book-catalog-d80f1.firebaseapp.com
// VITE_projectId=book-catalog-d80f1
// VITE_storageBucket=book-catalog-d80f1.appspot.com
// VITE_messagingSenderId=7789540091
// VITE_appId = 1:7789540091:web:7fb46fdb06a0ff0140b65e
