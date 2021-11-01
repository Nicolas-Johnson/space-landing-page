import React from 'react';
// import DataProvider from '../context/DataProvider';
import Navigation from '../Components/Nav';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navigation />
      <div>
        <div>
          <h5>SO, YOU WANT TO TRAVEL TO SPACE</h5>
          <span>Space</span>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div>
          <button type="button"><Link to="/destination">Explore</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
