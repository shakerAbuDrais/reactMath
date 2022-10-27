import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '0' };
    this.obj = { total: null, next: null, operation: null };
  }

clickHandler = (event) => {
  const btnClick = event.target.innerHTML;
  this.obj = calculate(this.obj, btnClick);
  this.setState({ result: this.obj.next || this.obj.total || '0' });
}

render() {
  const { result } = this.state;
  return (
    <table className="tg" role="grid">
      <thead>
        <tr>
          <th className="tg-xzry" colSpan="4">{result}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">AC</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">+/-</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">%</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-p0tl">÷</td>
        </tr>
        <tr>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">7</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">8</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">9</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-qssw">*</td>
        </tr>
        <tr>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">4</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">5</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">6</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-qssw">-</td>
        </tr>
        <tr>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">1</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">2</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">3</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-qssw">+</td>
        </tr>
        <tr>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd" colSpan="2">0</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-kftd">.</td>
          <td role="gridcell" onClick={this.clickHandler} className="tg-qssw">=</td>
        </tr>
      </tbody>
    </table>
  );
}
}

export default Calculator;
