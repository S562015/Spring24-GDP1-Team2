import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA46jmfsDKj4SQy-mAvPQ4rwtKpb_Fnktk",
  authDomain: "sandbox-585ad.firebaseapp.com",
  projectId: "sandbox-585ad",
  storageBucket: "sandbox-585ad.appspot.com",
  messagingSenderId: "674101147358",
  appId: "1:674101147358:web:f63b6a37cbbbe640d0f44f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
