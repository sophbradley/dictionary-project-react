import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="mt-5 mb-5">
          <a
            href="https://github.com/sophbradley/dictionary-project-react"
            target="_blank"
            rel="noreferrer noopener"
            title="Check it out on GitHub"
          >
            Open source code
          </a>{" "}
          built by{" "}
          <a
            href="https://www.sophiebradley.com/"
            target="_blank"
            rel="noreferrer noopener"
            title="Check out my portfolio here"
          >
            Sophie Bradley
          </a>
        </footer>
      </div>
    </div>
  );
}
