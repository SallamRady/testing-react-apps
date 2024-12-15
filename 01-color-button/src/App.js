import { useState } from "react";

function App() {
  // Vars and States
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  // Methods
  function toggleButtonColor() {
    setButtonColor(buttonColor === "red" ? `blue` : `red`);
  }

  // return ui
  return (
    <div>
      <button
        disabled={disabled}
        onClick={toggleButtonColor}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {buttonColor === "red" ? `blue` : `red`}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disabled button</label>
    </div>
  );
}

export default App;
