import axios from "axios";
import { fetchTodos } from "./getTodosList";
import { BASE_URL } from "../constants";

export const DELETE_TODO = 'DELETE_TODO';
export const deleteRequest = () => ({
  type: DELETE_TODO
});

export const DELETE_TODO_SUCCESSED = 'DELETE_TODO_SUCCESSED';
export const deleteRequestSuccessed = () => ({
  type: DELETE_TODO_SUCCESSED
});

export const DELETE_TODO_FAILED = 'DELETE_TODO_FAILED';
export const deleteRequestFailed = error => ({
  type: DELETE_TODO_FAILED,
  error
});

export function deleteTodo(id) {
  return function action(dispatch) {
    dispatch(deleteRequest());
    return axios
      .delete(`${BASE_URL}/tasks/${id}`)
      .then(
        () => {
          dispatch(deleteRequestSuccessed())
        },
        e => {
          dispatch(deleteRequestFailed(e));
        }
      )
      .then(() => dispatch(fetchTodos()));
  };
}
