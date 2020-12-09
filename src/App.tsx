import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Message from "./Message";

function App() {
  const tuple: [string, number] = ["Bernie", 12];

  return (
    <div className="App">
      {tuple[1]}
      <Message />
    </div>
  );
}

export default App;
