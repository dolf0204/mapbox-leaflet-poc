import { FC, useState } from "react";
import "./LeafLet.css";
import { Circle, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng, LatLngExpression } from "leaflet";
import React from "react";

export const LeafLet: FC = () => {
  const getRandomLatLng = () => {
    return [51 + 1 * Math.random(), -0.5 + 1 * Math.random()];
  };

  const LocationMarkers = () => {
    const initialMarkers: LatLng[] = [new LatLng(51.505, -0.09)];
    const [markers, setMarkers] = useState(initialMarkers);

    setInterval(() => {
      const rnd = getRandomLatLng() as unknown as LatLng;
      markers.push(rnd);
      setMarkers((prevValue) => [...prevValue, rnd]);
    }, 1000);

    return (
      <React.Fragment>
        {markers.map((marker) => (
          <Circle
            color="red"
            fillColor="#f03"
            fillOpacity={0.5}
            center={marker as LatLngExpression}
            radius={1000}
          />
        ))}
      </React.Fragment>
    );
  };

  return (
    <div className="leaflet-container">
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarkers />
      </MapContainer>
    </div>
  );
};
