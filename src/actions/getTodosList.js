import axios from "axios";
import { BASE_URL } from "../constants";
import { toObject } from "../constants";

export const GET_TODOS = "GET_TODOS";
export const requestTodos = () => ({
  type: GET_TODOS
});

export const GET_TODOS_SUCCESSED = "GET_TODOS_SUCCESSED";
export const fetchTodosSuccessed = data => ({
  type: GET_TODOS_SUCCESSED,
  payload: data,
});

export const GET_TODOS_FAILED = "GET_TODOS_FAILED";
export const fetchTodosError = error => ({
  type: GET_TODOS_FAILED,
  error: error
});

export function fetchTodos() {
  return function action(dispatch) {
    dispatch(requestTodos());
    return axios(`${BASE_URL}/tasks`).then(
      ({ data }) => {
        dispatch(fetchTodosSuccessed(toObject(data)));
      },
      error => dispatch(fetchTodosError(error))
    );
  };
}

