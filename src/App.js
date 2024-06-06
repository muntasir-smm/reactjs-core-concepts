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
      </header>

      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h2>New Component</h2>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h1>Shaikh Muntasir</h1>
      <p>Job: Footballer </p>
    </div>
  );
}

function Friend() {
  return (
    <div className="container">
      <h3>Name: Masum</h3>
      <p>Job: Doctor</p>
    </div>
  );
}

export default App;
