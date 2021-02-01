import React from 'react';

import MemberListe from 'src/containers/MemberListe';
import HeaderProfil from 'src/containers/HeaderProfil';
import Footer from 'src/components/Footer';
import ProfilFormPage from 'src/containers/ProfilFormPage';

import './profilpage.scss';

const ProfilPage = ({ data, allUsersData }) => (
  <div className="main-section">
    <HeaderProfil />
    {data && data.roles[0] === 'ROLE_COACH'
    && (allUsersData.map((user) => (
      <>
        <MemberListe
          key={user.id}
          lastname={user.lastname}
          firstname={user.firstname}
          id={user.id}
        />
      </>
    )))}
    <h1 className="profil-page-title">Information de l'Athlète</h1>
    <div className="bottom-section">
      <ProfilFormPage />
    </div>
    <Footer />
  </div>
);

export default ProfilPage;
