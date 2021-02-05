import axios from 'axios';

import {
  fetchUserData,
  fetchAllUsersData,
  CLICK_OF_MEMBER,
  ALL_MEMBER,
  CHANGE_MEMBER_RANK,
  fechtUserRole,
} from 'src/actions/pageProfil';
import { fetchUserDataPerformances } from 'src/actions/recapExercise';
import { LOGGED_IN, LOGGED_OUT } from 'src/actions/formInputLogin';
import { formInputProfilUserData, EDIT_REGISTER_PROFIL_USER } from 'src/actions/formInputProfil';

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
        store.dispatch(fechtUserRole(data.roles[0]));
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
    const objectifRepetition = store.getState().detailExercise.newObjectifRepetition;
    const objectifWeight = store.getState().detailExercise.newObjectifWeight;
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        console.log(objectifRepetition, objectifWeight);
        const { data } = response;
        console.log(data);
        store.dispatch(fetchUserDataPerformances(data));
        // store.dispatch();
        // store.dispatch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fonction qui permet de changer les infos de l'user dans la page profil
  const editRegisterProfilUser = (id) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/${id}/edit`;
    const {
      lastname,
      firstname,
      email,
      age,
    } = store.getState().profilForm;
    const ageConvertToNumber = Number(age);
    const TOKEN = localStorage.getItem('token');
    axios.post(API_URL, {
      lastname,
      firstname,
      email,
      age: ageConvertToNumber,
    },
    { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ChangeMemberRank = (id, newRole) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/${id}/edit`;
    const TOKEN = localStorage.getItem('token');
    console.log(id, newRole);
    axios.post(API_URL, {
      roles: [newRole],
    },

    { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (action.type) {
    case LOGGED_IN: {
      console.log('je passe par le login');
      fetchData();
      if (store.getState().profilPage.role !== 'ROLE_USER') {
        fetchAllUsers();
      }
      next(action);
      break;
    }
    case LOGGED_OUT: {
      localStorage.removeItem('token');
      next(action);
      break;
    }
    case CLICK_OF_MEMBER: {
      fetchMemberData(action.id);
      next(action);
      break;
    }
    case ALL_MEMBER: {
      fetchAllUsers();
      next(action);
      break;
    }
    case EDIT_REGISTER_PROFIL_USER: {
      editRegisterProfilUser(action.userId);
      next(action);
      break;
    }
    case CHANGE_MEMBER_RANK: {
      ChangeMemberRank(action.id, action.newRole);
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default profilPageMiddelware;
