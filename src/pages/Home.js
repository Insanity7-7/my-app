import React from "react";
import "./Home.css";

 const Home = () => {
  return (
    <div className="homepage">
      <div className="main-section">
        <div className="center-banner">
          <h2>Get Funded Today</h2>
          <p>Trade with our capital and keep your profits</p>
          <button>Join Started</button>
        </div>

        <div className="features-section">
          <div className="feature">
            <h3>Trade</h3>
            <p>With our capital</p>
          </div>
          <div className="feature">
            <h3>Profit</h3>
            <p>Start your journey</p>
          </div>
          <div className="feature">
            <h3>Succeed</h3>
            <p>Grow your profits</p>
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-card">
            <h4>Trade & Profit</h4>
            <p>Get Funded Today</p>
          </div>
          <div className="chart-card">
            <h4>Grow Your Profits</h4>
            <p>Trade with Confidence</p>
          </div>
          <div className="chart-card">
            <h4>Get Partnered</h4>
            <p>Success with Capital</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;