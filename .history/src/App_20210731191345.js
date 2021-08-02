import "./App.css";
import React from "react";
import FetchCharacter from "./components/fetchChar";
var uniqid = require("uniqid");
const App = () => {
  const rand = () => Math.floor(Math.random() * 24);

  /* const numbers = Array(12)
    .fill()
    .map((_, index) => index + 1);
  numbers.sort(() => Math.random() - 0.5);
  let randomFour = numbers.slice(0, 6);
  console.log();
 */
  //[...Array(4).keys()].map((i) => rand());

  console.log(randomFour);
  const arr = [...Array(12).keys()].map(() => rand());
  const characterArray = arr.map((item) => {
    //console.log(item);
    return <FetchCharacter key={uniqid()} id={item} />;
  });
  console.log(characterArray);
  return <div>{characterArray}</div>;
};

export default App;
