export const FETCH_USER_DETAIL_EXERCISE = 'FETCH_USER_DETAIL_EXERCISE';
export const CLICK_OF_ONE_EXERCISE = 'CLICK_OF_ONE_EXERCISE';
export const ADD_NEW_PERF = 'ADD_NEW_PERF';
export const POST_NEW_PERF = 'POST_NEW_PERF';
export const ADD_NEW_PERF_WEIGHT = 'ADD_NEW_PERF_WEIGHT';
export const FETCH_USER_ALL_GOALS = 'FETCH_USER_ALL_GOALS';
export const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const FETCH_USER_MESSAGE = 'FETCH_USER_MESSAGE';
export const NEW_OBJECTIF_REPETITION = 'NEW_OBJECTIF_REPETITION';
export const NEW_OBJECTIF_WEIGHT = 'NEW_OBJECTIF_WEIGHT';
export const ADD_OBJECTIF = 'ADD_OBJECTIF';
export const ADD_NEW_PERF_MESSAGE = 'ADD_NEW_PERF_MESSAGE';

export const fetchUserDetailExercise = (detailExercise) => ({
  type: FETCH_USER_DETAIL_EXERCISE,
  detailExercise,
});

export const clickOfOneExercise = (exerciseId, userId) => ({
  type: CLICK_OF_ONE_EXERCISE,
  exerciseId,
  userId,
});

export const addNewPerf = (newPerf) => ({
  type: ADD_NEW_PERF,
  newPerf,
});

export const postNewPerf = (exerciseId, userId) => ({
  type: POST_NEW_PERF,
  exerciseId,
  userId,
});

export const addNewPerfWeight = (newPerfWeight) => ({
  type: ADD_NEW_PERF_WEIGHT,
  newPerfWeight,
});

export const fetchAllGoals = (AllGoals) => ({
  type: FETCH_USER_ALL_GOALS,
  AllGoals,
});

export const setMessageValue = (newMessage) => ({
  type: SET_NEW_MESSAGE,
  newMessage,
});

export const addMessage = (userId, exerciseId) => ({
  type: ADD_MESSAGE,
  userId,
  exerciseId,
});

export const fetchUserMessage = (allMessages) => ({
  type: FETCH_USER_MESSAGE,
  allMessages,
});

export const addNewObjectifRepetition = (newObjectifRepetition) => ({
  type: NEW_OBJECTIF_REPETITION,
  newObjectifRepetition,
});

export const addNewObjectifWeight = (newObjectifWeight) => ({
  type: NEW_OBJECTIF_WEIGHT,
  newObjectifWeight,
});

export const addObjectif = (exerciseId, userId) => ({
  type: ADD_OBJECTIF,
  exerciseId,
  userId,
});
export const addNewPerfMessage = (message) => ({
  type: ADD_NEW_PERF_MESSAGE,
  message,
});
