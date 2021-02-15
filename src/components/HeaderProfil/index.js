import React from 'react';

import './headerprofil.scss';

const HeaderProfil = ({ data, TOKEN }) => (
  <div>
    <div className="profile-card">
      <div className="top-section">
        <div className="pic">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/84843821708980401/9BC44C0E1AD7A3291FE32C8AA0B72EF4DAC41492/" alt="" />
        </div>
        <div className="name">{data.firstname}</div>
        <div className="tag">{data.email}</div>
      </div>
    </div>
  </div>
);

export default HeaderProfil;
