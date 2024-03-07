import React, { useState } from "react";
import "./style.css";
const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    const value = e.target.innerHTML;
    switch (value) {
      case "=":
        setInput(eval(input));
        break;
      case "AC":
        setInput("");
        break;
      case "DE":
        setInput(input.slice(0, -1));
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  return (
    <div className="calc">
      <div className="content">
        <input type="text" placeholder="0" value={input} onChange={() => {}} />
        <table>
          <tbody>
            <tr>
              <td>
                <button className="btn-clr" onClick={handleClick}>
                  AC
                </button>
              </td>
              <td>
                <button className="btn-main" onClick={handleClick}>
                  DE
                </button>
              </td>
              <td>
                <button className="btn-main" onClick={handleClick}>
                  *
                </button>
              </td>
              <td>
                <button className="btn-main" onClick={handleClick}>
                  /
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn" onClick={handleClick}>
                  7
                </button>
              </td>
              <td>
                <button className="btn" onClick={handleClick}>
                  8
                </button>
              </td>
              <td>
                <button className="btn" onClick={handleClick}>
                  9
                </button>
              </td>
              <td>
                <button className="btn-main" onClick={handleClick}>
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn" onClick={handleClick}>
                  4
                </button>
              </td>
              <td>
                <button className="btn" onClick={handleClick}>
                  5
                </button>
              </td>
              <td>
                <button className="btn" onClick={handleClick}>
                  6
                </button>
              </td>
              <td>
                <button className="btn-main" onClick={handleClick}>
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn" onClick={handleClick}>
                  1
                </button>
              </td>
              <td>
                <button className="btn" onClick={handleClick}>
                  2
                </button>
              </td>
              <td>
                <button className="btn" onClick={handleClick}>
                  3
                </button>
              </td>
              <td>
                <button className="btn-main" onClick={handleClick}>
                  .
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn-main" onClick={handleClick}>
                  (
                </button>
              </td>
              <td>
                <button className="btn" onClick={handleClick}>
                  0
                </button>
              </td>
              <td>
                <button className="btn-main" onClick={handleClick}>
                  )
                </button>
              </td>
              <td>
                <button className="btn-equal" onClick={handleClick}>
                  =
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
