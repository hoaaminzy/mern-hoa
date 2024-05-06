// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-all.firebaseapp.com",
  projectId: "mern-all",
  storageBucket: "mern-all.appspot.com",
  messagingSenderId: "1022034360171",
  appId: "1:1022034360171:web:e5fa5be66819ef3e1b7e2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);