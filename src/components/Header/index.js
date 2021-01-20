import React from 'react';

import ButtonConnection from 'src/containers/ButtonConnection';
import NavBar from 'src/components/NavBar';
import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header-title">
      O'neRM
    </h1>
    <NavBar />
    <ButtonConnection />
  </div>
);

export default Header;
