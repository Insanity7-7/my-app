// src/components/PerformanceChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './PerformanceChart.css';

// Register scales and elements with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceChart = ({ data }) => {
    // Define default chart data
    const defaultData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Performance",
                data: [10, 20, 40, 35, 55, 70],
                fill: false,
                backgroundColor: "#36a2eb",
                borderColor: "#36a2eb",
                tension: 0.4,
            }
        ]
    };

    return (
        <div className="performance-chart">
            <Line data={data || defaultData} />
        </div>
    );
};

export default PerformanceChart;
