import React from 'react';

import ButtonConnection from 'src/components/ButtonConnection';
import NavBar from 'src/components/NavBar';
import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="page-title">
      O'ne RM
    </h1>
    <NavBar />
    <ButtonConnection />
  </div>
);

export default Header;
