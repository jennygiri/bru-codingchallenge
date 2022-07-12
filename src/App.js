import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './components/List.js';
import styled from 'styled-components';

const url = 'https://api.openbrewerydb.org/breweries?by_city=';

const App = () => {
  const [city, setCity] = useState('boston');
  //^used a useState here for future integration of search capability
  const [breweries, setBreweries] = useState([]);

  const getBreweriesByCity = () => {
    axios
      .get(url + city)
      .then((response) => {
        setBreweries(response.data.filter((b) => b['latitude']));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getBreweriesByCity();
  }, []);

  return (
    <Main className='App'>
      <Header>Bru.</Header>
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

//for enabling city search:
//const handleSearch = (term) => {
//  term = term.split(' ').join('_').toLowerCase();
//  console.log('term', term);
//  setCity(term);
//  getBreweriesByCity();
//};
