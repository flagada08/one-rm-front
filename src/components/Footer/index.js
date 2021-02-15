import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Instagram, Facebook, Twitter, Youtube,
} from 'react-feather';

import './footer.scss';

const Footer = () => (
  <div className="footer">
    <span>O'ne RM</span>
    <div className="reseaux-container">
      <div className="reseau-logo">
        <Facebook />
      </div>
      <div className="reseau-logo">
        <Twitter />
      </div>
      <div className="reseau-logo">
        <Instagram />
      </div>
      <div className="reseau-logo">
        <Youtube />
      </div>
    </div>
    <div className="link-footer-container">
      <NavLink
        to="/"
        className="navbar-link"
      >
        mentions légales
      </NavLink>
      <NavLink
        to="/"
        className="navbar-link"
      >
        conditions générales
      </NavLink>
    </div>
  </div>
);

export default Footer;
