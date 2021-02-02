import React from 'react';
import { Trash2, User } from 'react-feather';
import { Link } from 'react-router-dom';

import './memberliste.scss';

const MemberListe = ({ id, lastname, firstname, clickOfMember }) => (
  <div className="member-liste-container">
    <div className="member-container">
      {console.log(id)
      }
      <Link
        className="member-link"
        to="/recapexercices"
      >
        <User className="member-user-icon" onClick={() => clickOfMember(id)} />
      </Link>
      <span className="member-firstname">PRENOM:{firstname}</span>
      <span className="member-lastname">NOM:{lastname}</span>
      <Trash2 className="member-trash-icon" />
    </div>
  </div>
);

export default MemberListe;
