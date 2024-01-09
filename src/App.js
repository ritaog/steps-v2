import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div className="">
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (step <= messages.length - 1) {
      setStep((currStep) => currStep + 1);
    }
  };

  const handlePrevious = () => {
    if (step >= messages.length - 1) {
      setStep((currStep) => currStep - 1);
    }
  };
  const handleClose = () => {
    setIsOpen((currStep) => !currStep);
  };

  return (
    <>
      <button onClick={handleClose} className="close">
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button onClick={handlePrevious} textColor="#fff" bgColor="#7950f2">
              <span>👈🏽</span>Previous
            </Button>
            <Button onClick={handleNext} textColor="#fff" bgColor="#7950f2">
              Next <span>👉🏽</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
