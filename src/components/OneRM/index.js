// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import LoginForm from 'src/containers/LoginForm';
import RegisterForm from 'src/containers/RegisterForm';
import Footer from 'src/components/Footer';
import './styles.scss';

const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/';

axios.get(API_URL)
  .then((response) => {
    console.log(response.data);
  });

// == Composant
const OneRM = ({ isOpen, OpenREgister }) => (
  <div className="app">
    <Header />
    <Main />
    {isOpen && <LoginForm />}
    {OpenREgister && <RegisterForm />}
    <Footer />
  </div>
);

// == Export
export default OneRM;
