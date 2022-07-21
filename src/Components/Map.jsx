import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map = ({ companies }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(() => ({ lat: 51.509865, lng: -0.118092 }), []);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const closeInfoWindow = () => {
    setSelectedCompany(null);
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
      onClick={closeInfoWindow}
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
              setSelectedCompany(company);
            }}
          />
        );
      })}
      {selectedCompany && (
        <InfoWindow
          position={{
            lat: selectedCompany.location.latitude,
            lng: selectedCompany.location.longitude,
          }}
          onCloseClick={closeInfoWindow}
        >
          <div className="info-window">
            <h3>
              Name: {selectedCompany.company} ({selectedCompany.stockSymbol})
            </h3>
            <h4>Sector: {selectedCompany.sector}</h4>
            <h4>Address: {selectedCompany.address}</h4>
            <h5>ID: {selectedCompany.id}</h5>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
