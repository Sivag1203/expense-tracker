// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYrgQ6RiEwlsOPCgbUBcMrJxj-YJgWpAU",
  authDomain: "expense-tracker-cd6c0.firebaseapp.com",
  projectId: "expense-tracker-cd6c0",
  storageBucket: "expense-tracker-cd6c0.appspot.com",
  messagingSenderId: "687202997343",
  appId: "1:687202997343:web:49ddda0c215c0310cff7ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// firebase login
// firebase init
// firebase deploy