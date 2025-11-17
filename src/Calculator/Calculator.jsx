import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [storedValue, setStoredValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [shouldReset, setShouldReset] = useState(false);

  const handlerNumber = (num) => {
    if (display === "0" || shouldReset) {
      setDisplay(num);
      setShouldReset(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleDecimal = () => {
    if (shouldReset) {
      setDisplay("0.");
      setShouldReset(false);
    } else {
      if (!display.includes(".")) {
        setDisplay(display + ".");
      }
    }
  };

  const handleOperator = (op) => {
    if (storedValue === null) {
      setStoredValue(display);
    } else if (!shouldReset) {
      doCalculation();
    }

    setOperation(op);
    setShouldReset(true);
  };

  const doCalculation = () => {
    if (storedValue == null || operation === null) return;
    const a = parseFloat(storedValue);
    const b = parseFloat(display);

    let result;
    switch (operation) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "x":
        result = a * b;
        break;
      case "÷":
        result = b === 0 ? "Error" : a / b;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setStoredValue(result.toString());
  };

  const handleEquals = () => {
    if (operation && storedValue) {
      doCalculation();
      setOperation(null);
      setShouldReset(true);
    }
  };

  const handleDelete = () => {
    if (shouldReset) return;
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  };

  const handleClear = () => {
    setDisplay("0");
    setOperation(null);
    setShouldReset(false);
    setStoredValue(null);
  };

  return (
    <div style={{ marginLeft: 50 }}>
      <span>{display}</span>
      <div>
        <button onClick={() => handleClear()}>AC</button>
        <button onClick={() => handleDelete()}>Backspace</button>
        <button onClick={() => handleOperator("÷")}>÷</button>
      </div>
      <div>
        <button onClick={() => handlerNumber("7")}>7</button>
        <button onClick={() => handlerNumber("8")}>8</button>
        <button onClick={() => handlerNumber("9")}> 9</button>{" "}
        <button onClick={() => handleOperator("x")}>x</button>
      </div>
      <div>
        <button onClick={() => handlerNumber("4")}>4</button>
        <button onClick={() => handlerNumber("5")}>5</button>
        <button onClick={() => handlerNumber("6")}>6</button>{" "}
        <button onClick={() => handleOperator("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handlerNumber("1")}>1</button>
        <button onClick={() => handlerNumber("2")}>2</button>
        <button onClick={() => handlerNumber("3")}>3</button>{" "}
        <button onClick={() => handleOperator("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handlerNumber("0")}>0</button>
        <button onClick={() => handleDecimal()}>.</button>
        <button style={{ width: 50 }} onClick={() => handleEquals()}>
          =
        </button>
      </div>
    </div>
  );
}
