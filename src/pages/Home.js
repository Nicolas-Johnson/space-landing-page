import React from 'react';
// import DataProvider from '../context/DataProvider';
import Navigation from '../Components/Nav';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homeContainer">
      <Navigation />
      <div className="homecontent">
        <div className="homeText">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="homeBtn">
          <button className="circleBtn" type="button"><Link className="linkBtn" to="/destination">EXPLORE</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
