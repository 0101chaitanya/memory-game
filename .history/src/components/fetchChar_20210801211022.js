import data from "./data.json";
import React from "react";

const FetchCharacter = (props) => {
  console.log(props.item);
  const onClick = (e) => {
    console.log(e.props.item);
  };

  return (
    <div>
      <img src={props.item.image} onClick={onClick} alt={props.item.id} />
    </div>
  );
};
export default FetchCharacter;
