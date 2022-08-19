import {ActionTypes} from "@mui/base";
import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const LOAD_WORKS = "LOAD_WORKS";
const LOAD_WORK_IMG = "LOAD_WORK_IMG"
const DELETE_WORK = "DELETE_WORK";
const UPDATE_WORK = "UPDATE_WORK";
const CREATE_WORK = "CREATE_WORK";

const _loadWorks = (works) => {
  return {
    type: LOAD_WORKS,
    works
  }
}

const _updateWork = (work) => {
	return {
		type: UPDATE_WORK,
		work
	}
}


/**
 * THUNK CREATORS
 */
export const loadWorks = () => {
  return async(dispatch) => {
    const works = (await axios.get("/api/works")).data;
    dispatch(_loadWorks(works));
  };
};

export const loadWorkImg = (work) => {
  return async(dispatch) => {
    const imgs = (await axios.get(`/api/works/${work.id}/img`, work)).data
    dispatch({
      type: LOAD_WORK_IMG,
      imgs
    })
  }
}

export const updateWork = (work, img, history) => {
  return async(dispatch) => {
    const updatedWork = (await axios.put(`/api/works/${work.id}`, {work,img})).data;
    dispatch(_updateWork(updatedWork));
    history.push("/works");
  };
};

export const deleteWork = (work, history) => {
  return async(dispatch) => {
    await axios.delete(`/api/works/${work.id}`);
    dispatch({
      type: DELETE_WORK,
      work,
    });
    history.push("/works");
  };
};

export const createWork = (work) => {
  return async(dispatch) => {
    const newWork = (await axios.post("/api/works", work)).data;
    dispatch({
      type: CREATE_WORK,
      work: newWork,
    });
    history.push("/works");
  };
};

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case LOAD_WORKS:
      return action.works
    case CREATE_WORK:
      return [...state, action.work];
    case UPDATE_WORK:
      return state.map(work => work.id === action.work.id ? action.work : work );
    case DELETE_WORK:
      return state.filter(work => work.id !== action.work.id);
    default:
      return state;
  }
}
