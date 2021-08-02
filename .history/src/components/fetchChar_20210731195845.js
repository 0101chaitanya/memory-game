import data from "./data.json";
import React from "react";

const FetchCharacter = (props) => {
  return (
    <div>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt={props.id}
      />
    </div>
  );
};
export default FetchCharacter;
