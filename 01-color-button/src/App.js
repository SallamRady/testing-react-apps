import { useState } from "react";
import "./App.css";

function App() {
  // Vars and States
  const [buttonColor, setButtonColor] = useState("red");

  // Methods
  function toggleButtonColor() {
    setButtonColor(buttonColor === "red" ? `blue` : `red`);
  }

  // return ui
  return (
    <div className="App">
      <button
        onClick={toggleButtonColor}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {buttonColor === "red" ? `blue` : `red`}
      </button>
    </div>
  );
}

export default App;
