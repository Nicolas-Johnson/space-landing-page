import React from 'react';
import Navigation from '../Components/Nav';
import DataProvider from '../context/DataProvider';

const Crew = () => {
  return (
    <DataProvider>
      <Navigation />
      <div>
        <h1>Crew Page</h1>
      </div>
    </DataProvider>
  );
}

export default Crew;
