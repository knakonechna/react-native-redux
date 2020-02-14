import {
  GET_TODOS,
  GET_TODOS_SUCCESSED,
  GET_TODOS_FAILED
} from "../actions/getTodosList";
import { FILTER_TODO } from "../actions/filterTodo";
import { ADD_PAGE_SUCCESSED } from "../actions/addNewPage";
import { combineReducers } from "redux";
import { filterKey } from "../constants";

const initialState = {
  data: [],
  isLoading: false,
  filterBy: filterKey[0].key,
  pages: 1,
  pageIds: []
};

const fetchToDos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return Object.assign(state, { isLoading: false });
    case GET_TODOS_SUCCESSED:
      return Object.assign(state, {
        data: action.payload,
        isLoading: true,
        filterBy: filterKey[0].key,
        pages: action.pageIds.length,
        pageIds: action.pageIds,
      });
    case GET_TODOS_FAILED:
      return Object.assign(state, { isLoading: false, error: "Oops" });
    case FILTER_TODO:
      return Object.assign(state, { filterBy: action.condition });
    case ADD_PAGE_SUCCESSED:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  fetchToDos
});
