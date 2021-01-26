import React from 'react';
import Footer from 'src/components/Footer';
import Chart from 'src/components/Chart';

import './profilpage.scss';

const ProfilPage = ({ data }) => (
  <div>
    <div className="profile-card">
      <div className="top-section">
        <div className="pic">
          <img src="" alt="" />
        </div>
        <div className="name">{data.firstname}</div>
        <div className="tag">{data.email}</div>
        {console.log('les data sur la page profil => '.data)}
      </div>
      <Chart />
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
