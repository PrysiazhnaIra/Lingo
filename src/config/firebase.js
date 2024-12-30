// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAFyTsBQxlBSKnxdCDVbs3Lylt8hflvZ8",
  authDomain: "lingo-70ed2.firebaseapp.com",
  projectId: "lingo-70ed2",
  storageBucket: "lingo-70ed2.firebasestorage.app",
  messagingSenderId: "180113599650",
  appId: "1:180113599650:web:809f2421e1a391359d7bfb",
  measurementId: "G-P1G189ZHRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
