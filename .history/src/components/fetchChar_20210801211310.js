import data from "./data.json";
import React from "react";

const FetchCharacter = (props) => {
  console.log(props.item);
  const onClick = (e) => {
    console.log(JSON.parse(e.target.dataset.item));
  };

  return (
    <div>
      <img
        src={props.item.image}
        data-item={props.item}
        onClick={onClick}
        alt={props.item.id}
      />
    </div>
  );
};
export default FetchCharacter;
