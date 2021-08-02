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
      {asyncChar.loading && <div>Loading</div>}
      {asyncChar.error && <div>Error: {asyncChar.error.message}</div>}
      {asyncChar.result && (
        <div>
          <div>Success!</div>
          <div>Name: {asyncChar.result.name}</div>
        </div>
      )}
    </div>
  );
};

export default App;
