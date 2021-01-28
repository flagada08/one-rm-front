import axios from 'axios';

import { fetchUserDetailExercise, CLICK_OF_ONE_EXERCISE } from 'src/actions/detailExercise';
import { LOGGED_OUT } from 'src/actions/formInputLogin';

const detailExerciseMiddelware = (store) => (next) => (action) => {
  // fonction qui permert la récupération d'un exercice via son id
  const fetchDataOneWorkout = (id) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/workout/${id}/recap`;
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        store.dispatch(fetchUserDetailExercise(response.data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (action.type) {
    case CLICK_OF_ONE_EXERCISE: {
      console.log(action.exerciseId);
      fetchDataOneWorkout(action.exerciseId);
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

export default detailExerciseMiddelware;
