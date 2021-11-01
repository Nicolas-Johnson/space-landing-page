import React from 'react';
import Navigation from '../Components/Nav';
import DataProvider from '../context/DataProvider';

const Destination = () => {
  return (
    <DataProvider>
      <Navigation />
      <div>
        <div>
          <div className="image">
            <h1>01 Pick your destination</h1>
            <img src="image-moon.png" alt={`Image of ${'moon'}`} />
          </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default Destination;
