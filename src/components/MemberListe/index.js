import React from 'react';
import { Trash2, User } from 'react-feather';
import { Link } from 'react-router-dom';

import './memberliste.scss';

const MemberListe = ({ data, id, lastname, firstname, clickOfMember, clickDeleteMember }) => (
  <div className="member-liste-container">
    <div className="member-container">
      {console.log(data)}
      <Link
        className="member-link"
        to="/recapexercices"
      >
        <User className="member-user-icon" onClick={() => clickOfMember(id)} />
      </Link>
      <span className="member-firstname">PRENOM:{firstname}</span>
      <span className="member-lastname">NOM:{lastname}</span>
      {data && data.roles.includes('ROLE_MANAGER') && <Trash2 className="member-trash-icon" onClick={() => clickDeleteMember(id)} />}
    </div>
  </div>
);
// [2] ROLE_MANAGER
export default MemberListe;
