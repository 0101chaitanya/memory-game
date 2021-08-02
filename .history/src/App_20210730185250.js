import "./App.css";
import { getCharacter } from "rickmortyapi"; // getCharacter()
import data from "./components/data.json";
import React, { useState, useEffect } from "react";
let dataArrray = [];

(async function call() {
  for (let i = 1; i <= 12; i++) {
    const query = await fetch(`https://rickandmortyapi.com/api/character/${i}`);
    const person = await query.json();
  }
  const theSmiths = await getCharacter([1, 2, 3, 4, 5]);

  console.log(dataArrray);
})();

function App() {
  return (
    <div style={{ display: "flex" }} className="App">
      <p>hi</p>
    </div>
  );
}

export default App;
