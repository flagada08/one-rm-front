import axios from 'axios';

import { fetchUserData } from 'src/actions/pageProfil';
import { LOGGED_IN, LOGGED_OUT } from 'src/actions/formInputLogin';
import { formInputProfilUserData } from 'src/actions/formInputProfil';

const profilPageMiddelware = (store) => (next) => (action) => {
  // fonction qui permert la récupération des données de l'utilisateur
  const fetchData = () => {
    const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/profil';
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        const {
          lastname,
          firstname,
          email,
          age,
        } = data;
        const { name } = data.fitnessRoom;
        store.dispatch(fetchUserData(response.data));
        store.dispatch(formInputProfilUserData(lastname, firstname, email, age, name));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fonction qui permert la récupération des performances en fonction de l'exercice
  const fetchDataGoals = () => {
    const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/workout/1/recap';
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        console.log(data);

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
      fetchDataGoals();
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
