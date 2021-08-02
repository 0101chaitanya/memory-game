import React from "react";

const FetchCharacter = (props) => {
  return (
    <div>
      <img
        src={props.item.image}
        data-item={JSON.stringify(props.item)}
        onClick={(e) => props.onClick(e)}
        alt={props.item.id}
      />
      <p>
        {props.item.name},{props.item.id}
      </p>
    </div>
  );
};
export default FetchCharacter;
