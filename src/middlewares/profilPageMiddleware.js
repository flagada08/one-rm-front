import axios from 'axios';

import {
  fetchUserData,
  fetchAllUsersData,
  CLICK_OF_MEMBER,
  ALL_MEMBER,
} from 'src/actions/pageProfil';
import { fetchUserDataPerformances } from 'src/actions/recapExercise';
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

  const fetchAllUsers = () => {
    const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/coach/user';
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        store.dispatch(fetchAllUsersData(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchMemberData = (id) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/coach/user/${id}/getLastPerformances`;
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        console.log(data);
        store.dispatch(fetchUserDataPerformances(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (action.type) {
    case LOGGED_IN: {
      console.log('je passe par le login');
      fetchData();
      fetchAllUsers();
      next(action);
      break;
    }
    case LOGGED_OUT: {
      localStorage.removeItem('token');
      next(action);
      break;
    }
    case CLICK_OF_MEMBER: {
      console.log(action.id);
      fetchMemberData(action.id);
      next(action);
      break;
    }
    case ALL_MEMBER: {
      console.log(action.id);
      fetchAllUsers();
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default profilPageMiddelware;
