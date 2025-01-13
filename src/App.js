import { useState } from "react";
import "./App.css";
export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (val) => {
    if (val === "=") {
      try {
        if (!input.trim()) {
          setResult("Error");
        } else {
          const evalResult = eval(input);
          setResult(isNaN(evalResult) ? "NaN" : evalResult);
        }
      } catch (error) {
        setInput(error);
      }
    } else if (val === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((previous) => previous + val);
    }
  };
  return (
    <div className="app">
      <div className="calculator-container">
        <h1>React Calculator</h1>
        <input type="text" value={input} readOnly />
        <div>{result}</div>
        <div className="calculator-btn-box">
          {[
            "7",
            "8",
            "9",
            "+",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "*",
            "C",
            "0",
            "=",
            "/",
          ].map((val) => {
            return (
              <button
                className="btn"
                key={val}
                onClick={() => handleClick(val)}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
