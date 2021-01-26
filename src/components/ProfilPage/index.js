import React from 'react';
import HeaderProfil from 'src/containers/HeaderProfil';
import Footer from 'src/components/Footer';

import './profilpage.scss';

const ProfilPage = ({ data }) => (
  <div className="main-section">
    <HeaderProfil />
    <h1 className="profil-page-title">Biographie de l'Athlète</h1>
    <div>
      <div className="top-section">
        <div className="">
          <span id="msg">
            Raconte-ta-life.com
          </span>
          <button type="button">
            EDIT
          </button>
        </div>
      </div>
    </div>
    <h1 className="profil-page-title">Information de l'Athlète</h1>
    <div className="bottom-section">
      <div className="">
        Nom de l'Athlète
        <span>
          {data.lastname}
        </span>
        <button type="button">
          EDIT
        </button>
      </div>
      <div className="border" />
      <div className="">
        Prénom de l'Athlète
        <span>
          {data.firstname}
        </span>
        <button type="button">
          EDIT
        </button>
      </div>
      <div className="border" />
      <div className="">
        Adresse mail de l'Athlète
        <span>
          {data.email}
        </span>
        <button type="button">
          EDIT
        </button>
      </div>
    </div>
    <Footer />
  </div>
);

export default ProfilPage;
