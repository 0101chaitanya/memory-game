import "./App.css";
import React, { useState, useEffect } from "react";
import FetchCharacter from "./components/fetchChar";
import data from "./components/data.json";
var uniqid = require("uniqid");
const App = () => {
  const rand = () => Math.floor(Math.random() * 24);
  const [array, setArray] = useState([]);

  const [scoreObject, setScoreObject] = useState({
    currentScore: 0,
    highScore: 0,
    ...data,
  });
  function initialArray() {
    const arr = [...Array(6).keys()].map(() => data[rand()]);
    setArray(arr);
    console.log(arr);
  }

  const characterArray = array.map((item) => {
    <FetchCharacter src={item} />;
  });
  const styles = {};
  return (
    <div>
      <div>{/* SCORE GOES HERE */}</div>
      <div className="imgContainer">
        <div style={styles}>{characterArray}</div>
      </div>
    </div>
  );
};

export default App;
