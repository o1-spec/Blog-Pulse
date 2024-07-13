// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACWnAeVFGLHT4_ZqQOSWQUvPxQXSOrTco",
  authDomain: "blog-pulse-abb7a.firebaseapp.com",
  projectId: "blog-pulse-abb7a",
  storageBucket: "blog-pulse-abb7a.appspot.com",
  messagingSenderId: "434791373603",
  appId: "1:434791373603:web:2c97946dd1ba2892794a96",
  measurementId: "G-DJV18WZ4M3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
