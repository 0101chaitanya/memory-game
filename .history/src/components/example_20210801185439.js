import React, { useState, useEffect } from "react";
const ItemDetail = ({ match }) => {
  const [item, setItem] = useState({
    name: "",
    images: {},
  });

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const itemFetched = await fetchItem.json();
    setItem(itemFetched.data.item);
  };
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.background} alt={item.name} />
    </div>
  );
};
export default ItemDetail;
