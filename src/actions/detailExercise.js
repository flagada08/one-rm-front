export const FETCH_USER_DETAIL_EXERCISE = 'FETCH_USER_DETAIL_EXERCISE';
export const CLICK_OF_ONE_EXERCISE = 'CLICK_OF_ONE_EXERCISE';
export const ADD_NEW_PERF = 'ADD_NEW_PERF';
export const POST_NEW_PERF = 'POST_NEW_PERF';

export const fetchUserDetailExercise = (detailExercise) => ({
  type: FETCH_USER_DETAIL_EXERCISE,
  detailExercise,
});

export const clickOfOneExercise = (exerciseId) => ({
  type: CLICK_OF_ONE_EXERCISE,
  exerciseId,
});

export const addNewPerf = (newPerf) => ({
  type: ADD_NEW_PERF,
  newPerf,
});

export const postNewPerf = (exerciseId) => ({
  type: POST_NEW_PERF,
  exerciseId,
});
