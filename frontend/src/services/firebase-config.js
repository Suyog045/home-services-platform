// src/services/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8XkytkkChebEDUZ9WymwjZskTpqUZ5vg",
  authDomain: "homeservicesapp-c46b1.firebaseapp.com",
  projectId: "homeservicesapp-c46b1",
  storageBucket: "homeservicesapp-c46b1.appspot.com",
  messagingSenderId: "575584484320",
  appId: "1:575584484320:web:f787445522a17f2d6ec985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase Auth instance
const auth = getAuth(app);
export { auth };
