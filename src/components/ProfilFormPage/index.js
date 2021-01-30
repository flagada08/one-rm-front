import React from 'react';
import { Send } from 'react-feather';

import './profilformpage.scss';

const ProfilFormPage = ({
  data,
  setValueLastname,
  setValueFirstname,
  setValueEmail,
  setValueAge,
  setValueFitnessRoom,
  lastname,
  firstname,
  email,
  age,
  fitnessroom,
}) => (

  <div className="profil-form-page-container">
    {data
      && (
      <>
        <input
          className="user-input"
          type="text"
          placeholder="NOM"
          value={lastname}
          onChange={(event) => {
            setValueLastname(event.target.value);
          }}
        />
        <input
          className="user-input"
          type="text"
          placeholder="PRENOM"
          value={firstname}
          onChange={(event) => {
            setValueFirstname(event.target.value);
          }}
        />
        <input
          className="user-input"
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(event) => {
            setValueEmail(event.target.value);
          }}
        />
        <input
          className="user-input"
          type="number"
          placeholder="AGE"
          value={age}
          onChange={(event) => {
            setValueAge(event.target.value);
          }}
        />
        <input
          className="user-input"
          type="text"
          placeholder="Nom de la salle"
          value={fitnessroom || ''}
          onChange={(event) => {
            setValueFitnessRoom(event.target.value);
          }}
        />
      </>
      )}
      <button type="submit" >ENVOYER</button>
  </div>
);

export default ProfilFormPage;
