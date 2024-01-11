import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "chatgpt-clone-40afb.firebaseapp.com",
  projectId: "chatgpt-clone-40afb",
  storageBucket: "chatgpt-clone-40afb.appspot.com",
  messagingSenderId: "418944394994",
  appId: "1:418944394994:web:f0fa0979350d4ae0df526b"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }