import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <Board nrows={7} ncols={7} chanceLightStartsOn={0.9}/>
      </div>
  );
}

export default App;
