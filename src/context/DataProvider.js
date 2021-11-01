import React, { useState, useEffect } from 'react';
import DataContext from './DataContext'

const DataProvider = (props) => {
  const [Data, setData] = useState([]);
  const [destination, setDestination] = useState('');

  const handleDesination = (destinationPiquer) => {
    setDestination(destinationPiquer);    
  }

  const fetchData = () => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }

  useEffect(()=> {
    fetchData();
  }, []);
  
  return (
    <DataContext.Provider value={ { data: Data, destination: destination, handleDesination: handleDesination } }>
      { props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
