import "./App.css";
import React from "react";
import FetchCharacter from "./components/fetchChar";
var uniqid = require("uniqid");
const App = () => {
  let randomFour = [];
  function random(input) {
    if (randomFour.length < 4) {
      let rand = Math.floor(Math.random() * 12);

      if (
        randomFour.every((item) => {
          return item !== rand;
        })
      ) {
        random = [rand, ...randomFour];
      } else {
        random(randomFour);
      }
    } else {
      return randomFour;
    }
    randomFour = random(randomFour);
  }
  const arr = [...Array(12).keys()].map((i) => i + 1);
  const characterArray = arr.map((item) => {
    //console.log(item);
    return <FetchCharacter key={uniqid()} id={item} />;
  });
  console.log(characterArray);
  return <div>{characterArray}</div>;
};

export default App;
