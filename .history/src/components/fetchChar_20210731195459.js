import data from "./data.json";
import React from "react";

const FetchCharacter = (props) => {
  return (
    <div>
      <img src={data[0].image} alt={data[0].id} />
    </div>
  );
};
export default FetchCharacter;
