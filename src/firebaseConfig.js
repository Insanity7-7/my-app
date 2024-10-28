// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpmq6wEeGIiLCnOmAzi3lTdUVTR_tbflE",
    authDomain: "prob-fund-trading.firebaseapp.com",
    projectId: "prob-fund-trading",
    storageBucket: "prob-fund-trading.appspot.com",
    messagingSenderId: "221489361470",
    appId: "1:221489361470:web:71cde81373c0866266d76f"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // Handle the signed-in user info here if needed
    console.log("User info: ", result.user);
  } catch (error) {
    console.error("Error during Google sign-in:", error);
  }
};

export { auth, signInWithGoogle };
