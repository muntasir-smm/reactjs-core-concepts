import logo from "./logo.svg";
import "./App.css";

const singer = { name: "Dr Mahfuz", job: "Singer" };
const singer2 = { name: "Runa Khan", job: "Singer2" };
const singerStyle = {
  color: "Purple",
  backgroundColor: "white",
  padding: "10px",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>JSX</h2>
        <div className="container">
          <h3>Hello Dude!! How are you?</h3>
        </div>

        <div className="music">
          <p style={singerStyle}>
            Name: {singer.name} <br />
            Job: {singer.job}
          </p>
          <p
            style={{
              color: "blue",
              backgroundColor: "yellow",
              padding: "20px",
            }}
          >
            Name: {singer2.name} <br />
            Job: {singer2.job}
          </p>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
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
