export const FETCH_USER_DATA_PERFORMANCES = 'FETCH_USER_DATA_PERFORMANCES';
export const CLICK_OF_RECAP_EXERCISE = 'CLICK_OF_RECAP_EXERCISE';
export const CLICK_OF_EXERCISES_PAGE = 'CLICK_OF_EXERCISES_PAGE';
export const FETCH_DATA_EXERCISES_PAGE = 'FETCH_DATA_EXERCISES_PAGE';

export const clickOfRecapExercise = () => ({
  type: CLICK_OF_RECAP_EXERCISE,
});

export const fetchUserDataPerformances = (dataPerformances) => ({
  type: FETCH_USER_DATA_PERFORMANCES,
  dataPerformances,
});

export const clickOfExercisesPage = () => ({
  type: CLICK_OF_EXERCISES_PAGE,
});

export const fetchDataExercisesPage = (dataExercisesPage) => ({
  type: FETCH_DATA_EXERCISES_PAGE,
  dataExercisesPage,
});
