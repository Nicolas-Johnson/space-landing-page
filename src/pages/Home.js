import React from 'react';
import Navigation from '../Components/Nav';

const Home = () => {
  return (
    <div>
      <Navigation />
      <div>
        <div>
          <h1>SO, YOU WANT TO TRAVEL TO SPACE</h1>
          <span>Space</span>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div>
          <button type="button">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
