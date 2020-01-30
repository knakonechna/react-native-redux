import { GET_TODOS, GET_TODOS_SUCCESSED, GET_TODOS_FAILED } from "../types";
import { combineReducers } from "redux";

const initialState = { todos: [], isLoading: false };

const fetchToDos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign(state, { isLoading: false });
    case GET_TODOS_SUCCESSED:
      return Object.assign(state, { todos: action.payload, isLoading: true });
    case GET_TODOS_FAILED:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  fetchToDos
});
