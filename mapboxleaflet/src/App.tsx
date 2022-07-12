import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LeafLet } from "./leafLet/LeafLet";
import { Mapbox } from "./mapbox/Mapbox";
import Mapbox2 from "./mapbox/Mapbox2";
import Mapbox3 from "./mapbox/Mapbox3";

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <div>
        {/* <LeafLet></LeafLet> */}
        <Mapbox3></Mapbox3>
      </div>
    </div>
  );
}

export default App;
