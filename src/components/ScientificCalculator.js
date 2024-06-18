import React, { useState } from 'react';
import Display from './Display';
import ScientificKeypad from './ScientificKeypad';
import { isValidInput, calculateResult } from '../utils/Validations';
import '../styles/Calculator.css';

const ScientificCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    if (isValidInput(input)) {
      setResult(calculateResult(input));
    } else {
      setResult('Error');
    }
  };

  return (
    <div className="scientific-calculator-container">
      <div className="outer-card scientific">
        <Display input={input} result={result} />
        <ScientificKeypad handleClick={handleClick} handleClear={handleClear} handleCalculate={handleCalculate} />
      </div>
    </div>
  );
};

export default ScientificCalculator;
