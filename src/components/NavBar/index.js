import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const NavBar = ({ TOKEN }) => (

  <div className="navbar-container">
    { !TOKEN
    && (
    <NavLink
      to="/"
      className="navbar-link"
    >
      ACCUEIL
    </NavLink>
    )}
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
    {TOKEN && (
    <NavLink
      to="/profil"
      className="navbar-link"
    >
      PROFIL
    </NavLink>
    )}

    <NavLink
      to="/"
      className="navbar-link"
    >
      A PROPOS
    </NavLink>
  </div>

);

export default NavBar;
