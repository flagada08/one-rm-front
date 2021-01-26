import axios from 'axios';

import { fetchUserData } from 'src/actions/pageProfil';
import { SUBMIT_LOGIN } from 'src/actions/formInputLogin';

const profilPageMiddelware = (store) => (next) => (action) => {
  const fetchData = () => {
    const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/profil';
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        console.log(response.data);
        store.dispatch(fetchUserData(response.data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (action.type) {
    case SUBMIT_LOGIN: {
      fetchData();
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default profilPageMiddelware;
