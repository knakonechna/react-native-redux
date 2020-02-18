import axios from "axios";
import { toObject } from "../constants";
import { BASE_URL } from "../constants";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const requestFetchCategories = () => ({
  type: FETCH_CATEGORIES
});

export const FETCH_CATEGORIES_SUCCESSED = "FETCH_CATEGORIES_SUCCESSED";
export const fetchCategoriesSuccessed = data => ({
  type: FETCH_CATEGORIES_SUCCESSED,
  payload: data
});

export const FETCH_CATEGORIES_FAILED = "FETCH_CATEGORIES_FAILED";
export const fetchCategoriesError = error => ({
  type: FETCH_CATEGORIES_FAILED,
  error: error
});

export function fetchCategories() {
  return function action(dispatch) {
    dispatch(requestFetchCategories());
    return axios(`${BASE_URL}/categories`).then(
      ({ data }) => {
        dispatch(fetchCategoriesSuccessed(toObject(data)));
      },
      error => dispatch(fetchCategoriesError(error))
    );
  };
}
