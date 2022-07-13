import styled from 'styled-components';
const Card = ({ brewery, index, setSelected, setDetailsToggle, breweries }) => {
  const handleClick = (index, event) => {
    if (event.target.nodeName !== 'A') {
      setSelected(breweries[index]);
      setDetailsToggle(true);
    }
  };

  return (
    <Main onClick={(event) => handleClick(index, event)}>
      <TextBG>
        <h1>{brewery.name}</h1>
        <Text>
          {brewery.street} | {brewery.city}, {brewery.state} |{' '}
          {brewery.postal_code}
        </Text>
        <Text>Brewery Type: {brewery.brewery_type}</Text>
        <Link
          href={brewery.website_url}
          target='_blank'
          rel='noreferrer noopener'
        >
          Visit Website
        </Link>
      </TextBG>
    </Main>
  );
};

export default Card;

const Main = styled.div`
  margin: 20px;
  padding: 10px 20px 20px 20px;
  box-shadow: 5px 5px 20px grey;
  background-color: #eeceae;
  height: 40%;
  width: 80%;
  color: white;
  color: black;
  font-weight: 500;
  cursor: pointer;
`;

const Text = styled.div`
  padding: 5px 10px 10px 10px;
`;

const Link = styled.a`
  color: #3f1e09;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  padding: 20px 10px 5px 10px;
`;

const TextBG = styled.div``;
