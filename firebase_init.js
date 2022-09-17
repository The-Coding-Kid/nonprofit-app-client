// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALjnrXkEFLUo7VMK9jv71o6QOcQiIFXjo",
  authDomain: "nonprofit-app-4f8fa.firebaseapp.com",
  projectId: "nonprofit-app-4f8fa",
  storageBucket: "nonprofit-app-4f8fa.appspot.com",
  messagingSenderId: "128080348271",
  appId: "1:128080348271:web:02d597ab6792ff7b61399a",
  measurementId: "G-XPDD1B93DN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
