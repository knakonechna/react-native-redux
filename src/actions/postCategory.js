import axios from "axios";
import {BASE_URL, toObject} from "../constants";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const addCategoryRequest = () => ({
  type: ADD_CATEGORY
});

export const ADD_CATEGORY_SUCCESSED = "ADD_CATEGORY_SUCCESSED";
export const addCategorySuccessed = data => ({
  type: ADD_CATEGORY_SUCCESSED,
  payload: data
});

export const ADD_CATEGORY_FAILED = "ADD_CATEGORY_FAILED";
export const addCategoryError = error => ({
  type: ADD_CATEGORY_FAILED,
  error: error
});

export function addPages(value) {
  return function action(dispatch) {
    dispatch(addCategoryRequest());
    return axios.post(`${BASE_URL}/categories`, { name: value }).then(
      ({ data }) => {
        dispatch(addCategorySuccessed(toObject(data)));
      },
      e => dispatch(addCategoryError(e))
    );
  };
}
