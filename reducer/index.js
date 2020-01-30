import { GET_TODOS, GET_TODOS_SUCCESSED, GET_TODOS_FAILED } from "../types";
import { combineReducers } from "redux";

const initialState = { data: [], isLoading: false };

const fetchToDos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign(state, { isLoading: false });
    case GET_TODOS_SUCCESSED:
      return {
        data: action.payload,
        isLoading: true
      };
    case GET_TODOS_FAILED:
      return Object.assign(state, { isLoading: false, error: 'Oops' });
    default:
      return state;
  }
};

export default combineReducers({
  fetchToDos
});
