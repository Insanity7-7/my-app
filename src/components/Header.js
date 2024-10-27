// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <header className="header">
            <h1>Trader Evaluation App</h1>
            <nav className="header-nav">
                <Link to="/">Home</Link>
                <li><Link to="/challenge">Challenge</Link></li>
                <Link to="/dashboard">Dashboard</Link>
                {isLoggedIn ? (
                    <button className="logout-button" onClick={onLogout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
