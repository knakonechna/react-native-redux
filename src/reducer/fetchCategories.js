import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_SUCCESSED
} from "../actions/fetchCategories";
import { ADD_CATEGORY_SUCCESSED } from "../actions/postCategory";

const initialState = {
  categories: {},
  isLoading: false
};

export const fetchCategories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return Object.assign(state, { isLoading: false });
    case FETCH_CATEGORIES_SUCCESSED:
      console.log(action.payload)
      return Object.assign(state, {
        categories: action.payload,
        isLoading: true
      });
    case ADD_CATEGORY_SUCCESSED:
      return Object.assign(state, {
        categories: {...state.categories, ...action.payload},
        isLoading: true
      });
    case FETCH_CATEGORIES_FAILED:
      return Object.assign(state, { isLoading: false, error: "Oops" });
    default:
      return state;
  }
};
