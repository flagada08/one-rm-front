import React from 'react';
import {
  Instagram, Facebook, Twitter, Youtube,
} from 'react-feather';

import './contactpage.scss';

const ContactPage = () => (
  <div className="container-contact">

    <form id="contact_form" action="#" method="POST">
      <div className="form-block">
        <div className="label" htmlFor="name">Votre nom:</div>
        <input id="name" className="input" name="name" type="text" />

        <div className="label" htmlFor="email">Votre email:</div>
        <input id="email" className="input" name="email" type="text" />

        <div className="label" htmlFor="message">Votre message:</div>
        <textarea id="message" className="message-input" name="message" />
      </div>
      <button className="contact-button" type="button">ENVOYER</button>
    </form>

    <div className="row">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="" />
        </div>
        <div className="team-content">
          <h3 className="name">Raphaël-mouth Demmerlez-vous</h3>
          <h4 className="title">Product Owner</h4>
        </div>
        <ul className="social">
          <li><a href="" aria-hidden="true"><Facebook /></a></li>
          <li><a href="" aria-hidden="true"><Twitter /></a></li>
          <li><a href="" aria-hidden="true"><Instagram /></a></li>
          <li><a href="" aria-hidden="true"><Youtube /></a></li>
        </ul>
      </div>

      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="" />
        </div>
        <div className="team-content">
          <h3 className="name">Térence Persin, le bg du 08</h3>
          <h4 className="title">Web Developer</h4>
        </div>
        <ul className="social">
          <li><a href="" aria-hidden="true"><Facebook /></a></li>
          <li><a href="" aria-hidden="true"><Twitter /></a></li>
          <li><a href="" aria-hidden="true"><Instagram /></a></li>
          <li><a href="" aria-hidden="true"><Youtube /></a></li>
        </ul>
      </div>

      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="" />
        </div>
        <div className="team-content">
          <h3 className="name">Charlie-mouth Bauduin, mais où est Charlie ?</h3>
          <h4 className="title">Web Developer</h4>
        </div>
        <ul className="social">
          <li><a href="" aria-hidden="true"><Facebook /></a></li>
          <li><a href="" aria-hidden="true"><Twitter /></a></li>
          <li><a href="" aria-hidden="true"><Instagram /></a></li>
          <li><a href="" aria-hidden="true"><Youtube /></a></li>
        </ul>
      </div>

      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src="" />
        </div>
        <div className="team-content">
          <h3 className="name">Laurie-mouthe Bouleau, aime les steacks bien saignant</h3>
          <h4 className="title">Web Developer</h4>
        </div>
        <ul className="social">
          <li><a href="" aria-hidden="true"><Facebook /></a></li>
          <li><a href="" aria-hidden="true"><Twitter /></a></li>
          <li><a href="" aria-hidden="true"><Instagram /></a></li>
          <li><a href="" aria-hidden="true"><Youtube /></a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default ContactPage;
