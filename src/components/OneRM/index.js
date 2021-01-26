// == Import npm
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

// == Import
import Header from 'src/containers/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import ExercisePage from 'src/components/ExercisePage';
import ProfilPage from 'src/containers/PageProfil';
import ExerciseRecap from 'src/components/ExerciseRecap';
import Page404 from 'src/components/Page404';

import './styles.scss';

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
          <Header />
          <ProfilPage />
        </Route>
        <Route exact path="/recapexercices">
          <Header />
          <ExerciseRecap />
        </Route>
        <Route exact path="/exercices">
          <Header />
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
