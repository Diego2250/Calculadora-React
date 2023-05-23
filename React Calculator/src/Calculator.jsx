import React from 'react';
import Button from './Button.jsx';
import './Calculator.css';

const Calculator = () => {
  return (
    <div className="calculator">
      <input type="text" readOnly className="input" />
      <div className="buttons">
        <Button className="botonCeleste" label="C" />
        <Button className="botonCeleste" label="+/-" />
        <Button className="botonCeleste" label="%" />
        <Button className="botonMorado" label="÷" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button className="botonMorado" label="x" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button className="botonMorado" label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button className="botonMorado" label="+" />
        <Button className="botonCero" label="0" />
        <Button label="." />
        <Button className="botonMorado" label="=" />
      </div>
    </div>
  );
};

export default Calculator;
