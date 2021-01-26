import React from 'react';

import './headerprofil.scss';

const HeaderProfil = ({ data }) => (
  <div>
    <div className="profile-card">
      <div className="top-section">
        <div className="pic">
          <img src="" alt="" />
        </div>
        <div className="name">{data.email}</div>
        <div className="tag">{data.firstname}</div>
      </div>
    </div>
  </div>
);

export default HeaderProfil;
