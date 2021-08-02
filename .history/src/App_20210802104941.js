import "./App.css";
import React, { useState, useEffect } from "react";
import FetchCharacter from "./components/fetchChar";
import data from "./components/data.json";
var uniqid = require("uniqid");
const App = () => {
  const rand = () => Math.floor(Math.random() * 24);
  const [array, setArray] = useState([]);

  let obj = {
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
  };
  const [stateObject, setStateObject] = useState(obj);
  const [scoreObject, setScoreObject] = useState({
    currentScore: 0,
    highScore: 0,
  });
  let Array6 = () => {
    let unRandomArray = [...Array(12).keys()].map(() => data[rand()]);
    var uniq = [...new Set(unRandomArray)].splice(0, 6);
    console.log(unRandomArray, uniq);
    setArray(uniq);
  };

  useEffect(() => {
    Array6();
  }, []);
  useEffect(() => {
    console.log(stateObject);
    for (const obj in stateObject) {
      if (stateObject[obj] === 2) {
        if (scoreObject.currentScore > scoreObject.highScore) {
          setScoreObject((state, props) => ({
            highScore: state.currentScore,
            currentScore: 0,
          }));
          setStateObject(obj);
        } else {
          setScoreObject({
            ...scoreObject,
            currentScore: 0,
          });
        }
        setStateObject(obj);
      } else {
        setScoreObject((state, props) => ({
          ...scoreObject,
          currentScore: state.currentScore + 1,
        }));
      }
    }
  }, [stateObject, scoreObject]);

  const onClick = (e) => {
    console.log(JSON.parse(e.target.dataset.item).id);
    const { id, counted } = JSON.parse(e.target.dataset.item);
    console.log(id);
    setStateObject({
      ...stateObject,
      [id]: stateObject[id] + 1,
    });
    setScoreObject((state) => ({
      currentScore: state.currentScore + 1,
    }));
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
