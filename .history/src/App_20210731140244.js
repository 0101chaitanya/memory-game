import "./App.css";
import React from "react";
import FetchCharacter from "./components/fetchChar";
var uniqid = require("uniqid");
const App = () => {
  const rand = () => Math.floor(Math.random() * 12);
  let randomFour = [...Array(4).keys()].map((i) => rand());

  console.log(randomFour);
  const arr = [...Array(12).keys()].map((i) => i + 1);
  const characterArray = arr.map((item) => {
    //console.log(item);
    return <FetchCharacter key={uniqid()} id={item} />;
  });
  console.log(characterArray);
  return <div>{characterArray}</div>;
};

export default App;
