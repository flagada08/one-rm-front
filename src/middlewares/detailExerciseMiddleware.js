import axios from 'axios';

import {
  fetchUserDetailExercise,
  CLICK_OF_ONE_EXERCISE,
  POST_NEW_PERF,
  fetchAllGoals,
  ADD_MESSAGE,
  fetchUserMessage,
  addNewPerf,
  addNewPerfWeight,
  ADD_OBJECTIF,
  addNewObjectifRepetition,
  addNewObjectifWeight,
  addNewPerfMessage,
  addNewObjectifMessage,
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
        store.dispatch(fetchAllGoals(response.data)); //! a voir !
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
  const newPerformance = (id, userId) => {
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
        user_id: userId,
      },
      { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        store.dispatch(addNewPerfMessage('performance Ajouté !'));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   *TODO requete test pour recuperer les datas pour un utilisateur pour le coach
   * @param {number} id
   *
   */
  const postUserId = (id, userId) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/coach/user/workout/${id}/recap`;
    const TOKEN = localStorage.getItem('token');
    axios.post(API_URL, { user_id: userId }, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        if (data.repetition !== null) {
          store.dispatch(addNewPerf(data[data.length - 1].repetition));
          store.dispatch(addNewPerfWeight(data[data.length - 1].weight));
        }
        store.dispatch(fetchAllGoals(data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   *requete pour poster un nouveaux commentaire
   *
   *
   */
  const postNewMessage = (userId, exerciseId) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/coach/user/${userId}/exercise/postComment`;
    const TOKEN = localStorage.getItem('token');
    const message = store.getState().detailExercise.setMessage;
    axios.post(API_URL, {
      user: userId,
      exercise: exerciseId,
      content: message,
    }, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchMessage = (userId, exerciseId) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/${userId}/workout/getComment`;
    const TOKEN = localStorage.getItem('token');
    axios.post(API_URL, { exercise: exerciseId }, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        store.dispatch(fetchUserMessage(data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addObjectif = (exerciseId, userId) => {
    const API_URL = `http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/user/workout/${exerciseId}/newGoal`;
    const TOKEN = localStorage.getItem('token');
    const { newObjectifWeight } = store.getState().detailExercise;
    const { newObjectifRepetition } = store.getState().detailExercise;
    const convertToNumberRepetition = Number(newObjectifRepetition);
    const convertToNumberWeight = Number(newObjectifWeight);
    axios.post(API_URL, {
      weight: convertToNumberWeight,
      repetition: convertToNumberRepetition,
      user_id: userId,
    },
    { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        store.dispatch(addNewObjectifRepetition(''));
        store.dispatch(addNewObjectifWeight(''));
        store.dispatch(addNewObjectifMessage('Objectif Ajouté !'));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (action.type) {
    case CLICK_OF_ONE_EXERCISE: {
      if (store.getState().profilPage.role !== 'ROLE_USER') {
        postUserId(action.exerciseId, action.userId);
      }
      if (store.getState().profilPage.role === 'ROLE_USER') {
        fetchDataAllGoals(action.exerciseId);
      }
      fetchDataOneWorkout(action.exerciseId);
      fetchMessage(action.userId, action.exerciseId);
      store.dispatch(addNewPerfMessage(''));
      store.dispatch(addNewObjectifMessage(''));
      next(action);
      break;
    }
    case POST_NEW_PERF: {
      console.log('j\'ai posté une new perf');
      newPerformance(action.exerciseId, action.userId);
      next(action);
      break;
    }
    case ADD_OBJECTIF: {
      addObjectif(action.exerciseId, action.userId);
      next(action);
      break;
    }
    case ADD_MESSAGE: {
      postNewMessage(action.userId, action.exerciseId);
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default detailExerciseMiddelware;
