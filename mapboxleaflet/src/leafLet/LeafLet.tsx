import { FC, useCallback, useEffect } from "react";
import "./LeafLet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLng } from "leaflet";
import React from "react";
import { getRandomLatLng } from "../randomLatLng";

interface ICircleMeta {
  theta: number;
  circle: L.Circle;
}

interface IProps {
  countLeaflet: (dots: number) => void;
}

export const LeafLet: FC<IProps> = (props: IProps) => {
  let leafMap: L.Map;

  const initializeMap = useCallback(() => {
    return (leafMap = L.map("map", {
      center: [51.505, -0.09],
      zoom: 13,
    }));
  }, []);

  useEffect(() => {
    if (!leafMap) {
      initializeMap();
    }
  }, []);

  const allCircles: ICircleMeta[] = [];

  const circlesUpdater = setInterval(() => {
    allCircles.forEach((circleMeta) => {
      const ll = circleMeta.circle.getLatLng();

      const radEarth = 6378; // km
      const dy = 0.01 * circleMeta.theta;
      const dx = 0.01 * circleMeta.theta;
      const degFactor = circleMeta.theta * 180; // curve factor
      const newLat = ll.lat + (dy / radEarth) * (degFactor / Math.PI);
      const newLng =
        ll.lng +
        ((dx / radEarth) * (degFactor / Math.PI)) /
          Math.cos((ll.lat * Math.PI) / degFactor);

      const newPos = new L.LatLng(newLat, newLng);
      if (leafMap.getBounds().contains(newPos)) {
        circleMeta.circle.setLatLng(newPos);
      } else {
        (circleMeta.circle as any).setLatLng(getRandomLatLng());
      }
    });

    if (allCircles.length > 2000) {
      clearInterval(circlesUpdater);
    }
    if (allCircles.length > 0) {
      props.countLeaflet(allCircles.length);
    }
    if (leafMap) {
      const newCircle = L.circle(getRandomLatLng() as unknown as LatLng, 50, {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 50,
      }).addTo(leafMap);

      allCircles.push({
        circle: newCircle,
        theta: Math.random() * 2 - 1, //rotation angle
      });
    }
  }, 5);

  return (
    <div className="leaflet-container" id="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} id="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
