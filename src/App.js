import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './components/List.js';
import styled from 'styled-components';

const url = 'https://api.openbrewerydb.org/breweries?by_city=';

const App = () => {
  const [city, setCity] = useState('boston');
  const [searchTerm, setSearchTerm] = useState('');
  const [breweries, setBreweries] = useState([]);

  const getBreweriesByCity = (cityName = city) => {
    axios
      .get(url + cityName)
      .then((response) => {
        setBreweries(response.data.filter((b) => b['latitude']));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      let temp = searchTerm.split(' ').join('_').toLowerCase();
      setCity(temp);
      getBreweriesByCity(temp);
    }
  };

  useEffect(() => {
    if (searchTerm === '') {
      setCity('boston');
      getBreweriesByCity('boston');
    }
  }, [searchTerm]);

  useEffect(() => {
    getBreweriesByCity();
  }, []);

  return (
    <Main className='App'>
      <Header>
        Bru.
        <Search
          onChange={handleChange}
          value={searchTerm}
          placeholder='Search for Breweries in any City'
          onKeyPress={handleSearch}
        ></Search>
      </Header>
      <Container>
        <List breweries={breweries} />
      </Container>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Header = styled.div`
  width: 100vw;
  height: 120px;
  font: 100px Arial, sans-serif;
  border-top: 0px;
  background-color: #3a2516;
  padding: 20px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
`;

const Search = styled.input`
  position: fixed;
  top: 5%;
  right: 5%;
  height: 3%;
  width: 30%;
`;

const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  overflow: scroll;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`;

export default App;

//for if I want to render all locations on one single map:
//const generatePositionList = () => {
//  let temp = [];
//  for (let i = 0; i < breweries.length; i++) {
//    if (breweries[i].latitude && breweries[i].longitude) {
//      let coords = {
//        lat: breweries[i]['latitude'],
//        lng: breweries[i]['longitude'],
//      };
//      temp.push(coords);
//    }
//  }
//  setLocations(temp);
//};
