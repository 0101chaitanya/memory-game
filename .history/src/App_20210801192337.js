import "./App.css";
import React, { useState, useEffect } from "react";
import FetchCharacter from "./components/fetchChar";
import data from "./components/data.json";
var uniqid = require("uniqid");
const App = () => {
  const rand = () => Math.floor(Math.random() * 12);
  const [array, setArray] = useState([]);

  useEffect(() => {
    initialArray();
  }, []);

  const [scoreObject, setScoreObject] = useState({
    currentScore: 0,
    highScore: 0,
    ...data,
  });
  function initialArray() {
    let compareArray = [];
    const arr = [...Array(6).keys()]
      .map(() => {
        let y;
        function compare(x = rand()) {
          if (compareArray.every((element) => element !== x)) {
            y = x;
          } else {
            compare((x = rand()));
          }
        }
        compareArray = [...compareArray, y];
        return data[y];
      })
      .forEach();
    setArray(arr);
    console.log(arr);
  }
  console.log(array);
  const characterArray = array.map((item) => {
    console.log(item.image);

    return <FetchCharacter key={`image${item.id}`} src={item.image} />;
  });
  return (
    <div className="App">
      <div>{/* SCORE GOES HERE */}</div>

      <div className="imgContainer">{characterArray}</div>
    </div>
  );
};

export default App;
