import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBydwQL6T7cV321Zs73a-Fze2jpvczRECk",
  authDomain: "movie-bot-xafj.firebaseapp.com",
  projectId: "movie-bot-xafj",
  storageBucket: "movie-bot-xafj.appspot.com",
  messagingSenderId: "799294821687",
  appId: "1:799294821687:web:dc9ce3173badecf03576b2",
  measurementId: "G-CKBC47MZM0",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
