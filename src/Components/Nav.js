import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
      <nav>
        <ul>
          <li><Link to="/"><span>00</span> HOME</Link></li>
          <li><Link to="/destination"><span>01</span> DESTINATION</Link></li>
          <li><Link to="/crew"><span>02</span> CREW</Link></li>
          <li><Link to="/technology"><span>03</span> TECHNOLOGY</Link></li> 
        </ul>
      </nav>
  );
}

export default Navigation;
