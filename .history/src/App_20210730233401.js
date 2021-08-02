import "./App.css";
import React from "react";
import FetchCharacter from "./components/fetchChar";

const App = () => {
  const arr = [...Array(12).keys()].map((i) => i + 1);
  const characterArray = arr.map((item, i) => {
    return <FetchCharacter id={i} />;
  });
  console.log(characterArray);
  return <div>{characterArray}</div>;
};

export default App;
