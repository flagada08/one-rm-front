import React from 'react';
import { NavLink } from 'react-router-dom';

import './burgerliste.scss';

const BurgerListe = () => (
  <div className="burgerliste">
    <NavLink
      to="/"
      className="navbar-link"
    >
      ACCUEIL
    </NavLink>
    <NavLink
      to="/exercices"
      className="navbar-link"
    >
      EXERCICES
    </NavLink>

    <NavLink
      to="#"
      className="navbar-link"
    >
      CHALLENGES
    </NavLink>

    <NavLink
      to="/profil"
      className="navbar-link"
    >
      PROFIL
    </NavLink>
    <NavLink
      to="/"
      className="navbar-link"
    >
      A PROPOS
    </NavLink>
  </div>
);

export default BurgerListe;
