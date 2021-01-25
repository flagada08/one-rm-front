// == Import npm
import React from 'react';
import { Line, defaults } from 'react-chartjs-2';

// == Import
import './chart.scss';
// == Composant

// pour la durée de l'animation du graphique
defaults.global.animation.duration = 6000;
// pour utiliser une fonction quand la courbe est completement
// terminer par une fonction par exemple (on complete est une fonction) => react chartjs-2
defaults.global.animation.onComplete = () => {
  console.log('graphique-coucou');
};
// pour regler la animation du hover
defaults.global.hover.animationDuration = 600;

const Chart = () => (
  <div className="chart-container">
    <div className="chart">
      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Exercice',
              // enleve le background de la ligne du graphique
              fill: false,
              data: [12, 19, 3, 5, 10, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
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
