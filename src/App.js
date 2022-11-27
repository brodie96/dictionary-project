import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div>
            <h1>What's the Word?</h1>
          </div>
        </header>
        <main className="App-main">
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a href="https://leafy-begonia-db17ce.netlify.app">Rebecca Brodie</a>,
          hosted by <a href="https://github.com/dashboard">GitHub</a>.
        </footer>
      </div>
    </div>
  );
}
