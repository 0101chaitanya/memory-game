import "./App.css";
import { getCharacter } from "rickmortyapi"; // getCharacter()

import data from "./components/data.json";
import React, { useState, useEffect } from "react";
function App() {
  console.log(data);
  const array = data.map((item, i) => {
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
  });
  return (
    <div style={{ display: "flex" }} className="App">
      {array}
    </div>
  );
}

export default App;
