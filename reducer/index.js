import {GET_TODOS, GET_TODOS_SUCCESSED, GET_TODOS_FAILED, FILTER_TODO} from "../types";
import { combineReducers } from "redux";

const initialState = { data: [], isLoading: false, filterBy: 'all'};

function toObject(arr) {
  let rv = {};
  for (let i = 0; i < arr.length; ++i)
    rv[arr[i].id] = arr[i];
  return rv;
}

const fetchToDos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign(state, { isLoading: false });
    case GET_TODOS_SUCCESSED:
      return Object.assign(state, {
        data: toObject(action.payload),
        isLoading: true,
      });
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
