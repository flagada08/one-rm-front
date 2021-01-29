import React from 'react';
import { Send } from 'react-feather';

import './profilformpage.scss';

const ProfilFormPage = () => (
  <div className="profil-form-page-container">
    <input className="user-input" type="text" placeholder="NOM" />
    <Send className="icon-input-user" />
    <input className="user-input" type="text" placeholder="prenom" />
    <Send className="icon-input-user" />
    <input className="user-input" type="email" placeholder="EMAIL" />
    <Send className="icon-input-user" />
    <input className="user-input" type="number" placeholder="AGE" />
    <Send className="icon-input-user" />
    <input className="user-input" type="number" placeholder="Nom de la salle" />
    <Send className="icon-input-user" />
  </div>
);

export default ProfilFormPage;
