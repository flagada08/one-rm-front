import axios from 'axios';
import {
  fetchUserDataPerformances,
  fetchDataExercisesPage,
  CLICK_OF_RECAP_EXERCISE,
  CLICK_OF_EXERCISES_PAGE,
} from 'src/actions/recapExercise';

const recapExerciseMiddleware = (store) => (next) => (action) => {
// fonction qui permert la récupération des derniére performances
  const fetchDataPerformances = () => {
    const API_URL = 'http://54.226.80.94/O-ne-RM/O-NE-RM/public/api/user/getLastPerformances';
    const TOKEN = localStorage.getItem('token');
    axios.get(API_URL, { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((response) => {
        const { data } = response;
        store.dispatch(fetchUserDataPerformances(data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchExercisesData = () => {
    const API_URL = 'http://54.226.80.94/O-ne-RM/O-NE-RM/public/workout';
    axios.get(API_URL)
      .then((response) => {
        const { data } = response;
        store.dispatch(fetchDataExercisesPage(data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (action.type) {
    case CLICK_OF_RECAP_EXERCISE: {
      if (store.getState().loginForm.loggedIn === true) {
        fetchDataPerformances();
      }
      next(action);
      break;
    }
    case CLICK_OF_EXERCISES_PAGE: {
      fetchExercisesData();
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default recapExerciseMiddleware;
