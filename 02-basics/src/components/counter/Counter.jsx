import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h4>Counter</h4>
      <p data-testid="counter">{counter}</p>
      <button
        data-testid="counter-up"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Increment
      </button>
      <button
        data-testid="counter-down"
        onClick={() => setCounter((prev) => prev - 1)}
      >
        Decrement
      </button>
    </div>
  );
}
