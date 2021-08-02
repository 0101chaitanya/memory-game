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
  });
  const arr = [...Array(6).keys()].map(() => rand());
  console.log(arr);

  const characterArray = arr.map((item) => {
    console.log(item);
    return;
  });
  const styles = {};
  console.log(characterArray);
  return (
    <div>
      <div>
        <FetchCharacter image={data[0].image} id={data[2].id} />
      </div>
      <div style={styles}>{characterArray}</div>
    </div>
  );
};

export default App;
