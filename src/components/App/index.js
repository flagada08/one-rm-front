// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import Header from 'src/components/Header';
import './styles.scss';

axios.get('http://localhost:3001')
  .then((response) => {
    console.log(response);
  });

// == Composant
const App = () => (
  <div className="app">
    <Header />
  </div>
);

// == Export
export default App;
