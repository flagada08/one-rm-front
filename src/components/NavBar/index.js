import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const NavBar = () => (
  <div>
    <NavLink
      to=""
      className="navbar-link"
    >
      A PROPOS
    </NavLink>

    <NavLink
      to="/profil"
      className="navbar-link"
    >
      ENTRAINEMENTS
    </NavLink>

    <NavLink
      to=""
      className="navbar-link"
    >
      CHALLENGES
    </NavLink>
  </div>
);

export default NavBar;
