import React from 'react';
import ProgressBar from 'src/components/ProgressBar';
import { Link } from 'react-router-dom';

const Exercise = () => (
  <div className="exercice-card">
    <Link className="ecercice-link" to="/">liens vers l'exercice</Link>
    <div className="exercice-objectif">
      XXXX KG / REP
    </div>
    <div className="exercice-pregression">
      <ProgressBar />
    </div>
  </div>

);

Exercise.propTypes = {

};

export default Exercise;
