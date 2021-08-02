import "./App.css";
import data from "./components/data.json";
import React, { useState, useEffect } from "react";
function App() {
  fetch(data).then((response) => console.log(response.json()));

  return <div className="App"></div>;
}

export default App;
