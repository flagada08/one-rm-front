import React from 'react';

import NavBar from 'src/components/NavBar';
import BurgerMenu from 'src/containers/BurgerMenu';
import ButtonConnection from 'src/containers/ButtonConnection';

import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header-title">
      O'neRM
    </h1>
    <NavBar />
    <BurgerMenu />
    <ButtonConnection />
  </div>
);

export default Header;
