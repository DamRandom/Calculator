import React, { useState } from 'react';
import SimpleCalculator from './SimpleCalculator';
import ScientificCalculator from './ScientificCalculator';
import '../styles/CalculatorCarousel.css';

const CalculatorCarousel = () => {
  const [activeCalculator, setActiveCalculator] = useState('simple');

  const handleClick = () => {
    setActiveCalculator((prev) => (prev === 'simple' ? 'scientific' : 'simple'));
  };

  return (
    <div className="calculator-carousel">
      <div
        className={`calculator ${activeCalculator === 'simple' ? 'active' : 'inactive'}`}
        onClick={activeCalculator === 'simple' ? null : handleClick}
      >
        <SimpleCalculator isActive={activeCalculator === 'simple'} />
      </div>
      <div
        className={`calculator ${activeCalculator === 'scientific' ? 'active' : 'inactive'}`}
        onClick={activeCalculator === 'scientific' ? null : handleClick}
      >
        <ScientificCalculator isActive={activeCalculator === 'scientific'} />
      </div>
    </div>
  );
};

export default CalculatorCarousel;
