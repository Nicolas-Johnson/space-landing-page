import React from 'react';

const DestinationNav = (props) => {
  const { handleDesination } = props;
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
