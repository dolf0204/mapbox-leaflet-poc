import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { LeafLet } from "./leafLet/LeafLet";
import { Mapbox } from "./mapbox/Mapbox";
import { count } from "console";

function App() {
  const [mapSwitcher, setMapSwitcher] = useState("");
  const [leafLetDots, setLeafLetDots] = useState(0);
  const [mapBoxDots, setMapBoxDots] = useState(0);

  const setLeaflet = () => {
    setMapSwitcher("Leaflet");
  };

  const setMapbox = () => {
    setMapSwitcher("Mapbox");
  };
  const countLeaflet = (dots: number) => {
    setLeafLetDots(dots);
  };
  const countMapbox = (dots: number) => {
    setMapBoxDots(dots);
  };
  return (
    <div className="App">
      <div className="navbar">
        <button className="leaflet-button" onClick={setLeaflet}>
          Leaflet: {leafLetDots}
        </button>
        <button className="mapbox-button" onClick={setMapbox}>
          Mapbox: {mapBoxDots}
        </button>
      </div>

      <div>
        {mapSwitcher === "Leaflet" && (
          <LeafLet countLeaflet={countLeaflet}></LeafLet>
        )}
        {mapSwitcher === "Mapbox" && (
          <Mapbox countMapbox={countMapbox}></Mapbox>
        )}
      </div>
    </div>
  );
}

export default App;
