import { initializeApp } from "firebase/app";
// Add other SDKs here

const firebaseConfig = {
  apiKey: "AIzaSyDmIzunzi3t3Nt5AckLleMyqQiXqZWs4YE",
  authDomain: "issues-of-interpretation.firebaseapp.com",
  projectId: "issues-of-interpretation",
  storageBucket: "issues-of-interpretation.appspot.com",
  messagingSenderId: "564884940814",
  appId: "1:564884940814:web:d9698d73fa937babfcb45f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;