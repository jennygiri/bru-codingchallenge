import { useState, useEffect } from 'react';
import Details from './Details.js';
import styled from 'styled-components';
import photo from './../beer.jpg';

const List = ({ breweries }) => {
  const [detailsToggle, setDetailsToggle] = useState(false);
  const [selected, setSelected] = useState({});

  const handleClick = (event) => {
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
            <TextBG>
              <Text>{brewery.name}</Text>
              <Text>
                {brewery.street} | {brewery.city}, {brewery.state} |{' '}
                {brewery.postal_code}
              </Text>
              <Text
              //style={{
              //  border: '1px solid black',
              //  width: '30%',
              //  borderRadius: '10px',
              //  textAlign: 'center',
              //  margin: '5px',
              //}}
              >
                Brewery Type: {brewery.brewery_type}
              </Text>
              <Link
                href={brewery.website_url}
                target='_blank'
                rel='noreferrer noopener'
              >
                Visit Website
              </Link>
              {brewery.latitude ? (
                <Button value={index} onClick={(event) => handleClick(event)}>
                  Navigate
                </Button>
              ) : (
                <div>No navigation information available</div>
              )}
            </TextBG>
          </Card>
        ))}
    </div>
  );
};

const Link = styled.a`
  color: #3f1e09;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`;

const Text = styled.h3`
  color: black;
  font-weight: 500;
`;

const TextBG = styled.div`
  background-color: #ffffffb3;
  box-shadow: 0 0 5px 10px #ffffffb3;
`;

const Card = styled.div`
  margin: 20px;
  padding: 30px;
  box-shadow: 5px 5px 20px grey;
  background-image: url(${photo});
  height: 40%;
  width: 80%;
  color: white;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 10px;
  margin: 20px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  font-size: medium;
`;

export default List;
