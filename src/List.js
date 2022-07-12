import { useState, useEffect } from 'react';
import Details from './Details.js';
import styled from 'styled-components';

const List = ({ breweries }) => {
  const [detailsToggle, setDetailsToggle] = useState(false);
  const [selected, setSelected] = useState({});

  const handleClick = (event) => {
    //event.preventDefault();
    console.log('🤷🏼‍♀️', event.target.value);
    //console.log(event.target);
    setSelected(breweries[event.target.value]);

    setDetailsToggle(true);
  };
  return (
    <div>
      {detailsToggle && (
        <Details selected={selected} setDetailsToggle={setDetailsToggle} />
      )}
      {breweries.length &&
        breweries.map((brewery, index) => (
          <Card key={index} value={index}>
            <button value={index} onClick={(event) => handleClick(event)}>
              Get further details
            </button>
            <div>{brewery.name}</div>
            <div>{brewery.brewery_type}</div>
            <div>
              {brewery.street}, {brewery.city}, {brewery.state},{' '}
              {brewery.postal_code}
            </div>
            <a
              href={brewery.website_url}
              target='_blank'
              rel='noreferrer noopener'
            >
              Visit Website
            </a>
          </Card>
        ))}
    </div>
  );
};

const Card = styled.div`
  border: 5px solid black;
  margin: auto;
  padding: 10px;
`;

export default List;
