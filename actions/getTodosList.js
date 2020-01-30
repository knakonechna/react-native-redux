import { GET_TODOS, GET_TODOS_SUCCESSED, GET_TODOS_FAILED } from "../types";
import axios from "axios";

const apiUrl = "http://localhost:3000";

export const requestTodos = () => ({
  type: GET_TODOS
});

export const fetchTodosSuccessed = data => ({
  type: GET_TODOS_SUCCESSED,
  payload: data
});

export const fetchTodosError = error => ({
  type: GET_TODOS_FAILED,
  error: error
});

export function fetchTodos() {
  return function action(dispatch) {
    dispatch(requestTodos());
    return axios(`${apiUrl}/tasks`).then(
      ({ data }) => {
        dispatch(fetchTodosSuccessed(data))
      },
      error => dispatch(fetchTodosError(error))
    );
  };
}
