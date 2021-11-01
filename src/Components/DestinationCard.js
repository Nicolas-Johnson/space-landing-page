import React, { useContext } from 'react';
import DestinationNav from './DestinationNav';
// import DataProvider from '../context/DataProvider';
import DataContext from '../context/DataContext';

const DestinationCard = () => {
  const { data: { destinations }, destination } = useContext(DataContext);

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
            <img src={ imagePath } alt={ name } />
          </div>
          <DestinationNav />
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
