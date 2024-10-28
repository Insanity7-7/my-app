// src/pages/Signup.js
import React from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebaseConfig";

export default function Signup() {
  return (
    <div className="wrapper signUp">
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Submit</button>
          <div className="google-auth">
            <button type="button" className="google-signin-btn" onClick={signInWithGoogle}>
              Sign up with Google
            </button>
          </div>
        </form>
        <p>
          Have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
