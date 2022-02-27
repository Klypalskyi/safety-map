import { h } from "preact";
import { useRef, useEffect, useState } from "preact/hooks";
import style from "./style.css";
import coordinatesData from "../../geo/coordtinates.js";
import { flattenDeep, flattenDepth } from "lodash";
import { LatLngLiteral } from "leaflet";

const transformForPolygon = (entity: number[][]) =>
  entity.map(([lng, lat]) => ({ lat, lng }));

const MyMapComponent = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef(null);
  const polygonsData: LatLngLiteral[][] = [];

  useEffect(() => {
    if (ref && ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });

      coordinatesData.forEach(({ geojson: { coordinates } }) => {
        flattenDepth(coordinates, 1).forEach((entity) => {
          polygonsData.push(transformForPolygon(entity));
        });
      });
      polygonsData.forEach((paths) => {
        new window.google.maps.Polygon({
          paths,
          strokeColor: " #0057b7",
          strokeOpacity: 0.65,
          strokeWeight: 3,
          fillColor: " #0057b7",
          fillOpacity: 0.5,
          map,
        });
      });
    }
  }, []);

  console.log();

  useEffect(() => {}, []);

  return <div className={style.mapContainer} ref={ref} id="map" />;
};

export default MyMapComponent;
