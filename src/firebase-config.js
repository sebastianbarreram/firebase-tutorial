import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqB5_qIWYYA2FG_9J2_N5bX1XzmDcpqOo",
  authDomain: "fir-tutorial-2f375.firebaseapp.com",
  projectId: "fir-tutorial-2f375",
  storageBucket: "fir-tutorial-2f375.appspot.com",
  messagingSenderId: "442742541740",
  appId: "1:442742541740:web:3e0ffb1a86bbb3eab0fe09",
  measurementId: "G-PD5J7LTC2E",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
