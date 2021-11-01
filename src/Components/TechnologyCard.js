import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const TechnologyCard = () => {
  const { data: { technology }, techOnRender, handleTech } = useContext(DataContext);

  if (technology) {
    const tech = technology.filter((currTech) => currTech.name === techOnRender)

    var card = tech.map((techCard) => {
      var name = techCard.name;
      var imagePath = techCard.images.portrait;
      var description = techCard.description;
      return (
        <div>
          <div>
            <h1>03 Space launch 101</h1>
            <div>
              <span onClick={ (ev) => handleTech('Launch vehicle') }>1</span><span onClick={ (ev) => handleTech('Spaceport') }>2</span><span onClick={ (ev) => handleTech('Space capsule') }>3</span>
              <div>
                <h2>The terminology...</h2>
                <h1>{ name }</h1>
                <p>{ description }</p>
              </div>
            </div>
          </div>
          <div>
            <img src={ imagePath } alt={ name } />
          </div>
        </div> 
      );
    })
  }

  return (
    <div>
      {technology && card}    
    </div>
  );
} 

export default TechnologyCard;
