import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const CrewCard = () => {
  const { data: { crew }, crewCurrent, handleCrew } = useContext(DataContext);

  if (crew) {
    const currentCrew = crew.filter((crw) => crw.name === crewCurrent);

    var card = currentCrew.map((currCrw) => {
      var name = currCrw.name;
      var imagePath = currCrw.images.png;
      var role = currCrw.role;
      var bio = currCrw.bio;
      return (
        <div>
          <div>
            <h1>02 Meet your crew</h1>
            <h2>{ role }</h2>
            <h1>{ name }</h1>
            <p>{ bio }</p>
            <div className="crewNav">
              <div className="one" onClick={ (ev) => handleCrew('Douglas Hurley')}>0</div>
              <div className="two" onClick={ (ev) => handleCrew('Mark Shuttleworth')}>0</div>
              <div className="three" onClick={ (ev) => handleCrew('Victor Glover')}>0</div>
              <div className="four" onClick={ (ev) => handleCrew('Anousheh Ansari')}>0</div>
            </div>
          </div>
          <div>
            <img src={ imagePath } alt={`${role} ${name}`} />
          </div>
        </div>
      );
    })

  }
  return (
    <div>
      {crew && card}
    </div>
  );
}

export default CrewCard
