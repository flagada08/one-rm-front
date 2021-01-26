import React from 'react';

import './headerprofil.scss';

const HeaderProfil = ({ data }) => (
  <div>
    <div className="profile-card">
      <div className="top-section">
        <div className="pic">
          <img src="" alt="" />
        </div>
        <div className="name">{data}</div>
        <div className="tag">{data}</div>
        {console.log('les data sur la page profil => '.data)}
      </div>
    </div>
  </div>
);

export default HeaderProfil;
