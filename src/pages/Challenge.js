// src/pages/Challenge.js
import React from 'react';
import TradingViewWidget from '../components/TradingViewWidget';

const Challenge = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Trading Challenge</h1>
      <p>Observe live charts and test your trading skills!</p>
      <div style={{ height: '500px', width: '100%' }}>
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default Challenge;
