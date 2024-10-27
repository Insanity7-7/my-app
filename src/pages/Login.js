// src/pages/Login.js
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const preventRefresh = (e) => {
  e.preventDefault();
};

export default function Login() {
  return (
    <div className="wrapper signIn">
      <div className="form">
        <div className="heading">LOGIN</div>
        <form>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" onClick={preventRefresh}>
            Submit
          </button>
          <div className="forgot-password">
            <button type="button" className="forgot-password-btn">
              Forgot Password?
            </button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
