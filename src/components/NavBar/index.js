import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const NavBar = ({ TOKEN, clickOfRecapExercise, clickOfExercisesPage }) => (

  <div className="navbar-container">
    <NavLink
      to="/"
      className="navbar-link"
    >
      ACCUEIL
    </NavLink>
    <NavLink
      to="/exercices"
      className="navbar-link"
      onClick={clickOfExercisesPage}
    >
      EXERCICES
    </NavLink>

    {TOKEN && (
    <NavLink
      to="/profil"
      className="navbar-link"
    >
      PROFIL
    </NavLink>
    )}

    {TOKEN && (
    <NavLink
      to="/recapexercices"
      className="navbar-link"
      onClick={clickOfRecapExercise}
    >
      RECAP EXO
    </NavLink>
    )}

    <NavLink
      to="/contact"
      className="navbar-link"
    >
      CONTACTEZ NOUS
    </NavLink>
  </div>

);

export default NavBar;
