import "./App.css";
import React from "react";
import FetchCharacter from "./components/fetchChar";

const App = () => {
  return (
    <div>
      <FetchCharacter id={2} />
    </div>
  );
};

export default App;
