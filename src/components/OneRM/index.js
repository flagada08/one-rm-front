// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import Header from 'src/containers/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import './styles.scss';

const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/';

axios.get(API_URL)
  .then((response) => {
    console.log(response.data);
  });

// == Composant
const OneRM = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// == Export
export default OneRM;
