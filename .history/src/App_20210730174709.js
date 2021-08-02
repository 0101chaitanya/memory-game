import "./App.css";
import { getCharacter } from "rickmortyapi"; // getCharacter()
import data from "./components/data.json";
import React, { useState, useEffect } from "react";
let dataArrray = [];

for (let i = 1; i <= 12; i++) {
  let personPromise = fetch("https://rickandmortyapi.com/api/character/?id=1");
  dataArrray = [personPromise, ...dataArrray];
}
const theSmiths = await getCharacter([1, 2, 3, 4, 5]);

console.log(dataArrray);

async function App() {
  /* const array = data.map((item, i) => {
    return (
      <ol key={item.id + item.name}>
        <li>{item.id}</li>
        <li>{item.name}</li>
        <li>{item.clicked}</li>
        <li>
          <img src={item.image} alt={item.name} />
        </li>
        <li>{item.occupation}</li>
      </ol>
    );
  }); */
  return (
    <div style={{ display: "flex" }} className="App">
      haha
    </div>
  );
}

export default App;
