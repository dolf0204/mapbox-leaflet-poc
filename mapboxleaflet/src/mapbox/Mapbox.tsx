import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

// <link
//   rel="stylesheet"
//   href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
//   integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
//   crossOrigin=""
// />;
// <script
//   src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
//   integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
//   crossOrigin=""
// ></script>;

export const Mapbox: FC = () => {
  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
