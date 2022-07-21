import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = ({ companies }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 51.509865, lng: -0.118092 }}
      mapContainerClassName="map-container"
    >
      {companies.map((company) => {
        return (
          <Marker
            key={company.id}
            position={{
              lat: company.location.latitude,
              lng: company.location.longitude,
            }}
            onClick={() => {
              console.log(company);
            }}
          ></Marker>
        );
      })}
    </GoogleMap>
  );
};

export default Map;
