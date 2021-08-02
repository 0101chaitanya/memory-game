import "./App.css";
import "./components/data.json";
import React, { useState, useEffect } from "react";
function App() {
  fetch("./components/data.json").then((response) => console.log(response));

  return <div className="App"></div>;
}

export default App;
