import axios from 'axios';

import {
  fetchUserDetailExercise,
  CLICK_OF_ONE_EXERCISE,
  POST_NEW_PERF,
  fetchAllGoals,
} from 'src/actions/detailExercise';

const detailExerciseMiddelware = (store) => (next) => (action) => {
  /**
   * get custom request api for one exercise
   * @param {number} id
   * @return {void}
   */
  const fetchDataOneWorkout = (id) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/workout/${id}`;
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

  /**
   * get custom request api for all perf
   * @param {number} id
   * @return {void}
   */
  const fetchDataAllGoals = (id) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/workout/${id}/recap`;
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        store.dispatch(fetchAllGoals(response.data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * post custom request api for new perf
   * @param {number} id
   * @return {void}
   */
  const newPerformance = (id) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/workout/${id}/newPerf`;
    const TOKEN = localStorage.getItem('token');
    const { newPerf } = store.getState().detailExercise;
    const { newPerfWeight } = store.getState().detailExercise;
    const newPerfRepetition = Number(newPerfWeight);
    const newPerfParse = Number(newPerf);
    axios.post(API_URL,
      {
        date: 'now',
        repetition: newPerfRepetition,
        weight: newPerfParse,
        user: store.getState().profilPage.data.id,
      },
      { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
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
      fetchDataAllGoals(action.exerciseId);
      next(action);
      break;
    }
    case POST_NEW_PERF: {
      console.log('j\'ai posté une new perf');
      newPerformance(action.exerciseId);
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default detailExerciseMiddelware;
