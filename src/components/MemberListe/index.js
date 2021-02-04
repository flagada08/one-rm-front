import React from 'react';
import { Trash2, User } from 'react-feather';
import { Link } from 'react-router-dom';

import './memberliste.scss';

const MemberListe = ({
  data, id, lastname, firstname, clickOfMember, clickDeleteMember,
}) => (

  <div className="member-container">
    {console.log(data)}
    <Link
      className="member-link"
      to="/recapexercices"
    >
      <User className="member-user-icon" onClick={() => clickOfMember(id)} />
    </Link>
    <span className="member-firstname">{firstname}</span>
    <span className="member-lastname">{lastname}</span>
    {data && data.roles.includes('ROLE_MANAGER') && <Trash2 className="member-trash-icon" onClick={() => clickDeleteMember(id)} />}
    <div className="circle">
      <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle className="stroke" cx="60" cy="60" r="50" />
      </svg>
    </div>
  </div>

);
// [2] ROLE_MANAGER
export default MemberListe;
