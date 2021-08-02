import "./App.css";
import React, { useState, useEffect } from "react";
import FetchCharacter from "./components/fetchChar";
import data from "./components/data.json";
var uniqid = require("uniqid");
const App = () => {
  const rand = () => Math.floor(Math.random() * 24);
  const [array, setArray] = useState([]);

  useEffect(() => {}, []);

  const [scoreObject, setScoreObject] = useState({
    currentScore: 0,
    highScore: 0,
    ...data,
  });
  let unRandomArray = [...Array(12).keys()].map(() => data[rand()]);
  var uniq = [...new Set(unRandomArray)].splice(0, 6);
  console.log(unRandomArray, uniq);
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
