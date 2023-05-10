import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGj4udkJj0nYIKreQBEpNSuhlOsU_DsGc",
    authDomain: "chat-6d740.firebaseapp.com",
    projectId: "chat-6d740",
    storageBucket: "chat-6d740.appspot.com",
    messagingSenderId: "942781444385",
    appId: "1:942781444385:web:154f2a27d0cfa15fae0e60"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();