import "./App.css";
import React, { useState, useEffect } from "react";
import FetchCharacter from "./components/fetchChar";
import data from "./components/data.json";
var uniqid = require("uniqid");
const App = () => {
  const rand = () => Math.floor(Math.random() * 24);
  const [array, setArray] = useState([]);

  const [stateObject, setStateObject] = useState({});
  const [scoreObject, setScoreObject] = useState({
    currentScore: 0,
    highScore: 0,
    ...data,
  });

  useEffect(() => {
    Array6();
  }, []);

  const onClick = (e) => {
    console.log(JSON.parse(e.target.dataset.item).id);
    const { id, counted } = JSON.parse(e.target.dataset.item);
    console.log;
    setStateObject({
      ...stateObject,
      [id]: [counted] + 1,
    });
  };

  let Array6 = () => {
    let unRandomArray = [...Array(12).keys()].map(() => data[rand()]);
    var uniq = [...new Set(unRandomArray)].splice(0, 6);
    console.log(unRandomArray, uniq);
    setArray(uniq);
  };
  console.log(stateObject);
  const characterArray = array.map((item) => {
    //console.log(item.image);
    return (
      <FetchCharacter key={`image${item.id}`} onClick={onClick} item={item} />
    );
  });
  return (
    <div className="App">
      <div>{/* SCORE GOES HERE */}</div>
      <div className="imgContainer">{characterArray}</div>
    </div>
  );
};

export default App;
