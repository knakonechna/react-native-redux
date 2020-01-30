import { POST_TODO, POST_TODO_SUCCESSED, POST_TODO_FAILED } from "../types";
import axios from "axios";
import { fetchTodos } from "./getTodosList";

const apiUrl = "http://localhost:3000";

export const requestNewTodo = () => ({
  type: POST_TODO
});

export const postNewTodoSuccessed = data => ({
  type: POST_TODO_SUCCESSED,
  payload: data
});

export const postNewTodoError = error => ({
  type: POST_TODO_FAILED,
  error: error
});

export function postNewTodo(value) {
  return function action(dispatch) {
    dispatch(requestNewTodo());
    return axios
      .post(`${apiUrl}/tasks`, {
        context: value,
        checked: false
      })
      .then(({data}) => {
        dispatch(postNewTodoSuccessed(data), error =>
          dispatch(postNewTodoError(error))
        );
      })
      .then(() => dispatch(fetchTodos()));
  };
}
