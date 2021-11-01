import React, { useState, useEffect } from 'react';
import DataContext from './DataContext'

const DataProvider = (props) => {
  const [Data, setData] = useState([]);
  const fetchData = () => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(Data));
  }
  useEffect(()=> {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={ { Data } }>
      { props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
