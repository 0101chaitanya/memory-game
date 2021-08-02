import "./App.css";
import React, { useState, useEffect } from "react";
import FetchCharacter from "./components/fetchChar";
import data from "./components/data.json";
var uniqid = require("uniqid");
const App = () => {
  const rand = () => Math.floor(Math.random() * 24);
  const [array, setArray] = useState([]);

  const [stateObject, setStateObject] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
  });
  const [scoreObject, setScoreObject] = useState({
    currentScore: 0,
    highScore: 0,
  });

  useEffect(() => {
    Array6();
  }, []);
  useEffect(() => {
    console.log(stateObject);
    for (const obj in stateObject) {
      if (stateObject[obj] === 2) {
        if (scoreObject.currentScore > scoreObject.highScore) {
          setScoreObject((state, props) => ({
            ...scoreObject,
            highScore: state.currentScore,
          }));
        } else {
          setScoreObject((state, props) => ({
            ...scoreObject,
            highScore: state.highScore,
            currentScore: 0,
          }));
        }
      } else {
        setScoreObject((state, props) => ({
          ...scoreObject,
          currentScore: state.currentScore + 1,
        }));
      }
    }
  }, [stateObject]);

  const onClick = (e) => {
    console.log(JSON.parse(e.target.dataset.item).id);
    const { id, counted } = JSON.parse(e.target.dataset.item);
    console.log(id);
    setStateObject({
      ...stateObject,
      [id]: stateObject[id] + 1,
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
      <div>
        <p>currentScore : {scoreObject.currentScore}</p>
        <p>highScore: {scoreObject.highScore}</p>
      </div>
      <div className="imgContainer">{characterArray}</div>
    </div>
  );
};

export default App;
