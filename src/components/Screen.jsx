import React, { useState } from "react";
import { evaluate } from "mathjs";

export const Screen = () => {
  const [result, setResult] = useState("");
  const [proResult, setProResult] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setResult(result + e.target.id); 
    setProResult(proResult + e.target.id);
  };

  const ac = () => {
    setResult("");
    setShow(false);
  };

  const del = () => {
    setResult(result.slice(0, result.length - 1)); 
    setProResult(proResult.slice(0, -1));
  };

  const showResult = () => {
    setProResult(result);
    setShow(true);
    try {
      setResult(evaluate(result));
    } catch (e) {
      setResult("Error");
    }
  };

  const mystyle = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    borderRadius: "3rem",
    gridColumn: "span 2",
    backgroundColor: "#282c34",
    textalign: "left",
  };

  return (
    <div className="container">
      <div className="keypad">
        {show && (
          <form>
            <input type="button" value={proResult} readOnly={true} />
          </form>
        )}
        <form>
          <input type="text" value={result || 0} onChange={handleClick}/>
        </form>
        <button id="clear" onClick={ac}>
          C
        </button>
        <button id="backspace" onClick={del}>
          DEL
        </button>
        <button id="%" onClick={handleClick} className="percent">
          %
        </button>
        <button id="/" onClick={handleClick} className="operator">
          &divide;
        </button>
        <button id="1" onClick={handleClick}>
          1
        </button>
        <button id="2" onClick={handleClick}>
          2
        </button>
        <button id="3" onClick={handleClick}>
          3
        </button>
        <button id="*" onClick={handleClick} className="operator">
          &times;
        </button>
        <button id="4" onClick={handleClick}>
          4
        </button>
        <button id="5" onClick={handleClick}>
          5
        </button>
        <button id="6" onClick={handleClick}>
          6
        </button>
        <button id="-" onClick={handleClick} className="operator">
          -
        </button>
        <button id="7" onClick={handleClick}>
          7
        </button>
        <button id="8" onClick={handleClick}>
          8
        </button>
        <button id="9" onClick={handleClick}>
          9
        </button>
        <button id="+" onClick={handleClick} className="operator">
          +
        </button>
        <button id="0" onClick={handleClick} style={mystyle}>
          0
        </button>
        <button id="." onClick={handleClick}>
          .
        </button>
        <button  onClick={showResult} className="operator">
          =
        </button>
      </div>
    </div>
  );
};
