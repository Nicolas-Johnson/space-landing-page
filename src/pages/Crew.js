import React from 'react';
import CrewCard from '../Components/CrewCard';
import Navigation from '../Components/Nav';
import DataProvider from '../context/DataProvider';

const Crew = () => {
  return (
    <DataProvider>
      <Navigation />
      <CrewCard />
    </DataProvider>
  );
}

export default Crew;
