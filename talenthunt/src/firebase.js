// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPW7T4bl3SmFfsm5hia3Klp-1L0KCUEuA",
  authDomain: "talenthunt-e4d23.firebaseapp.com",
  projectId: "talenthunt-e4d23",
  storageBucket: "talenthunt-e4d23.appspot.com",
  messagingSenderId: "978558218454",
  appId: "1:978558218454:web:b6517622538e092e41d977",
  measurementId: "G-D1D9F8QY32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
