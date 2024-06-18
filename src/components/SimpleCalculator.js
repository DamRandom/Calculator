import React, { useState } from 'react';
import Display from './Display';
import SimpleKeypad from './SimpleKeypad';
import { isValidInput, calculateResult } from '../utils/Validations';
import '../styles/Calculator.css';

const SimpleCalculator = () => {
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
    <div className="simple-calculator-container">
      <div className="outer-card simple">
        <Display input={input} result={result} />
        <SimpleKeypad handleClick={handleClick} handleClear={handleClear} handleCalculate={handleCalculate} />
      </div>
    </div>
  );
};

export default SimpleCalculator;
