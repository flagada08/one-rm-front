import React from 'react';
import HeaderProfil from 'src/components/HeaderProfil';
import Footer from 'src/components/Footer';

import './profilpage.scss';

const ProfilPage = () => (
  <div>
    <HeaderProfil />
    <div className="bottom-section">
      <div className="">Attributs de l'Athlète<span>Aime les entrecotes !</span></div>
      <div className="border" />
      <div className="">Performances Exercices<span>Exe... quoi ?</span></div>
      <div className="border" />
      <div className="">Performances<span>WTF</span></div>
    </div>
    <Footer />
  </div>
);

export default ProfilPage;
