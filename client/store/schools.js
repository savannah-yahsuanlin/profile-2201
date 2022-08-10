import axios from 'axios'

/**
 * ACTION TYPES
 */
const LOAD_SCHOOLS = "LOAD_SCHOOLS";
const UPDATE_SCHOOL = "UPDATE_SCHOOL";

/**
 * ACTION CREATORS
 */
const _loadSchools = (schools) => {
  return {
    type: LOAD_SCHOOLS,
    schools,
  };
};

/**
 * THUNK CREATORS
 */

export const loadSchools = () => {
  return async (dispatch) => {
    const schools = (await axios.get("/api/schools")).data;

    dispatch(_loadSchools(schools));
  };
};

export const updateSchool = (school, history) => {
  return async (dispatch) => {
    const updateSchool = (await axios.put(`/api/schools/${school.id}`, school)).data;
    dispatch({
      type: UPDATE_SCHOOL,
      school: updateSchool,
    });
    history.push("/schools");
  };
};


/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case LOAD_SCHOOLS:
      return action.schools;
    case UPDATE_SCHOOL:
      return state.map((school) => school.id === action.school.id ? action.school : school);
    default:
      return state;
  }
}
