// == Import npm
import React, { useEffect } from 'react';
import { Line, defaults } from 'react-chartjs-2';

// == Import
import './chart.scss';
// == Composant

// pour la durée de l'animation du graphique
defaults.global.animation.duration = 6000;
// pour utiliser une fonction quand la courbe est completement
// terminer par une fonction par exemple (oncomplete est une fonction) => react chartjs-2
defaults.global.animation.onComplete = () => {
};
// pour regler la animation du hover
defaults.global.hover.animationDuration = 600;

const Chart = ({ AllPerfs }) => {
  const checkPerf = AllPerfs.length === undefined

  return (
    <div className="chart-container">
      <div className="chart">
        <Line
          data={{
            labels: !checkPerf
              && (AllPerfs.length > 1
                ? AllPerfs.map((perf) => {
                  const array = [];
                  array.push(perf.date.split(' ')[0]);
                  return array;
                }) : AllPerfs[0].date.split(' ')[0]),
            datasets: [
              {
                label: 'Charge',
                // enleve le background de la ligne du graphique
                fill: false,
                data: !checkPerf && AllPerfs.map((perf) => (Number(perf.weight))),
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
              },
              {
                label: 'Repetition',
                // enleve le background de la ligne du graphique
                fill: false,
                data: !checkPerf && AllPerfs.map((perf) => (Number(perf.repetition))),
                borderColor: [
                  'rgba(0, 181, 204, 1)',
                ],
              },
            ],
          }}
          options={{

            scales: {
              yAxes: [
                {
                  // pour enlever les lines de l'axes y
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  // pour enlever les lines de l'axes X
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    fontSize: 10,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

// == Export
export default Chart;
