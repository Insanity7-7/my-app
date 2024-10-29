// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PerformanceChart from './PerformanceChart';
import './Dashboard.css';

const Dashboard = () => {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const authToken = localStorage.getItem('authToken');
    //             const response = await axios.get('http://localhost:5000/api/protected', {
    //                 headers: { Authorization: `Bearer ${authToken}` },
    //             });
    //             setData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching protected data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
