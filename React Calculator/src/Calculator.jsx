import React, { useState } from 'react';
import Button from './Button.jsx';
import './Calculator.css';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('0');
  const [operation, setOperation] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');

  const handleButtonClick = (label) => {

    console.log(inputValue.length+1);
    if (inputValue.length +1 > 10) {
      setInputValue('ERROR');
      alert('ERROR: El número es demasiado grande. Solo se permiten 9 dígitos.');
    }

    if (/[0-9]/.test(label)) {
      if (inputValue.includes('ERROR')) {
        setInputValue(label);
      } else if (operation === '') {
        setInputValue((prevValue) => prevValue === '0' ? label : prevValue + label);
      } else {
        setInputValue((prevValue) => prevValue === previousNumber ? label : prevValue + label);
      }
      
    } else if (label === '.') {
      setInputValue((prevValue) => prevValue.includes('.') ? prevValue : prevValue + label);
    } else if (label === '+/-') {
      if (operation === '') {
        setInputValue((prevValue) => {
          const newValue = parseFloat(prevValue) * -1;
          return newValue.toString();
        });
      } else {
        setInputValue((prevValue) => prevValue * -1);
      }
    } else if (label === 'C') {
      setInputValue('0');
      setOperation('');
      setPreviousNumber('');
    } else if (label === '=') {
      performOperation();
    } else if (label === 'x' || label === '/' || label === '-' || label === '+' || label === '%') {
      if (operation === '') {
        setPreviousNumber(inputValue);
        setOperation(label);
      } else {
        performOperation();
        setOperation(label);
      }
    }
  };

  const performOperation = () => {
    const newValue = parseFloat(inputValue);
    const previousValue = parseFloat(previousNumber);
    let result = '';


    if (operation === '%') {
      result = (previousValue % newValue).toString();
    } else if (operation === 'x') {
      result = (previousValue * newValue).toString();
    } else if (operation === '/') {
      result = (previousValue / newValue).toString();
      if (result === 'Infinity') {
        result = 'ERROR';
      }
    } else if (operation === '-') {
      result = (previousValue - newValue).toString();
    } else if (operation === '+') {
      result = (previousValue + newValue).toString();
    }

    if (parseFloat(result) > 999999999 || result.length + 1 > 10) {
      result = 'ERROR';
      alert('ERROR: El número es demasiado grande. Solo se permiten 9 dígitos.');
    }

    if (parseFloat(result) < 0) {
      result = 'ERROR';
    }
    
    setInputValue(result);
    setOperation('');
    setPreviousNumber(result);

  };

  return (
    <div className="calculator">
      <input type="text" readOnly className="input" value={inputValue}/>
      <div className="buttons">
        <Button className="botonCeleste" label="C" onClick={() => handleButtonClick("C") }/>
        <Button className="botonCeleste" label="+/-" onClick={() => handleButtonClick("+/-")}/>
        <Button className="botonCeleste" label="MOD" onClick={() => handleButtonClick("%")}/>
        <Button className="botonMorado" label="÷" onClick={() => handleButtonClick("/")}/>
        <Button label="7" onClick={() => handleButtonClick("7")}/>
        <Button label="8" onClick={() => handleButtonClick("8")}/>
        <Button label="9" onClick={() => handleButtonClick("9")}/>
        <Button className="botonMorado" label="x" onClick={() => handleButtonClick("x")}/>
        <Button label="4" onClick={() => handleButtonClick("4")}/>
        <Button label="5" onClick={() => handleButtonClick("5")}/>
        <Button label="6" onClick={() => handleButtonClick("6")}/>
        <Button className="botonMorado" label="-" onClick={() => handleButtonClick("-")}/>
        <Button label="1" onClick={() => handleButtonClick("1")}/>
        <Button label="2" onClick={() => handleButtonClick("2")}/>
        <Button label="3" onClick={() => handleButtonClick("3")}/>
        <Button className="botonMorado" label="+" onClick={() => handleButtonClick("+")}/>
        <Button className="botonCero" label="0" onClick={() => handleButtonClick("0")}/>
        <Button label="." onClick={() => handleButtonClick(".")}/>
        <Button className="botonMorado" label="=" onClick={() => handleButtonClick("=")}/>
      </div>
    </div>
  );
};

export default Calculator;
