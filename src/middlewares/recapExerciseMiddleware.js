import axios from 'axios';
import { fetchUserDataPerformances, CLICK_OF_RECAP_EXERCISE } from 'src/actions/recapExercise';

const recapExerciseMiddleware = (store) => (next) => (action) => {
// fonction qui permert la récupération des derniére performances
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
    case CLICK_OF_RECAP_EXERCISE: {
      fetchDataPerformances();
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default recapExerciseMiddleware;
