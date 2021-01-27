export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_DATA_EXERCISES = 'FETCH_USER_DATA_EXERCISES';

export const fetchUserData = (data) => ({
  type: FETCH_USER_DATA,
  data,
});

export const fetchUserDataExercises = (dataExercises) => ({
  type: FETCH_USER_DATA_EXERCISES,
  dataExercises,
});
