// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0NiObkNDXta5wlwZlof4Hs5iVGtmTNqo",
  authDomain: "seeng-116c1.firebaseapp.com",
  projectId: "seeng-116c1",
  storageBucket: "seeng-116c1.appspot.com",
  messagingSenderId: "747341111341",
  appId: "1:747341111341:web:46601536380be19996d8a4",
  measurementId: "G-XVVMP33Q9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");