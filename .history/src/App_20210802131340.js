import "./App.css";
import React, { useState, useEffect } from "react";
import FetchCharacter from "./components/fetchChar";
import data from "./components/data.json";
const App = () => {
  const rand = () => Math.floor(Math.random() * 24);
  const [array, setArray] = useState([]);

  const obj = {
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
    let unRandomArray = [...Array(12).keys()].map(() => rand());
    var uniq = [...new Set(unRandomArray)].splice(0, 6);
    setArray(uniq);
  };

  useEffect(() => {
    Array6();
  }, []);
  /*  const regenerateArray = () => {
    let arr = array.slice(0);

    let arrayInter = [...arr, rand(), rand(), rand(), rand(), rand()];

    let newArray = [...new Set(arrayInter)].splice(0, 6);
    return setArray(newArray);
  };
 */
  const regenerateArray = (obj) => {
    console.log(obj);
    let arr = array.slice(0);
    console.log(arr.indexOf(Number(obj) - 1));
    arr.splice(arr.indexOf(Number(obj) - 1), 1);
    let newArray = [...new Set([...arr, rand(), rand(), rand()])].splice(0, 6);
    console.log(newArray);
    //i++;
    return setArray(newArray);
  };

  useEffect(() => {
    for (const obj in stateObject) {
      if (stateObject[obj] >= 2) {
        if (scoreObject.currentScore - 1 > scoreObject.highScore) {
          setScoreObject((scoreObject, props) => ({
            highScore: Number(scoreObject.currentScore) - 1,
            currentScore: 0,
          }));
          const i = 1;

          setStateObject((stateObject) => ({
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
          }));
          regenerateArray(obj);
        } else {
          setScoreObject({
            ...scoreObject,
            currentScore: 0,
          });
          setStateObject((stateObject) => ({
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
          }));
          regenerateArray(obj);
        }
      }
    }
  }, [stateObject, scoreObject]);

  const onClick = (e) => {
    const { id } = JSON.parse(e.target.dataset.item);
    setStateObject((stateObject) => ({
      ...stateObject,
      [id]: [Number(stateObject[id]) + 1],
    }));
    setScoreObject((scoreObject) => ({
      ...scoreObject,
      currentScore: Number(scoreObject.currentScore) + 1,
    }));
  };
  const characterArray = array.map((item) => {
    return (
      <FetchCharacter
        key={`image${data[item].id}`}
        onClick={onClick}
        item={data[item]}
      />
    );
  });
  return (
    <div className="App">
      <h1>
        <u>Memory Game - R&M Theme</u>
      </h1>
      <div>
        <p>currentScore : {scoreObject.currentScore}</p>
        <p>highScore: {scoreObject.highScore}</p>
      </div>
      <div className="imgContainer">{characterArray}</div>
    </div>
  );
};

export default App;
