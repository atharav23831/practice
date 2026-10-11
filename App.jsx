import React from 'react';
import './App.css';

function App() {
  const handleGetStarted = () => {
    window.location.href = '#products';
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your one-stop destination for
          beautiful indoor and outdoor plants. Bring nature into your
          home and make your surroundings greener and healthier.
        </p>

        <button
          className="get-started-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
