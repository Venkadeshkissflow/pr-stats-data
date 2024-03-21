import logo from "./logo.svg";
import "./App.css";

const PERSONAL_ACCESS_TOK = "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";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          fine <code>src/App.js</code> demo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
