export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_ALL_USERS_DATA = 'FETCH_ALL_USERS_DATA';
export const CLICK_OF_MEMBER = 'CLICK_OF_MEMBER';
export const ALL_MEMBER = 'ALL_MEMBER';
export const CLICK_DELETE_MEMBER = 'CLICK_DELETE_MEMBER';
export const CHANGE_MEMBER_RANK = 'CHANGE_MEMBER_RANK';
export const FETCH_USER_ROLE = 'FETCH_USER_ROLE';

export const fetchUserData = (data) => ({
  type: FETCH_USER_DATA,
  data,
});

export const fetchAllUsersData = (data) => ({
  type: FETCH_ALL_USERS_DATA,
  data,
});

export const clickOfMember = (id) => ({
  type: CLICK_OF_MEMBER,
  id,
});

export const allMembers = () => ({
  type: ALL_MEMBER,
});

export const clickDeleteMember = (id) => ({
  type: CLICK_DELETE_MEMBER,
  id,
});

export const changeMemberRank = (id, newRole) => ({
  type: CHANGE_MEMBER_RANK,
  id,
  newRole,
});

export const fechtUserRole = (userRole) => ({
  type: FETCH_USER_ROLE,
  userRole,
});
