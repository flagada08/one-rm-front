import axios from 'axios';

import { fetchUserData } from 'src/actions/pageProfil';
import { LOGGED_IN, LOGGED_OUT } from 'src/actions/formInputLogin';

const profilPageMiddelware = (store) => (next) => (action) => {
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

  switch (action.type) {
    case LOGGED_IN: {
      console.log('je passe par le login');
      fetchData();
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
