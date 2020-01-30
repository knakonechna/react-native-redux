import {
  DELETE_TODO,
  DELETE_TODO_SUCCESSED,
  DELETE_TODO_FAILED
} from "../types";
import axios from "axios";
import { fetchTodos } from "./getTodosList";

const apiUrl = "http://localhost:3000";

export const deleteRequest = () => ({
  type: DELETE_TODO
});

export const deleteRequestSuccessed = () => ({
  type: DELETE_TODO_SUCCESSED
});

export const deleteRequestFailed = error => ({
  type: DELETE_TODO_FAILED,
  error
});

export function deleteTodo(id) {
  return function action(dispatch) {
    dispatch(deleteRequest());
    return axios
      .delete(`${apiUrl}/tasks/${id}`)
      .then(
        () => dispatch(deleteRequestSuccessed()),
        e => {
          dispatch(deleteRequestFailed(e));
        }
      )
      .then(() => dispatch(fetchTodos()));
  };
}
