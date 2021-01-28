export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_DATA_EXERCISES = 'FETCH_USER_DATA_EXERCISES';
export const FETCH_USER_DATA_PERFORMANCES = 'FETCH_USER_DATA_PERFORMANCES';

export const fetchUserData = (data) => ({
  type: FETCH_USER_DATA,
  data,
});

export const fetchUserDataExercises = (dataExercises) => ({
  type: FETCH_USER_DATA_EXERCISES,
  dataExercises,
});

export const fetchUserDataPerformances = (dataPerformances) => ({
  type: FETCH_USER_DATA_PERFORMANCES,
  dataPerformances,
});

