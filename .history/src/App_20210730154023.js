import "./App.css";
import data from "./components/data.json";
import React, { useState, useEffect } from "react";
function App() {
  return (
    <div className="App">
      fetch(data).then(response => console.log(response))
    </div>
  );
}

export default App;
