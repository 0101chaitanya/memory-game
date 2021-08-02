import data from "./data.json";
import React, { useState } from "react";

const FetchCharacter = (props) => {
  //const [state, setState] = useState(props.item.clicked);
  return (
    <div>
      <img
        src={props.item.image}
        onClick={(e) => props.onClick(e)}
        alt={props.item.id}
      />
    </div>
  );
};
export default FetchCharacter;
