import "./App.css";
import { getCharacter } from "rickmortyapi"; // getCharacter()
import data from "./components/data.json";
import React, { useState, useEffect } from "react";

function App() {
  const [dataArray, setDataArray] = useState([]);
 const async func = () => {
    let array = [];
    for (let i = 1; i <= 12; i++) {
      const query = fetch(
        `https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12]`
      );
      const person = query.json();
      console.log(person);
      array = [person, ...array];
    }
    console.log(array);
  };
  //fetchAPI();
  console.log(dataArray);
  return (
    <div style={{ display: "flex" }} className="App">
      <p>hi</p>
    </div>
  );
}

export default App;
