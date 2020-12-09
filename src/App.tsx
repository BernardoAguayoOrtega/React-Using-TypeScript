import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const tuple: [string, number] = ["Bernie", 12];

  return <div className="App">
    {tuple[1]}
  </div>;
}

export default App;
