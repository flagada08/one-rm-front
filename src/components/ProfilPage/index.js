import React from 'react';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';

import {
  Instagram, Facebook, Twitter, Youtube,
} from 'react-feather';

import './profilpage.scss';

const ProfilPage = () => (
  <div>
    <Header />
    <div className="profile-card">
      <div className="top-section">
        <div className="pic">
          <img src="" alt="" />
        </div>
        <div className="name">Laurie-Mouthe</div>
        <div className="tag">@lauriemouthe</div>
        <div className="social-media">
          <a href="#"><Facebook /></a>
          <a href="#"><Twitter /></a>
          <a href="#"><Instagram /></a>
          <a href="#"><Youtube /></a>
        </div>
      </div>
      <div className="bottom-section">
        <div className="">Attributs de l'Athlète<span>Aime les entrecotes !</span></div>
        <div className="border" />
        <div className="">Performances Exercices<span>Exe... quoi ?</span></div>
        <div className="border" />
        <div className="">Performances<span>WTF</span></div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ProfilPage;
