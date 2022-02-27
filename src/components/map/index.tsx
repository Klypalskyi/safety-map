import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import style from "./style.css";

const getRadius = (km: number) => km * 1000;

const MyMapComponent = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });

      new window.google.maps.Circle({
        strokeColor: " #0057b7",
        strokeOpacity: 0.65,
        strokeWeight: 3,
        fillColor: " #ffd700",
        fillOpacity: 0.5,
        center: { lat: 50.4500336, lng: 30.5241361 },
        radius: getRadius(8),
        map,
      });
    }
  }, []);

  useEffect(() => {}, []);

  return <div className={style.mapContainer} ref={ref} id="map" />;
};

export default MyMapComponent;
