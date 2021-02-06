// == Import npm
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

// == Import
import Header from 'src/containers/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import ExercisesPage from 'src/containers/ExercisesPage';
import ProfilPage from 'src/containers/PageProfil';
import ExerciseRecap from 'src/containers/ExercisesRecap';
import DetailExercise from 'src/containers/DetailExercise';
import MemberListe from 'src/components/MemberListe';
import Page404 from 'src/components/Page404';

import './styles.scss';

// == Composant
const OneRM = ({ loggedIn, redirect, loggedOut }) => (
  <div className="app">
    <div>
      <Switch>
        <Route exact path="/">
          {redirect && <Redirect to="/profil" />}
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/exercices">
          <Header />
          <ExercisesPage />
        </Route>
        {loggedIn
        && (
        <>
          <Route exact path="/profil">
            <Header />
            <ProfilPage />
          </Route>
          <Route exact path="/recapexercices">
            <Header />
            <ExerciseRecap />
          </Route>
          <Route exact path="/detailexercice">
            <Header />
            <DetailExercise />
            <Footer />
          </Route>
          <Route exact path="/listemembres">
            <Header />
            <MemberListe />
            <Footer />
          </Route>
        </>
        )}
        <Route path="/">
          {loggedOut && <Redirect to="/" />}
          <Header />
          <Main />
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
