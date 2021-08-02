import "./App.css";
import { getCharacter } from "rickmortyapi"; // getCharacter()
import data from "./components/data.json";
import React, { useState, useEffect } from "react";

function App() {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {}, []);
  async function fetchAPI() {
    let array = [];
    for (let i = 1; i <= 12; i++) {
      const query = await fetch(
        `https://rickandmortyapi.com/api/character/${i}`
      );
      const person = await query.json();
      array = [person, ...array];
    }
    setDataArray(array);
  }
  fetchAPI();
  console.log(dataArray);
  return (
    <div style={{ display: "flex" }} className="App">
      <p>hi</p>
    </div>
  );
}

export default App;
