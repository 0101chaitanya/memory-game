import data from "./data.json";
import React from "react";

const FetchCharacter = (props) => {
  return (
    <div>
      <img src={props.item.src} alt={props.item.id} />
    </div>
  );
};
export default FetchCharacter;
