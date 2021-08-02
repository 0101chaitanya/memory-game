import data from "./data.json";
import React, { useState } from "react";

const FetchCharacter = (props) => {
  const [state, setState] = useState(props.item.clicked);
  console.log(props.item);
  const onClick = (e) => {
    console.log(JSON.parse(e.target.dataset.item));
    setState(!state);
  };
  console.log(state);
  return (
    <div>
      <img
        src={props.item.image}
        data-item={JSON.stringify(props.item)}
        onClick={onClick}
        alt={props.item.id}
      />
    </div>
  );
};
export default FetchCharacter;
