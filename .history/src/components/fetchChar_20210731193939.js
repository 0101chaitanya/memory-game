import { useAsync } from "react-async-hook";
//import data from "./components/data.json";
import React from "react";
var obj = {
  table: [],
};

const FetchCharacter = (props) => {
  const { id } = props;
  const fetchRMChar = async (id) =>
    (await fetch(`https://rickandmortyapi.com/api/character/${id}`)).json();

  const asyncChar = useAsync(fetchRMChar, [id]);
  console.log(asyncChar);

  return (
    <div>
      {/* {asyncChar.loading && <div>Loading</div>}
      {asyncChar.error && <div>Error: {asyncChar.error.message}</div>}
       */}
      {asyncChar.result && (
        <div>
          <img src={asyncChar.result.image} alt={asyncChar.result.name} />
        </div>
      )}
    </div>
  );
};

export default FetchCharacter;
