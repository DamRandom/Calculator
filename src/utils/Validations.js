// src/utils/Validations.js

import { evaluate } from 'mathjs';

export const isValidInput = (input) => {
  // Validación básica, puedes mejorarla según las necesidades
  try {
    evaluate(input);
    return true;
  } catch {
    return false;
  }
};

export const calculateResult = (input) => {
  try {
    return evaluate(input).toString();
  } catch {
    return 'Error';
  }
};
