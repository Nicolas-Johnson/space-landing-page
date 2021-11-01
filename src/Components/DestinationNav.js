import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const DestinationNav = (props) => {
  const { handleDesination } = useContext(DataContext);
  return (
      <nav>
        <ul>
          <li onClick={ (ev) => handleDesination('Moon') }>MOON</li>
          <li onClick={ (ev) => handleDesination('Mars') }>MARS</li>
          <li onClick={ (ev) => handleDesination('Europa') }>EUROPA</li>
          <li onClick={ (ev) => handleDesination('Titan') }>TITAN</li> 
        </ul>
      </nav>
  );
}

export default DestinationNav;
