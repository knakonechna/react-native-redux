import axios from "axios";
import { BASE_URL } from "../constants";
import { fetchCategories } from "./fetchCategories";
import { deleteTodo } from "./deleteTodos";

export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const deleteRequest = () => ({
  type: DELETE_CATEGORY
});

export const DELETE_CATEGORY_SUCCESSED = "DELETE_CATEGORY_SUCCESSED";
export const deleteRequestSuccessed = () => ({
  type: DELETE_CATEGORY_SUCCESSED
});

export const DELETE_CATEGORY_FAILED = "DELETE_CATEGORY_FAILED";
export const deleteRequestFailed = error => ({
  type: DELETE_CATEGORY_FAILED,
  error
});

export function deleteCategory(id, tasksIds = []) {
  return function action(dispatch) {
    dispatch(deleteRequest());
    return axios
      .delete(`${BASE_URL}/categories/${id}`)
      .then(
        () => {
          dispatch(deleteRequestSuccessed());
          tasksIds.length > 0 && tasksIds.map(id => dispatch(deleteTodo(id)));
        },
        e => {
          dispatch(deleteRequestFailed(e));
        }
      )
      .then(() => dispatch(fetchCategories()));
  };
}
