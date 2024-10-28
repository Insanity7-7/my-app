// src/components/Header.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./Header.css";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    // Check if user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Set to true if user is signed in
    });
    return unsubscribe; // Cleanup on unmount
  }, [auth]);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <header className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/challenge">Challenge</Link>
        <Link to="/dashboard">Dashboard</Link>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
