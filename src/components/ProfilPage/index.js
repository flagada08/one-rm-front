import React from 'react';

import MemberListe from 'src/containers/MemberListe';
import HeaderProfil from 'src/containers/HeaderProfil';
import Footer from 'src/components/Footer';
import ProfilFormPage from 'src/containers/ProfilFormPage';

import './profilpage.scss';

const ProfilPage = ({ data, allUsersData, role }) => {
  const permission = () => {
    if (data) {
      return role === 'ROLE_MANAGER' || role === 'ROLE_COACH';
    }
  };
console.log(permission());

  return (
    <div className="main-section">
      <HeaderProfil />
      {data && permission()
      && <h1 className="profil-page-title">Liste des Athlètes</h1>}
      <div className="member-liste-container">
        {data && permission()
      && (allUsersData.map((user) => (
        <MemberListe
          key={user.id}
          lastname={user.lastname}
          firstname={user.firstname}
          role={user.roles[0]}
          id={user.id}
          gender={user.gender}
        />
      )))}
      </div>
      <h1 className="profil-page-title">Information de l'Athlète</h1>
      <div className="bottom-section">
        <ProfilFormPage />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilPage;
