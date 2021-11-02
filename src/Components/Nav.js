import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.css';

const Navigation = () => {
  const [menuOnOff, setMenuT] = useState('icon-hamburger.svg')
  const handleMenuBtn = (imagePath) => {
    var body = document.querySelector('html');
    var overLay = document.getElementById("overLay");
    var menuList = document.getElementById("menuList");
    const open = 'icon-close.svg';
    const close = 'icon-hamburger.svg';
    if (menuOnOff === open) {
      overLay.classList.add('off');
      menuList.classList.add('off');
      setMenuT(close);
      //console.log(body);
      body.classList.remove('hideScroll');
    } else {
      overLay.classList.remove('off');
      menuList.classList.remove('off')
      setMenuT(open);
      body.classList.add('hideScroll');

    }    
  }

  return (
    <div className="navContainer">
      <nav className="navigation">
        <img className="iconLogo" src="./images/logo.svg" alt="Logo" />
        <img className="menuIcon" src={`./images/${menuOnOff}`} alt="togleMenu" onClick={ handleMenuBtn } />
        <ul id="menuList" className="off">
          <li><Link to="/"><span>00</span> HOME</Link></li>
          <li><Link to="/destination"><span>01</span> DESTINATION</Link></li>
          <li><Link to="/crew"><span>02</span> CREW</Link></li>
          <li><Link to="/technology"><span>03</span> TECHNOLOGY</Link></li> 
        </ul>
      </nav>
      <div id="overLay" className="overLay off"></div>
    </div>
  );
}

export default Navigation;
