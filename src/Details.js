//import { useState, useEffect, useCallback, useMemo } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from './config.js';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Details = ({ selected, setDetailsToggle }) => {
  const center = { lat: 43, lng: -75 };
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };
  console.log('selected', selected);
  //useEffect(() => {
  //  if (selected) {
  //    setCenter({
  //      lat: parseFloat(selected['lat']),
  //      lng: parseFloat(selected['lng']),
  //    });
  //  }
  //}, [selected]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const onMarkerLoad = (marker) => {
    console.log('marker', marker);
  };

  const leaveModal = () => {
    setDetailsToggle(false);
  };

  return (
    <Background onClick={leaveModal}>
      <Wrapper>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={3}
            center={center}
            //onLoad={onLoad}
            //onUnmount={onUnmount}
          >
            {selected && (
              <Marker
                onLoad={onMarkerLoad}
                position={{
                  lat: parseFloat(selected['latitude']),
                  lng: parseFloat(selected['longitude']),
                }}
              />
            )}
          </GoogleMap>
        )}
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  position: fixed;
  background: antiquewhite;
  width: 80%;
  height: 80%;
  color: rgba(0, 0, 139, 0.7);
  top: 10%;
  left: 10%;
`;

//const StyledMap = styled.GoogleMap`
//  width: 80%;
//  height: 80%;
//  border-radius: 10px 0 0 10px;
//  background: #000;
//`;

export default Details;

//const [map, setMap] = useState(null);

//const onLoad = useCallback(function callback(map) {
//  const bounds = new window.google.maps.LatLngBounds(center);
//  map.fitBounds(bounds);
//  setMap(map);
//}, []);

//const onUnmount = useCallback(function callback(map) {
//  setMap(null);
//}, []);
