import React, { useState } from "react";
import "./App.css";
import { LeafLet } from "./leafLet/LeafLet";
import { Mapbox } from "./mapbox/Mapbox";

function App() {
  const [mapSwitcher, setMapSwitcher] = useState("");
  const [leafLetDots, setLeafLetDots] = useState(0);
  const [mapBoxDots, setMapBoxDots] = useState(0);
  const [leafletCounter, setLeafletCounter] = useState(0);
  const [mapboxCounter, setMapboxCounter] = useState(0);

  const [startLeafletCounter, setStartLeafletCounter] = useState(false);
  const [startMapboxCounter, setStartMapboxCounter] = useState(false);

  const setLeaflet = () => {
    setMapSwitcher("Leaflet");
  };

  const setMapbox = () => {
    setMapSwitcher("Mapbox");
  };
  const countLeaflet = (dots: number) => {
    setLeafLetDots(dots);
    setStartLeafletCounter(true);
  };
  const countMapbox = (dots: number) => {
    setMapBoxDots(dots);
    setStartMapboxCounter(true);
  };

  React.useEffect(() => {
    if (startLeafletCounter && leafLetDots < 2000) {
      setTimeout(() => setLeafletCounter(leafletCounter + 1), 1000);
    }
  }, [leafletCounter, startLeafletCounter]);

  React.useEffect(() => {
    if (startMapboxCounter && mapBoxDots < 2000) {
      setTimeout(() => setMapboxCounter(mapboxCounter + 1), 1000);
    }
  }, [mapboxCounter, startMapboxCounter]);

  return (
    <div className="App">
      <div className="navbar">
        <button className="leaflet-button" onClick={setLeaflet}>
          Leaflet: {leafLetDots} - Time: {leafletCounter} s
        </button>
        <button className="mapbox-button" onClick={setMapbox}>
          Mapbox: {mapBoxDots} - Time: {mapboxCounter} s
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
