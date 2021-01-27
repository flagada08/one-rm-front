// == Import npm
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

// == Import
import Header from 'src/containers/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import ExercisePage from 'src/components/ExercisePage';
import ProfilPage from 'src/containers/PageProfil';
import ExerciseRecap from 'src/containers/ExercisesRecap';
import DetailExercise from 'src/components/DetailExercise';
import Page404 from 'src/components/Page404';

import './styles.scss';

// == Composant
const OneRM = ({ loggedIn, }) => (
  <div className="app">
    <div>
      <Switch>
        <Route exact path="/">
          { loggedIn && <Redirect to="/profil" />}
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/profil">
          { !loggedIn && <Redirect to="/" />}
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
        <Route exact path="/detailexercice">
          <Header />
          <DetailExercise />
          <Footer />
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
