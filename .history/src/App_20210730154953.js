import "./App.css";
import data from "./components/data.json";
import React, { useState, useEffect } from "react";
function App() {
  
  const array = data.map((item, i => {
    <ol>
      <li>{item.id}</li>
    <li>{item.name}</li>
      <li>{item.clicked}</li>
      <li><img src={item.image} /></li>
      <li>{item.occupation}</li>
    </ol>
   });
    return (<div className="App">

  </div>);
}

export default App;
