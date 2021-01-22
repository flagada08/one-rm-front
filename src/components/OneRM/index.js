// == Import npm
import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import LoginForm from 'src/containers/LoginForm';
import RegisterForm from 'src/containers/RegisterForm';
import Footer from 'src/components/Footer';
import ProfilPage from 'src/components/ProfilPage';

import './styles.scss';

const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/';

axios.get(API_URL)
  .then((response) => {
    console.log(response.data);
  });

// == Composant
const OneRM = ({ isOpen, OpenREgister }) => (
  <div className="app">

    <div>
      <Switch>
        <Route exact path="/profil">
          <ProfilPage />
        </Route>
        <Route exact path="/">
          <Header />
          <Main />
          {isOpen && <LoginForm />}
          {OpenREgister && <RegisterForm />}
          <Footer />
        </Route>
      </Switch>
    </div>
  </div>
);

// == Export
export default OneRM;
