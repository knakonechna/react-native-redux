import {
  GET_TODOS,
  GET_TODOS_SUCCESSED,
  GET_TODOS_FAILED
} from "../actions/getTodosList";
import { FILTER_TODO } from "../actions/filterTodo";
import { filterKey } from "../constants";
import { POST_TODO_SUCCESSED } from "../actions/postNewTodo";

const initialState = {
  tasks: {},
  isLoading: false,
  filterBy: filterKey[0].key
};

export const fetchToDos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign(state, { isLoading: false });
    case GET_TODOS_SUCCESSED:
      return Object.assign(state, {
        tasks: action.payload,
        isLoading: true,
        filterBy: filterKey[0].key
      });
    case GET_TODOS_FAILED:
      return Object.assign(state, { isLoading: false, error: "Oops" });
    case FILTER_TODO:
      return Object.assign(state, { filterBy: action.condition });
    case POST_TODO_SUCCESSED:
      return Object.assign(state, {
        tasks:  {...state.tasks, ...action.payload},
      });
    default:
      return state;
  }
};
