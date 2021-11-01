import React, { useState, useEffect } from 'react';
import DataContext from './DataContext'

const DataProvider = (props) => {
  const [Data, setData] = useState([]);
  const [destination, setDestination] = useState('Moon');
  const [crewCurrent, setCrew] = useState('Douglas Hurley');
  const [techOnRender, setCurrTech] = useState('Launch vehicle');

  const handleTech = (techToRender) => {
    setCurrTech(techToRender);
  }

  const handleCrew = (CrewOne) => {
    setCrew(CrewOne);
  }

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

  const CONTEXT_OBJ = {
    data: Data,
    destination,
    crewCurrent,
    techOnRender,
    handleDesination,
    handleCrew,
    handleTech,
  }
  
  return (
    <DataContext.Provider value={ CONTEXT_OBJ }>
      { props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
