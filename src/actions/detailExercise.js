export const FETCH_USER_DETAIL_EXERCISE = 'FETCH_USER_DETAIL_EXERCISE';
export const CLICK_OF_ONE_EXERCISE = 'CLICK_OF_ONE_EXERCISE';

export const fetchUserDetailExercise = (detailExercise) => ({
  type: FETCH_USER_DETAIL_EXERCISE,
  detailExercise,
});

export const clickOfOneExercise = (exerciseId) => ({
  type: CLICK_OF_ONE_EXERCISE,
  exerciseId,
});
