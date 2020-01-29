import { GET_TASKS, GET_TASKS_SUCCESSED, GET_TASKS_FAILED } from "../types";
import { combineReducers } from "redux";

const initialState = { tasks: [], isLoading: false };

const fetchToDos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return Object.assign(state, { isLoading: true });
    case GET_TASKS_SUCCESSED:
      return Object.assign(state, { tasks: action.payload, isLoading: false });
    case GET_TASKS_FAILED:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  fetchToDos
});
