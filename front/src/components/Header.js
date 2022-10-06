import React from 'react';
import { Link } from 'react-router-dom';
import Wealth from '../assets/images/Wealth.png';

const Header = () => {
  return (
    <header>
      <div className="header-title-img">
        <div className="header-title">HRNet</div>
        <div className="header-img">
          <img src={Wealth} alt="Wealth" />
        </div>
      </div>

      <div className="header-menu">
        <Link to="/">Home</Link>
      </div>
    </header>
  );
};

export default Header;
