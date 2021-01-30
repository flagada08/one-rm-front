import React from 'react';

import './progressbar.scss';

const ProgressBar = ({ progress }) => (
  <div className="progressbar-container">
    <div className="progressbar" style={{ width: `${progress}%` }}>
      <span className="span-progressbar">{progress}%</span>
    </div>
  </div>

);

ProgressBar.propTypes = {

};

export default ProgressBar;
