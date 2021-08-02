import "./App.css";
import React from "react";
import FetchCharacter from "./components/fetchChar";

const App = () => {
  const arr = Array(12);
  const characterArray = arr.map((item, i) => {
    <FetchCharacter id={i} />;
  });
  return <div>{characterArray}</div>;
};

export default App;
