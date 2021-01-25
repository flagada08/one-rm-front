// == Import npm
import React from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';

// == Import
import Header from 'src/containers/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import ExercisePage from 'src/components/ExercisePage';
import ProfilPage from 'src/components/ProfilPage';
import Page404 from 'src/components/Page404';

import './styles.scss';

const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/';

axios.get(API_URL)
  .then((response) => {
    console.log(response.data);
  });

// == Composant
const OneRM = ({ loggedIn }) => (
  <div className="app">
    <div>
      <Switch>
        <Route exact path="/">
          {loggedIn && <Redirect to="/profil" />}
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
