import data from "./data.json";
import React, { useState } from "react";

const FetchCharacter = (props) => {
  return (
    <div>
      <img
        src={props.item.image}
        data-item={JSON.stringify(props.item)}
        onClick={(e) => props.onClick(e)}
        alt={props.item.id}
      />
    </div>
  );
};
export default FetchCharacter;
