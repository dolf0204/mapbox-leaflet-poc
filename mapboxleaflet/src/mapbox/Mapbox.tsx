// import mapboxgl from "mapbox-gl";
import { LngLatLike } from "maplibre-gl";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import MapGL, { CircleLayer, Point, Source } from "react-map-gl";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { getRandomLatLng } from "../randomLatLng";
import { token } from "../token";
import "./Mapbox.css";

const initialViewport = {
  latitude: 44.5103274112117,
  longitude: 16.01887195499351,
  zoom: 7,
  bearing: 0,
  pitch: 0,
  antialias: true,
};

const initialLayer: CircleLayer = {
  id: "circlesSet",
  type: "circle",
  source: "circlesSet",
};

interface IGeometry {
  type: "Circle";
  coordinates: number[];
}

interface IFeature {
  type: "Feature";
  geometry: IGeometry;
  properties: any;
}

interface IFeatureCollection {
  type: string;
  features: IFeature[];
}

const initialFeature: GeoJSON.Feature<
  GeoJSON.Geometry,
  GeoJSON.GeoJsonProperties
> = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [51.505, -0.09],
  },
  properties: {},
};

const initialCoordinates = [51.505, -0.09];

const initialCircleCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
  type: "FeatureCollection",
  features: [initialFeature],
};
// GeoJSON.FeatureCollection

const Map = ReactMapboxGl({
  accessToken: token,
});

mapboxgl.accessToken = token;

export const Mapbox: FC = () => {
  // let mapboxMap: mapboxgl.Map;
  // const [mapState, setMapState] = useState<mapboxgl.Map | null>(null);
  // // debugger;
  // // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN!;

  // const geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry> =
  //   initialCircleCollection;

  // const [thetas, setThetas] = useState<number[]>([]);

  // const setMapRef = (map: any) => {
  //   if (map && !mapState) {
  //     debugger;
  //     const mapGL = map.getMap();
  //     map.setRef()
  //     // mapboxMap = mapGL;
  //     setMapState(mapGL);
  //   }
  // };

  // // const initializeMap = useCallback(() => {
  // //   mapboxMap.addSource("circlesSet", { type: "geojson", data: refData });
  // //   return mapboxMap.addLayer({
  // //     id: "circlesSet",
  // //     type: "circle",
  // //     source: "circlesSet",
  // //   });
  // // }, []);

  // // useEffect(() => {
  // //   if (!mapboxMap) {
  // //     initializeMap();
  // //   }
  // // }, []);

  // const circlesUpdater = setInterval(() => {
  //   if (mapState) {
  //     debugger;

  //     for (let i = 0; i < thetas.length; i++) {
  //       let ll =
  //         (geojson.features[0].geometry as any).coordinates ??
  //         initialCoordinates;
  //       let theta = thetas[i];

  //       const radEarth = 6378; // km
  //       const dy = 0.01 * theta;
  //       const dx = 0.01 * theta;
  //       const degFactor = theta * 180;
  //       const newLng: number = ll[0] + (dy / radEarth) * (degFactor / Math.PI);
  //       const newLat: number =
  //         ll[1] +
  //         ((dx / radEarth) * (degFactor / Math.PI)) /
  //           Math.cos((ll[0] * Math.PI) / degFactor);

  //       const newPos = [newLat, newLng];
  //       // debugger;
  //       if (mapState.getBounds().contains(newPos as LngLatLike)) {
  //         (geojson.features[0].geometry as any).coordinates = newPos;
  //       } else {
  //         (geojson.features[0].geometry as any).coordinates = getRandomLatLng();
  //       }
  //     }

  //     if (thetas.length > 2000) {
  //       clearInterval(circlesUpdater);
  //     }

  //     // Add another circle with random direction
  //     thetas.push(Math.random());
  //     const newFeature = {
  //       type: "Feature",
  //       geometry: {
  //         type: "Point",
  //         coordinates: getRandomLatLng(),
  //       },
  //       properties: {},
  //     };
  //     // (geojson.features[0].geometry as any).coordinates.push(getRandomLatLng());
  //     geojson.features.push(newFeature as any);

  //     // Update the map
  //     // mapboxMap.getSource("circlesSet").setData(refData);
  //     const source: mapboxgl.GeoJSONSource = mapState.getSource(
  //       "circlesSet"
  //     ) as mapboxgl.GeoJSONSource;
  //     source.setData(geojson);
  //   }
  // }, 5);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    (map.current as any) = new mapboxgl.Map({
      container: (mapContainer as any).current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-0.09, 51.505],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    (map.current as any).on("move", () => {
      setLng((map.current as any).getCenter().lng.toFixed(4));
      setLat((map.current as any).getCenter().lat.toFixed(4));
      setZoom((map.current as any).getZoom().toFixed(2));
    });
  });

  return (
    <div className="mapbox-container" id="map">
      {/* <MapGL
        {...initialViewport}
        ref={(map) => setMapRef(map)}
        // width="100%"
        // height="100%"
      >
        <Source id="circlesSet" type="geojson" data={geojson}>
          <Layer {...initialLayer} />
        </Source>
      </MapGL> */}
      {/* <Map
        // ref={(map) => setMapRef(map)}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Source id="circlesSet" type="geojson" data={geojson}>
          <Layer {...initialLayer} />
        </Source>
      </Map> */}
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
