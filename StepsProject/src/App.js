import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import stepData from "./data";
import "./index.css";
function App() {
  const [step, setStep] = useState(1);
  const [isClose, setClose] = useState(true);
  
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 6) setStep((s) => s + 1);
  }

  function closing() {
    setClose((is) => !is);
  }
  console.log(isClose);

  return (
    <>
      <Close closing={closing} />
      {isClose ? (
        <>
          <Number step={step} />
          <Main step={step} />
          <Buttonspn
            step={step}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

function Close({ closing }) {
  return (
    <div className="close-btn">
      <button onClick={closing}>&times;</button>
    </div>
  );
}
function Number({ step }) {
  return (
    <ul>
      <div className={`${step >= 1 ? "active" : ""}`}>1</div>
      <div className={`${step >= 2 ? "active" : ""}`}>2</div>
      <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      <div className={`${step >= 4 ? "active" : ""}`}>4</div>
      <div className={`${step >= 5 ? "active" : ""}`}>5</div>
      <div className={`${step >= 6 ? "active" : ""}`}>6</div>
    </ul>
  );
}
function Main({ step }) {
  return (
    <div className="message">
      Step {step}: {stepData[step - 1]}
    </div>
  );
}
function Buttonspn({ handleNext, handlePrevious }) {
  return (
    <div className="btn-grp">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
export default App;
