import React from 'react';
import '../styles/Display.css';

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div className="operation">{input}</div>
      <div className="result">{result || '0'}</div>
    </div>
  );
};

export default Display;
