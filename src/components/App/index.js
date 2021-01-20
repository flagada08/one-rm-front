// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import './styles.scss';

const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/Projet_O-ne-RM/O\'NE%20RM/public/';

axios.get(API_URL)
  .then((response) => {
    console.log(response.data);
  });

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Main />
  </div>
);

// == Export
export default App;
