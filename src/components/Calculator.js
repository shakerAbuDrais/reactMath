import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-xzry" colSpan="4">0</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-kftd">AC</td>
            <td className="tg-kftd">+/-</td>
            <td className="tg-kftd">%</td>
            <td className="tg-p0tl">÷</td>
          </tr>
          <tr>
            <td className="tg-kftd">7</td>
            <td className="tg-kftd">8</td>
            <td className="tg-kftd">9</td>
            <td className="tg-qssw">*</td>
          </tr>
          <tr>
            <td className="tg-kftd">4</td>
            <td className="tg-kftd">5</td>
            <td className="tg-kftd">6</td>
            <td className="tg-qssw">-</td>
          </tr>
          <tr>
            <td className="tg-kftd">1</td>
            <td className="tg-kftd">2</td>
            <td className="tg-kftd">3</td>
            <td className="tg-qssw">+</td>
          </tr>
          <tr>
            <td className="tg-kftd" colSpan="2" />
            <td className="tg-kftd">.</td>
            <td className="tg-qssw">=</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
