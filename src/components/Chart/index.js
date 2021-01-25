import React from 'react';
import PropTypes from 'prop-types';
import Line from 'react-chartjs-2';

import './chart.scss';

const Chart = () => (
  <div className="chart-container">
    <Line />
  </div>
);

Chart.propTypes = {

};

export default Chart;
