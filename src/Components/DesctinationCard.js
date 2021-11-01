import React, { useState, useContext } from 'react';
import DestinationNav from '../Components/DestinationNav';
// import DataProvider from '../context/DataProvider';
import DataContext from '../context/DataContext';

const DestinationCard = () => {
  const { data: { destinations } } = useContext(DataContext);
  const [destination, setDestination] = useState('Moon');

  const handleDesination = (destinationPiquer) => {
    setDestination(destinationPiquer);    
  }

  if (destinations) {
    const dest = destinations.filter((d) => d.name === destination);

    var card = dest.map((d) => {
      var name = d.name;
      var imagePath = d.images.png;
      var description = d.description;
      var distance = d.distance;
      var travel = d.travel;
      return (
        <div key={name}>
          <div>
            <h1>01 Pick your destination</h1>
            <img src={ imagePath } alt={`Image of ${name}`} />
          </div>
          <DestinationNav handleDesination={ handleDesination }/>
          <div>
            <h1>{ name }</h1>
            <p>
              {description}
            </p>
            <div>
              <p>Avg. distance</p>
              <h2>{ distance }</h2>
            </div>
            <div>
              <p>Est. travel time</p>
              <h2>{ travel }</h2>
            </div>
          </div>
        </div>
      );
    })
  }

  

  return (
    <div>
      { destinations && card}
    </div>
  );
}

export default DestinationCard;
