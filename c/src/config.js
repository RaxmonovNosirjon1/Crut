// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz-C_F1aKwm0rJ-M7VTLzU_zuipkTTPRk",
  authDomain: "disney-clone-2d175.firebaseapp.com",
  databaseURL: "https://disney-clone-2d175-default-rtdb.firebaseio.com",
  projectId: "disney-clone-2d175",
  storageBucket: "disney-clone-2d175.appspot.com",
  messagingSenderId: "236789393820",
  appId: "1:236789393820:web:71b5b0881940c4a5484059",
  measurementId: "G-SS5HFWHX5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}