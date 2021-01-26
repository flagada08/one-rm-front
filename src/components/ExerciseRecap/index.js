import React from 'react';
import HeaderProfil from 'src/components/HeaderProfil';
import Footer from 'src/components/Footer';
import Chart from 'src/components/Chart';

import './exerciserecap.scss';

const ExerciseRecap = () => (
  <div className="main">
    <HeaderProfil />
    <Chart />
    <Footer />
  </div>
);

ExerciseRecap.propTypes = {

};

export default ExerciseRecap;
