import React, { useState, useEffect } from "react";
import "../App.css";
import deleteicon from "./deleteicon.png";
const NumberGrid = (props) => {
  const [result, setResult] = useState("");

  const deleteLast = () => {
    setResult((prev) => prev.slice(0, -1));
  };
  const liveScreen = (e) => {
    if (e.target.value === "C") {
      setResult("");
    } else if (e.target.value === "X") {
      setResult((prev) => prev + "*");
    } else setResult((prev) => prev + e.target.value);
  };

  const Calculate = (value) => {
    try {
      console.log(value);
      const calculatedValue = eval(value || null);
      if (isNaN(calculatedValue)) {
        setResult("Can't divide 0 with 0");
        setTimeout(() => {
          setResult("");
        }, 300);
      } else {
        setResult("");
        setResult((prev) => prev + calculatedValue);
      }
    } catch (error) {
      setResult(error);
      setTimeout(() => {
        setResult("");
      }, 300);
    }
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    const key = e.key;
    switch (key) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        setResult((prev) => prev + key);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        setResult((prev) => prev + key);
        break;
      case ".":
        setResult((prev) => prev + ".");
        break;
      case "Backspace":
        deleteLast();
        break;
      case "Enter":
        if (result === "") {
        } else {
          console.log("evaluating");
          Calculate(result);
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown); // eslint-disable-next-line

    return () => {
      document.removeEventListener("keydown", handleKeyDown); // eslint-disable-next-line
    };
  }, [result]); // eslint-disable-next-line
  return (
    <div className="d-flex flex-column gap-2">
      <div className="secondrow d-flex align-content-center justify-content-center mb-2">
        <input
          type="text"
          readOnly
          className={`ans p-4 text-${
            props.mode === "Light" ? "dark" : "light"
          }`}
          value={result}
        />
      </div>
      <div className="thirdrow  d-flex align-content-center justify-content-center">
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="C"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="%"
          onClick={liveScreen}
        />

        <span className="button" onClick={deleteLast}>
          <img
            className={`deletebtn ${props.mode === "Light" ? "" : "invert"}`}
            src={deleteicon}
            alt=""
          />
        </span>
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="/"
          onClick={liveScreen}
        />
      </div>
      <div className="fourthrow  d-flex align-content-center justify-content-center">
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="7"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="8"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="9"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="X"
          onClick={liveScreen}
        />
      </div>
      <div className="fifthrow  d-flex align-content-center justify-content-center">
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="4"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="5"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="6"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="-"
          onClick={liveScreen}
        />
      </div>
      <div className="sixthrow  d-flex align-content-center justify-content-center ">
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="1"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="2"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="3"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="+"
          onClick={liveScreen}
        />
      </div>
      <div className="seventhrow  d-flex align-content-center justify-content-center ">
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="00"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="0"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="."
          title="point"
          onClick={liveScreen}
        />
        <input
          type="button"
          className={`button text-${props.mode === "Light" ? "dark" : "light"}`}
          value="="
          onClick={() => Calculate(result)}
        />
      </div>
    </div>
  );
};

export default NumberGrid;
