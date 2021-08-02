import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [numberCalculator, setNumberCalculator] = useState('0');
  const [previousNumberCalculator, setPreviousNumberCalculator] = useState('0');
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumberCalculator('0');
    setPreviousNumberCalculator('0');
    console.log(previousNumberCalculator);
  };

  const buildNumber = (textNumber: string) => {
    if (numberCalculator.includes('.') && textNumber === '.') {
      return;
    }
    if (numberCalculator.startsWith('0') || numberCalculator.startsWith('-0')) {
      if (textNumber === '.') {
        setNumberCalculator(numberCalculator + textNumber);
      } else if (textNumber === '0' && numberCalculator.includes('.')) {
        setNumberCalculator(numberCalculator + textNumber);
      } else if (textNumber !== '0' && !numberCalculator.includes('.')) {
        setNumberCalculator(textNumber);
      } else if (textNumber === '0' && !numberCalculator.includes('.')) {
        setNumberCalculator(numberCalculator);
      }
    } else {
      setNumberCalculator(numberCalculator + textNumber);
    }
  };

  const positiveNegative = () => {
    numberCalculator.includes('-')
      ? setNumberCalculator(numberCalculator.replace('-', ''))
      : setNumberCalculator('-' + numberCalculator);
  };

  const deleteLastDigit = () => {
    setNumberCalculator(
      numberCalculator.length === 1 ||
        (numberCalculator.length === 2 && numberCalculator.includes('-'))
        ? '0'
        : numberCalculator.slice(0, numberCalculator.length - 1),
    );
  };

  const changeNumberForThePrevious = () => {
    numberCalculator.endsWith('.')
      ? setPreviousNumberCalculator(numberCalculator.slice(0, -1))
      : setPreviousNumberCalculator(numberCalculator);
    setNumberCalculator('0');
  };

  const divide = () => {
    changeNumberForThePrevious();
    lastOperation.current = Operators.divide;
  };

  const multiply = () => {
    changeNumberForThePrevious();
    lastOperation.current = Operators.multiply;
  };

  const subtract = () => {
    changeNumberForThePrevious();
    lastOperation.current = Operators.subtract;
  };

  const add = () => {
    changeNumberForThePrevious();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(numberCalculator);
    const num2 = Number(previousNumberCalculator);

    switch (lastOperation.current) {
      case Operators.add:
        setNumberCalculator(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumberCalculator(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumberCalculator(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumberCalculator(`${num2 / num1}`);
        break;
    }
    setPreviousNumberCalculator('0');
  };

  return {
    numberCalculator,
    previousNumberCalculator,
    calculate,
    buildNumber,
    positiveNegative,
    deleteLastDigit,
    clean,
    add,
    subtract,
    multiply,
    divide,
  };
};
