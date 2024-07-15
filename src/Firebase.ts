import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQfGHE8p89DLI9Ckbgar1heUkx76iFxvY",
  authDomain: "kbstudio-a0908.firebaseapp.com",
  projectId: "kbstudio-a0908",
  storageBucket: "kbstudio-a0908.appspot.com",
  messagingSenderId: "223181112085",
  appId: "1:223181112085:web:a8d2a89e453430bd3adf1c",
  measurementId: "G-ZNWWR7YYT5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider };
export const db = getFirestore(app);
