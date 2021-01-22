import React from 'react';

import NavBar from 'src/components/NavBar';
import BurgerMenu from 'src/containers/BurgerMenu';
import ButtonConnection from 'src/containers/ButtonConnection';
import LoginForm from 'src/containers/LoginForm';
import RegisterForm from 'src/containers/RegisterForm';

import './header.scss';

const Header = ({ isOpen, OpenREgister }) => (
  <div className="header">
    <h1 className="header-title">
      O'neRM
    </h1>
    <NavBar />
    <ButtonConnection />
    <BurgerMenu />
    {isOpen && <LoginForm />}
    {OpenREgister && <RegisterForm />}
  </div>
);

export default Header;
