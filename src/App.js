// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/SignUp";
import Challenge from './pages/Challenge';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/challenge" element={<Challenge />} /> 
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
