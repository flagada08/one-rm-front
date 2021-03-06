import React from 'react';
import { Trash2, User } from 'react-feather';
import { Link } from 'react-router-dom';

import './memberliste.scss';

const MemberListe = ({
  data,
  id,
  lastname,
  firstname,
  clickOfMember,
  clickDeleteMember,
  changeMemberRank,
  role,
  connectedRole,
  gender,
}) => (

  <div className="member-container">
    <Link
      className="member-link"
      to="/recapexercices"
    >
      <User className="member-user-icon" onClick={() => clickOfMember(id)} />
    </Link>
    {connectedRole === 'ROLE_MANAGER'
    && (
    <select onChange={(event) => changeMemberRank(id, event.target.value)} className="member-select">
      <option value="">
        {role === 'ROLE_USER' ? 'MEMBRE' : role === 'ROLE_COACH' ? 'COACH' : role === 'ROLE_MANAGER' ? 'MANAGER' : ''}
      </option>
      <option value="ROLE_USER">
        MEMBRE
      </option>
      <option value="ROLE_COACH">
        COACH
      </option>
      <option value="ROLE_MANAGER">
        MANAGER
      </option>
    </select>
    )}
    <span className="member-firstname">Prénom : {firstname}</span>
    <span className="member-lastname">Nom : {lastname}</span>
    {data && connectedRole === 'ROLE_MANAGER' && <Trash2 className="member-trash-icon" onClick={() => clickDeleteMember(id)} />}
    <div className="circle">
      {gender === 'homme'
        ? <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
        : gender === 'femme' ? <img src="https://www.w3schools.com/w3images/avatar4.png" alt="" />
          : ''}
      <svg>
        <circle className="stroke" cx="60" cy="60" r="50" />
      </svg>
    </div>
  </div>

);
export default MemberListe;
