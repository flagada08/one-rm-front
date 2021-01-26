import React from 'react';
import { NavLink } from 'react-router-dom';

import './burgerliste.scss';

const BurgerListe = ({ TOKEN, toggleBurgerMenu }) => (
  <div className="burgerliste">
    {!TOKEN
    && (
    <NavLink
      onClick={toggleBurgerMenu}
      to="/"
      className="navbar-link"
    >
      ACCUEIL
    </NavLink>
    )}
    <NavLink
      onClick={toggleBurgerMenu}
      to="/exercices"
      className="navbar-link"
    >
      EXERCICES
    </NavLink>

    <NavLink
      onClick={toggleBurgerMenu}
      to="#"
      className="navbar-link"
    >
      CHALLENGES
    </NavLink>

    <NavLink
      onClick={toggleBurgerMenu}
      to="/profil"
      className="navbar-link"
    >
      PROFIL
    </NavLink>
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
