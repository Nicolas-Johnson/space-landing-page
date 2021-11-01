import React from 'react';
import Navigation from '../Components/Nav';
import TechnologyCard from '../Components/TechnologyCard';
import DataProvider from '../context/DataProvider';

const Technology = () => {
  return (
    <DataProvider>
      <Navigation />
      <TechnologyCard />
    </DataProvider>
  );
}

export default Technology;
