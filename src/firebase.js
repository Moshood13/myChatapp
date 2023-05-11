import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1wFYQtDmucrNVkBpY-Mz_HBS_vfAFPXM",
    authDomain: "chat-5693b.firebaseapp.com",
    projectId: "chat-5693b",
    storageBucket: "chat-5693b.appspot.com",
    messagingSenderId: "733869669196",
    appId: "1:733869669196:web:733d4d5f6176cb197cede9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();