// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PerformanceChart from './PerformanceChart';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = localStorage.getItem('authToken');
                const response = await axios.get('http://localhost:5000/api/protected', {
                    headers: { Authorization: `Bearer ${authToken}` },
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching protected data:', error);
            }
        };

        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        alert('Logged out successfully');
        // Optionally, redirect to the login page after logout
        window.location.href = '/login';
    };

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <button onClick={handleLogout} className="logout-button">Logout</button>
            {data && <PerformanceChart data={data} />}
            {/* Render other dashboard components here */}
        </div>
    );
};

export default Dashboard;
