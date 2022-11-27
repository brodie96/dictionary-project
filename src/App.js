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
          Coded by Rebecca Brodie, hosted by GitHub.
        </footer>
      </div>
    </div>
  );
}
