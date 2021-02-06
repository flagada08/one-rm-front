import React from 'react';
import { NavLink } from 'react-router-dom';

import './burgerliste.scss';

const BurgerListe = ({
  TOKEN,
  toggleBurgerMenu,
  buttonConnect,
  buttonDisconnect,
  clickOfExercisesPage,
}) => (
  <div className="burgerliste">
    <div className="login-link">
      {!TOKEN
      && (
      <NavLink
        onClick={buttonConnect}
        to="/"
        className="navbar-link"
      >
        CONNEXION
      </NavLink>
      )}
      {TOKEN
      && (
      <NavLink
        onClick={buttonDisconnect}
        to="/"
        className="navbar-link"
      >
        DECONNEXION
      </NavLink>
      )}
    </div>
    <NavLink
      onClick={toggleBurgerMenu}
      to="/"
      className="navbar-link"
    >
      ACCUEIL
    </NavLink>
    <NavLink
      onClick={toggleBurgerMenu}
      to="/exercices"
      className="navbar-link"
      onClick={clickOfExercisesPage}
    >
      EXERCICES
    </NavLink>

    {TOKEN && (
    <NavLink
      onClick={toggleBurgerMenu}
      to="/profil"
      className="navbar-link"
    >
      PROFIL
    </NavLink>
    )}
    {TOKEN && (
    <NavLink
      onClick={toggleBurgerMenu}
      to="/recapexercices"
      className="navbar-link"
    >
      RECAP EXO
    </NavLink>
    )}
    <NavLink
      onClick={toggleBurgerMenu}
      to="/"
      className="navbar-link"
    >
      A PROPOS
    </NavLink>
  </div>
);

export default BurgerListe;
