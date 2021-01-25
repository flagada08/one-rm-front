// == Import npm
import React from 'react';
import axios from 'axios';

import { Switch, Route } from 'react-router-dom';

// == Import
import Header from 'src/containers/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import ExercisePage from 'src/components/ExercisePage';
import ProfilPage from 'src/components/ProfilPage';
import Page404 from 'src/components/Page404';

import './styles.scss';

const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/user/32/profil';
const TOKEN = localStorage.getItem('token');
console.log(TOKEN);

axios.get(API_URL, { headers: { Authorization: TOKEN } })
  .then((response) => {
    console.log(response.data);
  });

// == Composant
const OneRM = () => (
  <div className="app">
    <div>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/profil">
          <ProfilPage />
        </Route>
        <Route exact path="/exercices">
          <ExercisePage />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  </div>
);

// == Export
export default OneRM;
