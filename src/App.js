import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.js';
import styled from 'styled-components';

const url = 'https://api.openbrewerydb.org/breweries?by_city=';

const App = () => {
  const [city, setCity] = useState('new_haven');
  const [breweries, setBreweries] = useState([]);

  const getBreweriesByCity = () => {
    axios
      .get(url + city)
      .then((response) => {
        setBreweries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getBreweriesByCity();
  }, []);

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

  //const handleSearch = (term) => {
  //  term = term.split(' ').join('_').toLowerCase();
  //  console.log('term', term);
  //  setCity(term);
  //  getBreweriesByCity();
  //};

  return (
    <Container className='App'>
      {/*<form onSubmit={handleSearch}>
        <input type='text'></input>
      </form>*/}
      <List breweries={breweries} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
