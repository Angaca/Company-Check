import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 51.509865, lng: -0.118092 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
};

export default Map;
