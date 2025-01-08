import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, get } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyCAFyTsBQxlBSKnxdCDVbs3Lylt8hflvZ8",
  authDomain: "lingo-70ed2.firebaseapp.com",
  projectId: "lingo-70ed2",
  storageBucket: "lingo-70ed2.firebasestorage.app",
  messagingSenderId: "180113599650",
  appId: "1:180113599650:web:809f2421e1a391359d7bfb",
  measurementId: "G-P1G189ZHRV",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const dataBase = getDatabase();

export { collection, addDoc };
export { ref, get };
