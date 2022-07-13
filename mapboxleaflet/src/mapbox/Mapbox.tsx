import React, { FC, useEffect, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import { token } from "../token";
import mapboxgl, { LngLatLike } from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "./Mapbox.css";
import { getMapboxRandomLatLng } from "../randomLatLng";

const features = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-0.1161132138455734, 51.55577759050807],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.717251782883615, -0.15814997052283064],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.169422309316126, 0.3267633774919172],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.38691150308061, 0.14407002942448988],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.94177608253743, -0.2061127089590995],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.91357863244688, -0.21135153659735795],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.84583380381167, 0.4435881612180157],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.6040896536957, -0.14960386456526908],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.012974476991204, 0.47486358706393905],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.57830743582258, 0.13157118367955056],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.50017963811726, 0.2994991890635885],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.332503596709024, 0.4576381578113009],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.61526402286174, 0.235314955770211],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.58143103921138, 0.08653927342661505],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.56854012073356, 0.21127229558348204],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.038296765219734, 0.04670066332901346],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.227561195133305, -0.14479655847151496],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.2948352795674, -0.39300804178761406],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.65255333434328, -0.3690595738332061],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.20571870262194, -0.4756278935530718],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.410546985596895, -0.008060746938797214],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.79033874193644, 0.3617652522397674],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.28272552386735, 0.257203047250105],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.20205355950785, 0.27332782325446203],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.50665956486987, 0.17879934756466342],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.42392720026167, -0.34825596562530103],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.33768182156841, 0.2730776360056457],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.69656312436143, 0.20255094006405527],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.87173269817404, 0.2774051287563828],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.95484531999993, -0.009177358468732688],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.07144051290542, 0.09146247203650248],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.30276996578146, -0.20824503990543763],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.2646305778493, -0.47401200649401765],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.58784084108783, -0.014537019129140072],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.727640883241385, 0.3734668401497365],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.27995468705175, 0.04571020060058162],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.07048055225449, 0.159647748796113],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.7300864895854, -0.2489360203091664],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.19761033728116, 0.092470712517565],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.04101998051822, -0.029156105010444078],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.83504355304141, 0.3057094522504491],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.767171026033154, -0.49906915469932733],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.797482898733904, 0.30133728172107754],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.09270971084345, 0.2195891729917221],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.02072135922838, 0.16792070547207527],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.37341478961668, -0.3904207186507731],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.13014688315832, -0.16057781743384658],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.94434292586596, -0.1048951238376139],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.19050903970455, -0.06500728490495367],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.421644253624855, 0.280592245933428],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.205257060590036, 0.36349558564636686],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.71932906963758, 0.43943069109121735],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.579852740188336, -0.01990978470682614],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.994529040320266, 0.17528339840222085],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.67000570024017, 0.24222983969833978],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.07908836815215, -0.28466635881140734],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.574186104234236, 0.11913617279799071],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.21175719487094, -0.3696271438610039],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.250848714167645, -0.333352565125556],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.6469416256829, -0.37698316974320223],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.39692452632087, 0.310759867215475],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.6867588800452, -0.08497905180293319],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.87417442977908, 0.24522414063850229],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.260797570734326, -0.3604922829239976],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.12784539054596, 0.24022221886007022],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.22951370890125, -0.2546801401707568],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.66260582909437, 0.1339037830589982],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.39872939679841, -0.20980933463138873],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.50668062741819, -0.4551917031608148],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.66967031059325, 0.38853884589428067],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.98077448531907, -0.3483808442731071],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.47008470288805, 0.043794726348267865],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.07815586565001, -0.08230333982810967],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.40218080224814, -0.04357516209145418],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.891609345495326, -0.3014723709964915],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.33809958337002, 0.46227763900735663],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.874551999531754, 0.1360918058081011],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.15859217474614, -0.16818580110027548],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.917316385582836, 0.4004206968850019],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.09904817720353, -0.06474891980636],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.42822621474053, -0.07971952021600681],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.52498214879435, -0.22473880893566922],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.795985578455834, 0.025351801511304783],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.14947653973235, 0.15348151415141875],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.31287530492744, -0.4901195844270141],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.09280879126042, -0.4919295602823579],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.95529293353943, -0.47977030535907983],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.73236800514388, 0.45657910947724556],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.9196746053036, 0.3180144941039429],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.66534614343524, -0.34293673233895583],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.74816960292773, -0.2688313135491136],
    },
    properties: {},
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.94378317470206, -0.4441160584731396],
    },
    properties: {},
  },
];

const initialFeatures = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [51.55577759050807, -0.1161132138455734],
    },
    properties: {},
  },
];

const initialMapResponse: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
  type: "FeatureCollection",
  features: initialFeatures as GeoJSON.Feature<
    GeoJSON.Geometry,
    GeoJSON.GeoJsonProperties
  >[],
};

const initialFeautureCollection = {
  type: "geogjson",
  data: initialMapResponse,
};

mapboxgl.accessToken = token;

interface IProps {
  countMapbox: (dots: number) => void;
}

export const Mapbox: FC<IProps> = (props: IProps) => {
  const [map, setMap] = useState<any>();

  const thetas: number[] = [];
  const geojson: any = initialFeautureCollection;
  mapboxgl.accessToken = token;
  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/outdoors-v11",
        center: [-0.09, 51.505],
        zoom: 10,
      })
    );
  }, []);

  if (map) {
    map.on("load", () => {
      map.addSource("circlesSet", { type: "geojson", data: geojson.data });

      map.addLayer({
        id: "circlesSet",
        type: "circle",
        source: "circlesSet",
        paint: {
          "circle-radius": 5,
          "circle-color": "red",
          "circle-opacity": 0.5,
        },
      });

      const circlesUpdater = setInterval(() => {
        for (let i = 0; i < thetas.length; i++) {
          let ll = geojson.data.features[i].geometry.coordinates;
          let theta = thetas[i];

          const radEarth = 6378; // km
          const dy = 0.01 * theta;
          const dx = 0.01 * theta;
          const degFactor = theta * 180;
          const newLng = ll[0] + (dy / radEarth) * (degFactor / Math.PI);
          const newLat =
            ll[1] +
            ((dx / radEarth) * (degFactor / Math.PI)) /
              Math.cos((ll[0] * Math.PI) / degFactor);

          const newPos = [newLat, newLng];
          if (map.getBounds().contains(newPos as LngLatLike)) {
            geojson.data.features[i].geometry.coordinates = newPos;
          } else {
            geojson.data.features[i].geometry.coordinates =
              getMapboxRandomLatLng();
          }
        }

        if (thetas.length > 2000) {
          clearInterval(circlesUpdater);
        }
        if (thetas.length > 0) {
          props.countMapbox(thetas.length);
        }

        thetas.push(Math.random());
        const newCircle = {
          geometry: {
            coordinates: getMapboxRandomLatLng(),
            type: "Point",
          },
          type: "Feature",
        };
        geojson.data.features.push(newCircle);

        map.getSource("circlesSet").setData(geojson.data);
      }, 5);
    });
  }

  return <div className="mapbox-container" id="map"></div>;
};

export default Mapbox;
