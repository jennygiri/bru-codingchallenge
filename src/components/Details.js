import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from './../config.js';
import styled from 'styled-components';

const Details = ({ selected, setDetailsToggle }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
  };

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
    <Background>
      <Wrapper>
        <Button onClick={leaveModal}>x</Button>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={{
              lat: parseFloat(selected['latitude']),
              lng: parseFloat(selected['longitude']),
            }}
          >
            {selected && (
              <>
                <InfoWindow
                  position={{
                    lat: parseFloat(selected['latitude']) + 0.001,
                    lng: parseFloat(selected['longitude']),
                  }}
                >
                  <div>
                    <Text>
                      <div>{selected.name}</div>
                      <div>
                        {selected.street} | {selected.city}, {selected.state} |{' '}
                        {selected.postal_code}
                      </div>
                    </Text>
                  </div>
                </InfoWindow>
                <Marker
                  onLoad={onMarkerLoad}
                  position={{
                    lat: parseFloat(selected['latitude']),
                    lng: parseFloat(selected['longitude']),
                  }}
                />
              </>
            )}
          </GoogleMap>
        )}
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  position: absolute;
  background: antiquewhite;
  width: 80%;
  height: 80%;
  color: rgba(0, 0, 139, 0.7);
  top: 10%;
  left: 10%;
`;

const Text = styled.div`
  color: black;
  font-size: x-large;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
`;

const Button = styled.button`
  position: fixed;
  z-index: 5;
  /* bottom: 5px; */
  height: 50px;
  width: 50px;
  top: 3%;
  left: 3%;
  font-size: large;
`;

export default Details;
