import axios from 'axios'

/**
 * ACTION TYPES
 */
const LOAD_USERS = "LOAD_USERS";
const UPDATE_USER = "UPDATE_USER";

/**
 * ACTION CREATORS
 */
const _loadUser = (users) => {
  return {
    type: LOAD_USERS,
    users,
  };
};

/**
 * THUNK CREATORS
 */

export const loadUsers = () => {
  return async (dispatch) => {
    const users = (await axios.get("/api/users")).data;
    dispatch(_loadUser(users));
  };
};
export const updateUser = (user, history) => {
  return async (dispatch) => {
    const updateUser = (await axios.put(`/api/users/${user.id}`, user)).data;
    dispatch({
      type: UPDATE_USER,
      user: updateUser,
    });
    history.push("/users");
  };
};


/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    case UPDATE_USER:
      return state.map((user) => user.id === action.user.id ? action.user : user);
    default:
      return state;
  }
}
