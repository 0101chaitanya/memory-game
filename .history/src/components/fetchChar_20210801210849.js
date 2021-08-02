import data from "./data.json";
import React from "react";

const FetchCharacter = (props) => {
  console.log(props.item);
  return (
    <div>
      <img src={props.item.src} alt={props.item.id} />
    </div>
  );
};
export default FetchCharacter;
