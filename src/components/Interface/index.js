import React from 'react';
import './style.css';
import { partNameLookup } from './partNameLookup';

function Interface({ part, shoe }) {
  return (
    <div className="interface">
      <p>{partNameLookup(part)}</p>
      <p>{shoe}</p>
    </div>
  );
}

export default Interface;
