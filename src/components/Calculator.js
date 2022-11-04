import { React, useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('0');
  const [operation, setOperation] = useState({ total: null, next: null, operation: null });

  const clickHandler = (event) => {
    const btnClick = event.target.innerHTML;
    setOperation(calculate(operation, btnClick));
    const obj = calculate(operation, btnClick);
    setResult(obj.next || obj.total || '0');
  };

  return (
    <div className="main-div">
      <div className="left-div">
        <h2>Let&apos;s do some math!</h2>
      </div>
      <table className="tg" role="grid">
        <thead>
          <tr>
            <th className="tg-xzry" colSpan="4">{result}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">AC</td>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">+/-</td>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">%</td>
            <td role="gridcell" onClick={clickHandler} className="tg-p0tl">÷</td>
          </tr>
          <tr>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">7</td>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">8</td>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">9</td>
            <td role="gridcell" onClick={clickHandler} className="tg-qssw">*</td>
          </tr>
          <tr>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">4</td>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">5</td>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">6</td>
            <td role="gridcell" onClick={clickHandler} className="tg-qssw">-</td>
          </tr>
          <tr>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">1</td>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">2</td>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">3</td>
            <td role="gridcell" onClick={clickHandler} className="tg-qssw">+</td>
          </tr>
          <tr>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd" colSpan="2">0</td>
            <td role="gridcell" onClick={clickHandler} className="tg-kftd">.</td>
            <td role="gridcell" onClick={clickHandler} className="tg-qssw">=</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
