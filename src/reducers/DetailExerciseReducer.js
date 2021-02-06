import {
  FETCH_USER_DETAIL_EXERCISE,
  ADD_NEW_PERF, ADD_NEW_PERF_WEIGHT,
  FETCH_USER_ALL_GOALS,
  SET_NEW_MESSAGE,
  FETCH_USER_MESSAGE,
  ADD_MESSAGE,
  NEW_OBJECTIF_REPETITION,
  NEW_OBJECTIF_WEIGHT,
  POST_NEW_PERF,
  ADD_NEW_PERF_MESSAGE,
  ADD_NEW_OBJECTIF_MESSAGE,
} from 'src/actions/detailExercise';

const initialState = {
  detailExercise: '',
  AllGoals: [],
  addNewPerfMessage: '',
  comfirmMessageObjectif: '',
  newPerf: '',
  newPerfWeight: '',
  newObjectifRepetition: '',
  newObjectifWeight: '',
  setMessage: '',
  allMessages: [],
};

function DetailExerciseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER_DETAIL_EXERCISE:
      return {
        ...state,
        detailExercise: action.detailExercise,
      };
    case ADD_NEW_PERF:
      return {
        ...state,
        newPerf: action.newPerf,
      };
    case ADD_NEW_PERF_WEIGHT:
      return {
        ...state,
        newPerfWeight: action.newPerfWeight,
      };
    case NEW_OBJECTIF_REPETITION:
      return {
        ...state,
        newObjectifRepetition: action.newObjectifRepetition,
      };
    case NEW_OBJECTIF_WEIGHT:
      return {
        ...state,
        newObjectifWeight: action.newObjectifWeight,
      };
    case FETCH_USER_ALL_GOALS:
      return {
        ...state,
        AllGoals: action.AllGoals,
      };
    case SET_NEW_MESSAGE:
      return {
        ...state,
        setMessage: action.newMessage,
      };
    case FETCH_USER_MESSAGE: {
      return {
        ...state,
        allMessages: [...action.allMessages],

      };
    }
    case ADD_MESSAGE: {
      const message = {
        content: state.setMessage,
      };
      return {
        ...state,
        allMessages: [...state.allMessages, message],
        setMessage: '',
      };
    }
    case POST_NEW_PERF: {
      const date = new Date();
      const newGoals = {
        repetition: state.newPerf,
        weight: state.newPerfWeight,
        date: date.toLocaleDateString('fr-FR'),
      };
      return {
        ...state,
        AllGoals: state.AllGoals.length > 0 ? [...state.AllGoals, newGoals] : newGoals,
        newPerf: '',
        newPerfWeight: '',
      };
    }
    case ADD_NEW_PERF_MESSAGE: {
      return {
        ...state,
        addNewPerfMessage: action.message,
      };
    }
    case ADD_NEW_OBJECTIF_MESSAGE: {
      return {
        ...state,
        comfirmMessageObjectif: action.message,
      };
    }
    default:
      return state;
  }
}

export default DetailExerciseReducer;
