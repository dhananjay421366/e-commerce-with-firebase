// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA4z-3hnYp9t4nfvzTYL3bWpbL6rxzDwqU",
  authDomain: "eshop2-7fc94.firebaseapp.com",
  projectId: "eshop2-7fc94",
  storageBucket: "eshop2-7fc94.appspot.com",
  messagingSenderId: "856280210745",
  appId: "1:856280210745:web:de4db3d666214c03af9ce8",
  measurementId: "G-JQ1CW7N3TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
