import axios from "axios";
import { fetchTodos } from "./getTodosList";
import { BASE_URL } from "../constants";
import {fetchCategories} from "./fetchCategories";

export const PUT_CATEGORY = "PUT_CATEGORY";
const changeCategoryRequest = () => ({
  type: PUT_CATEGORY,
});

export const PUT_CATEGORY_SUCCESSED = "PUT_CATEGORY_SUCCESSED";
const changeCategorySuccessed = () => ({
  type: PUT_CATEGORY_SUCCESSED
});

export const PUT_CATEGORY_FAILED = "PUT_CATEGORY_FAILED";
const changeCategoryFailed = error => ({
  type: PUT_CATEGORY_FAILED,
  error
});

export function changeCategory(category) {
  return function action(dispatch) {
    dispatch(changeCategoryRequest());
    return axios
      .put(`${BASE_URL}/categories/${category.id}`, { ...category })
      .then(
        () => dispatch(changeCategorySuccessed()),
        e => {
          dispatch(changeCategoryFailed(e));
        }
      )
      .then(() => dispatch(fetchCategories()));
  };
}
