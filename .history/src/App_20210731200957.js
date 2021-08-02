import "./App.css";
import React, { useState } from "react";
import FetchCharacter from "./components/fetchChar";
import data from "./components/data.json";
var uniqid = require("uniqid");
const App = () => {
  const rand = () => Math.floor(Math.random() * 24);
  const [scoreObject, setScoreObject] = useState({
    currentScore: 0,
    highScore: 0,
    ...data,
  });

  const arr = [...Array(6).keys()].map(() => data[rand()]);
  console.log(arr);

  const characterArray = arr.map((item) => {
    console.log(item);
    return;
  });
  const styles = {};
  console.log(data[0].image);
  return (
    <div>
      <div>
        <FetchCharacter src={data[0].image} id={data[2].id} />
      </div>
      <div style={styles}>{characterArray}</div>
    </div>
  );
};

export default App;
