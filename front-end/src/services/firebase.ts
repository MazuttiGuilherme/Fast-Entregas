import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDpbRhYclcqgADfZ7jBIxZ5FpY76hO1xuo",
  authDomain: "fast-entregas-d5422.firebaseapp.com",
  projectId: "fast-entregas-d5422",
  storageBucket: "fast-entregas-d5422.appspot.com",
  messagingSenderId: "1075225750254",
  appId: "1:1075225750254:web:00a1377f47707e598b61ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)


