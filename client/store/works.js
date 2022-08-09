import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const LOAD_WORKS = "LOAD_WORKS";
const DELETE_WORK = "DELETE_WORK";
const UPDATE_WORK = "UPDATE_WORK";
const CREATE_WORK = 'CREATE_WORK'

/**
 * THUNK CREATORS
 */
export const loadWorks = () => {
  return async (dispatch) => {
    const works = (await axios.get("/api/works")).data;
    dispatch({
      type: LOAD_WORKS,
      works,
    });
  };
};

export const updateWork = (work, history) => {
  return async (dispatch) => {
    const updatedWork = (await axios.put(`/api/works/${work.id}`, work)).data;
    dispatch({
      type: UPDATE_WORK,
      product: updatedWork,
    });
    history.push("/works");
  };
};

export const deleteWork = (work, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/works/${work.id}`);
    dispatch({
      type: DELETE_WORK,
      work,
    });
    history.push("/works");
  };
};

export const createWork = (work) => {
	return async dispatch => {
		const newWork = (await axios.post('/api/works', works)).data
		dispatch({
			type: CREATE_WORK,
			work: newWork
		})
	}
}

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case LOAD_WORKS:
      return action.works;
		case CREATE_WORK:
      return [...state, action.work];
    case UPDATE_WORK:
      return state.map((work) =>
        work.id === action.work.id ? action.work.id : work.id
      );
    case DELETE_WORK:
      return state.filter((work) => work.id !== action.work.id);
    default:
      return state;
  }
}
