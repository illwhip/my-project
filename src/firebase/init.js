// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv2fJ80b0pThbGQM9xItZtNHFO_h3VcNU",
  authDomain: "my-project-d8951.firebaseapp.com",
  projectId: "my-project-d8951",
  storageBucket: "my-project-d8951.firebasestorage.app",
  messagingSenderId: "167555318274",
  appId: "1:167555318274:web:6f6c33472dbe0323729d1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
