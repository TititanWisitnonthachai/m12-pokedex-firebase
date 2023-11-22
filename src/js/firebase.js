// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDyqkYpHvihUIRensZvdd5DyKQrai7ahE",
  authDomain: "iccs340-10fa8.firebaseapp.com",
  projectId: "iccs340-10fa8",
  storageBucket: "iccs340-10fa8.appspot.com",
  messagingSenderId: "872600230745",
  appId: "1:872600230745:web:04c2ad421b664f756f8a48"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}