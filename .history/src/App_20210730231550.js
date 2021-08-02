import "./App.css";
import { useAsync } from "react-async-hook";
import { getCharacter } from "rickmortyapi"; // getCharacter()
import data from "./components/data.json";
import React, { useState, useEffect } from "react";

const fetchRMChar = async (id) =>
  (await fetch(`https://rickandmortyapi.com/api/character/2`)).json();

const App = ({ id }) => {
  const asyncChar = useAsync(fetchRMChar, [id]);
  return (
    <div>
      {asyncHero.loading && <div>Loading</div>}
      {asyncHero.error && <div>Error: {asyncHero.error.message}</div>}
      {asyncHero.result && (
        <div>
          <div>Success!</div>
          <div>Name: {asyncHero.result.name}</div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div style={{ display: "flex" }} className="App">
      <p>hi</p>
    </div>
  );
}

export default App;
