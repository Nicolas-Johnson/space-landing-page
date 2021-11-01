import React from 'react';
import Navigation from '../Components/Nav';
import DataProvider from '../context/DataProvider';

const Technology = () => {
  return (
    <DataProvider>
      <Navigation />
      <div>
        <h1>Technology</h1>
      </div>
    </DataProvider>
  );
}

export default Technology;
