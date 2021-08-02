import data from "./data.json";
import React from "react";

const FetchCharacter = (props) => {
  return (
    <div>
      <img styles={{ length: "1rem" }} src={props.src} alt={props.id} />
    </div>
  );
};
export default FetchCharacter;
