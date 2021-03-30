import React from 'react';
import './style.css';
import { partNameLookup } from './partNameLookup';
import Toggle from '../Toggle';
import { Link } from 'react-router-dom';

function Interface({
  part,
  currentShoe,
  setCurrentShoe,
  visibility,
  setVisibility,
}) {
  return (
    <div className="interface">
      <Toggle
        currentShoe={currentShoe}
        setCurrentShoe={setCurrentShoe}
        visibility={visibility}
        setVisibility={setVisibility}
      />
      <p className="basic-text">{partNameLookup(part)}</p>
      <p className="basic-text">{currentShoe}</p>
      <Link to="/">
        <button className="link-button">Exit</button>
      </Link>
    </div>
  );
}

export default Interface;
