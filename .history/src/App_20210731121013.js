import "./App.css";
import React from "react";
import FetchCharacter from "./components/fetchChar";

const App = () => {
  let randomFour = [];
  function random(input) {
    if (input) {
      console.log("ofo");
    }
  }
  random(randomFour);
  const arr = [...Array(12).keys()].map((i) => i + 1);
  const characterArray = arr.map((item) => {
    //console.log(item);
    return <FetchCharacter id={item} />;
  });
  console.log(characterArray);
  return <div>{characterArray}</div>;
};

export default App;
