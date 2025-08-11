// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg4VVe3Dxxp_FngFMAO9eI4NMerernF40",
  authDomain: "cineai-7e55a.firebaseapp.com",
  projectId: "cineai-7e55a",
  storageBucket: "cineai-7e55a.firebasestorage.app",
  messagingSenderId: "471040077542",
  appId: "1:471040077542:web:7e6cec0251f651fda75527",
  measurementId: "G-CH1GDF4V9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();