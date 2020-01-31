import {GET_TODOS, GET_TODOS_SUCCESSED, GET_TODOS_FAILED, FILTER_TODO} from "../types";
import { combineReducers } from "redux";

const initialState = { data: [], isLoading: false, filterBy: 'all'};

const fetchToDos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign(state, { isLoading: false });
    case GET_TODOS_SUCCESSED:
      return {
        data: action.payload,
        isLoading: true,
        filterBy: 'all'
      };
    case GET_TODOS_FAILED:
      return Object.assign(state, { isLoading: false, error: 'Oops' });
    case FILTER_TODO:
        return Object.assign(state, { filterBy: action.condition });
    default:
      return state;
  }
};

export default combineReducers({
  fetchToDos
});
