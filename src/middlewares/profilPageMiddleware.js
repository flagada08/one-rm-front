import axios from 'axios';

import { fetchUserData, fetchUserDataExercises, fetchUserDataPerformances } from 'src/actions/pageProfil';
import { LOGGED_IN, LOGGED_OUT } from 'src/actions/formInputLogin';

const profilPageMiddelware = (store) => (next) => (action) => {
  // fonction qui permert la récupération des données de l'utilisateur
  const fetchData = () => {
    const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/profil';
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        store.dispatch(fetchUserData(response.data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // fonction qui permert la récupération des données de l'exercice
  const fetchDataExercises = () => {
    const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/workout';
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        store.dispatch(fetchUserDataExercises(response.data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // fonction qui permert la récupération les derniére performances
  const fetchDataPerformances = () => {
    const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/getLastPerformances';
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        store.dispatch(fetchUserDataPerformances(response.data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (action.type) {
    case LOGGED_IN: {
      console.log('je passe par le login');
      fetchData();
      fetchDataExercises();
      fetchDataPerformances();
      next(action);
      break;
    }
    case LOGGED_OUT: {
      localStorage.removeItem('token');
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default profilPageMiddelware;
