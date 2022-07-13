import { useState } from 'react';
import Details from './Details.js';
import Card from './Card.js';

const List = ({ breweries }) => {
  const [detailsToggle, setDetailsToggle] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <div>
      {detailsToggle && (
        <Details selected={selected} setDetailsToggle={setDetailsToggle} />
      )}
      {breweries.length &&
        breweries.map((brewery, index) => (
          <Card
            key={index}
            brewery={brewery}
            index={index}
            setSelected={setSelected}
            setDetailsToggle={setDetailsToggle}
            breweries={breweries}
          ></Card>
        ))}
    </div>
  );
};

export default List;
