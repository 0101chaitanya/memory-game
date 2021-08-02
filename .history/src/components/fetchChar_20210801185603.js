import data from "./data.json";
import React from "react";

const FetchCharacter = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.id} />
    </div>
  );
};
export default FetchCharacter;
