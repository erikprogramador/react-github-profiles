import React from 'react';
import { Link } from 'react-router-dom';
import home from '../images/home.svg';

const Navigation = () => (
  <nav className="navigation">
    <Link to="/">
      <img src={home} alt="Home" title="Home" />
    </Link>
  </nav>
);

export default Navigation;
