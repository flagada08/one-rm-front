import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const NavBar = ({ loggedIn }) => (

  <div className="navbar-container">
    { !loggedIn
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
    {loggedIn && (
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
