// components/Calculator.js
import React, { useState, useEffect } from 'react';
import styles from './calculator.module.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const isValidExpression = /^[0-9+\-*/.()\s]+$/.test(input);
        if (isValidExpression) {
          setResult(eval(input).toString());
        } else {
          setResult('Erro: Expressão inválida');
        }
      } catch (error) {
        setResult('Erro');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'CE') {
      setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

   const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    handleButtonClick('=');
  };

  const handleKeyDown = (event) => {
    const key = event.key;

    if (key === 'Backspace') {
      event.preventDefault(); // Prevent browser navigation on Backspace
      handleButtonClick('CE');
    } else if (key === 'Enter') {
      event.preventDefault(); // Prevent form submission on Enter key
      handleButtonClick('=');
    } else {
      const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '='];

      if (validKeys.includes(key)) {
        event.preventDefault(); // Prevent default behavior for supported keys
        handleButtonClick(key);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array means the effect runs once when the component mounts


  return (
    <div className={styles.calculator}>
      <input type="text" value={input} readOnly className={styles.input} />
      <button onClick={() => handleButtonClick('7')} className={styles.button}>7</button>
      <button onClick={() => handleButtonClick('8')} className={styles.button}>8</button>
      <button onClick={() => handleButtonClick('9')} className={styles.button}>9</button>
      <button onClick={() => handleButtonClick('/')} className={styles.button}>/</button>
      <button onClick={() => handleButtonClick('4')} className={styles.button}>4</button>
      <button onClick={() => handleButtonClick('5')} className={styles.button}>5</button>
      <button onClick={() => handleButtonClick('6')} className={styles.button}>6</button>
      <button onClick={() => handleButtonClick('*')} className={styles.button}>*</button>
      <button onClick={() => handleButtonClick('1')} className={styles.button}>1</button>
      <button onClick={() => handleButtonClick('2')} className={styles.button}>2</button>
      <button onClick={() => handleButtonClick('3')} className={styles.button}>3</button>
      <button onClick={() => handleButtonClick('-')} className={styles.button}>-</button>
      <button onClick={() => handleButtonClick('0')} className={styles.button}>0</button>
      <button onClick={() => handleButtonClick('.')} className={styles.button}>.</button>
      <button onClick={() => handleButtonClick('=')} className={styles.button}>=</button>
      <button onClick={() => handleButtonClick('+')} className={styles.button}>+</button>
      <button onClick={() => handleButtonClick('C')} className={styles.button}>C</button>
      <button onClick={() => handleButtonClick('CE')} className={styles.button}>CE</button>
      
      {/* ... rest of the buttons ... */}
      <button onClick={() => handleButtonClick('=')} className={styles.resultButton}>
          Resultado: {result}
        </button>
    </div>
  );
};

export default Calculator;

