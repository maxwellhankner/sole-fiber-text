import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-container">
      <p className="basic-text">Landing</p>
      <Link to="/designer">
        <button className="link-button">Designer</button>
      </Link>
    </div>
  );
}

export default Landing;
