import data from "./data.json";
import React from "react";
var obj = {
  table: [],
};

const FetchCharacter = (props) => {
  return (
    <div>
      <img src={data[0].image} alt={haha} />
    </div>
  );
};
export default FetchCharacter;
