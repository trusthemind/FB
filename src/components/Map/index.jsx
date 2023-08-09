import React, { useEffect } from 'react';
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import "./style.scss"

const TomMap = () => {
  useEffect(() => {
      const map = tt.map({
      key: "S9LKw7rOVuyqOqFniv1wGWunDwxH2pag",
      container: "map",
      center: [28.6765, 50.2547], // Zhytomyr coordinates (longitude, latitude)
      zoom: 16,
    });

    // Add a marker for Zhytomyr
    new tt.Marker().setLngLat([28.6765, 50.2547]).addTo(map);
  }, []);

  return <div id="map"></div>;
};

export default TomMap;
