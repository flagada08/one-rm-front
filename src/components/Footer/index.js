import React from 'react';
import {
  Instagram, Facebook, Twitter, Youtube,
} from 'react-feather';

import './footer.scss';

const Footer = () => (
  <div className="footer">
    <span>O'ne RM</span>
    <Facebook />
    <Twitter />
    <Instagram />
    <Youtube />
  </div>
);

export default Footer;
