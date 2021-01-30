import React from 'react';
import HeaderProfil from 'src/containers/HeaderProfil';
import Footer from 'src/components/Footer';
import MemberListe from 'src/components/MemberListe';
import ProfilFormPage from 'src/containers/ProfilFormPage';

import './profilpage.scss';

const ProfilPage = ({ data }) => (
  <div className="main-section">
    <HeaderProfil />
    {data && data.roles[0] === 'ROLE_ADMIN'
    && (
    <>
      <h1 className="profil-page-title">La liste des membres</h1>
      <div>
        <div className="top-section">
          <MemberListe />
          <MemberListe />
          <MemberListe />
          <MemberListe />
        </div>
      </div>
    </>
    )}
    <h1 className="profil-page-title">Information de l'Athlète</h1>
    <div className="bottom-section">
      <ProfilFormPage />
    </div>
    <Footer />
  </div>
);

export default ProfilPage;
