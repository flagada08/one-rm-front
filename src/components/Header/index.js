import React from 'react';
import logo from '/public/img/one-rm.png';
import NavBar from 'src/containers/NavBar';
import BurgerMenu from 'src/containers/BurgerMenu';
import ButtonConnection from 'src/containers/ButtonConnection';
import ButtonDeconnection from 'src/containers/ButtonDeconnection';
import LoginForm from 'src/containers/LoginForm';
import RegisterForm from 'src/containers/RegisterForm';

import './header.scss';

const Header = ({ isOpen, OpenREgister, TOKEN }) => (
  <div className="header">
    <img className="logo" src={logo} alt="logo" />
    <NavBar />
    {!TOKEN ? <ButtonConnection /> : <ButtonDeconnection />}
    <BurgerMenu />
    {isOpen && <LoginForm />}
    {OpenREgister && <RegisterForm />}
  </div>
);

export default Header;
