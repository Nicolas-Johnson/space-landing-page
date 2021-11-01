import React from 'react';
import DestinationCard from '../Components/DesctinationCard';
import Navigation from '../Components/Nav';
import DataProvider from '../context/DataProvider';

const Destination = () => {
  return (
    <DataProvider>
      <Navigation />
      <DestinationCard />
    </DataProvider>
  );
}

export default Destination;
