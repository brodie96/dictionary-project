import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div></div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Rebecca Brodie, hosted by GitHub.
        </footer>
      </div>
    </div>
  );
}
