import data from "./data.json";
import React from "react";

const FetchCharacter = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.id} />
    </div>
  );
};
export default FetchCharacter;
