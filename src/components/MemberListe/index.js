import React from 'react';
import { Trash2, User } from 'react-feather';

import './memberliste.scss';

const MemberListe = () => (
  <div className="member-liste-container">
    <div className="member-container">
      <User className="member-user-icon" />
      <span className="member-firstname">PRENOM:XXXX</span>
      <span className="member-lastname">NOM:XXXX</span>
      <Trash2 className="member-trash-icon" />
    </div>
  </div>
);

export default MemberListe;
