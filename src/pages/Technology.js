import React from 'react';
import Navigation from '../Components/Nav';
import DataProvider from '../context/DataProvider';

const Technology = () => {
  return (
    <DataProvider>
      <Navigation />
      <h1>Technology</h1>
    </DataProvider>
  );
}

export default Technology;
