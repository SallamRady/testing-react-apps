import { useState } from "react";

function App() {
  // Vars and States
  const [buttonColor, setButtonColor] = useState("red");

  // Methods
  function toggleButtonColor() {
    setButtonColor(buttonColor === "red" ? `blue` : `red`);
  }

  // return ui
  return (
    <div>
      <button
        onClick={toggleButtonColor}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {buttonColor === "red" ? `blue` : `red`}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
