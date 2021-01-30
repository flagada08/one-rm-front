import React from 'react';

import './progressbar.scss';

const ProgressBar = ({ progress }) => (
  <div className="progressbar-container">
    
    <div className="progressbar">
      <progress className="span-progressbar" max="100" value={progress}>{progress}</progress>
    </div>
  </div>

);

ProgressBar.propTypes = {

};

export default ProgressBar;
