export const FETCH_USER_DATA_PERFORMANCES = 'FETCH_USER_DATA_PERFORMANCES';
export const CLICK_OF_RECAP_EXERCISE = 'CLICK_OF_RECAP_EXERCISE';

export const clickOfRecapExercise = () => ({
  type: CLICK_OF_RECAP_EXERCISE,
});

export const fetchUserDataPerformances = (dataPerformances) => ({
  type: FETCH_USER_DATA_PERFORMANCES,
  dataPerformances,
});
