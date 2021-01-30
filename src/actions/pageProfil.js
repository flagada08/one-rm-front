export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_DATA_PERFORMANCES = 'FETCH_USER_DATA_PERFORMANCES';

export const fetchUserData = (data) => ({
  type: FETCH_USER_DATA,
  data,
});
