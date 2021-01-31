// == Import npm
import React from 'react';
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

const Chart = ({ ExerciceName, AllPerfs }) => (
  <div className="chart-container">
    {console.log(AllPerfs)
    }
    <div className="chart">
      <Line
        data={{
          labels:
            AllPerfs.length > 1
             ? AllPerfs.map((perf) => (perf.date.split(' ')[0])) : AllPerfs.date === null ? '' : AllPerfs.date.split(' ')[0],

          datasets: [
            {
              label: 'KG',
              // enleve le background de la ligne du graphique
              fill: false,
              data:
               AllPerfs
                && AllPerfs.length > 1
                 ? AllPerfs.map((perf) => (perf.weight)) : AllPerfs.weight,
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
              label: 'repetition',
              // enleve le background de la ligne du graphique
              fill: false,
              data: AllPerfs.length > 1 ? AllPerfs.map((perf) => (perf.repetition)) : AllPerfs.repetition,
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

// == Export
export default Chart;
