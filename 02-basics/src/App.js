import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
