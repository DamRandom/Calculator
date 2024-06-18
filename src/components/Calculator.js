import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { isValidInput, calculateResult } from '../utils/Validations';
import '../styles/Calculator.css';

const Calculator = () => {
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
    <div className="calculator-container">
      <div className="outer-card">
        <Display input={input} result={result} />
        <Keypad handleClick={handleClick} handleClear={handleClear} />
        <button className="button equal" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
