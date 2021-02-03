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
} from 'src/actions/detailExercise';

const initialState = {
  detailExercise: '',
  AllGoals: [],
  newPerf: '',
  newPerfWeight: '',
  newObecjtifRepetition: '',
  newObecjtifWeight: '',
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
        newObecjtifRepetition: action.newObecjtifRepetition,
      };
    case NEW_OBJECTIF_WEIGHT:
      return {
        ...state,
        newObecjtifWeight: action.newObecjtifWeight,
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
    // case POST_NEW_PERF: {
    //   // const date = new Date();
    //   // const newGoals = {
    //   //   repetition: state.newPerf,
    //   //   weight: state.newPerfWeight,
    //   //   date: date.toLocaleDateString('fr-FR'),
    //   // };
    //   return {
    //     AllGoals: [...state.AllGoals],
    //   };
    // }
    default:
      return state;
  }
}

export default DetailExerciseReducer;
