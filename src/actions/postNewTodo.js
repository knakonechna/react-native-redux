import axios from "axios";
import { fetchTodos } from "./getTodosList";
import {BASE_URL, toObject} from "../constants";

export const POST_TODO = 'POST_TODO';
export const requestNewTodo = () => ({
  type: POST_TODO
});

export const POST_TODO_SUCCESSED = 'POST_TODO_SUCCESSED';
export const postNewTodoSuccessed = data => ({
  type: POST_TODO_SUCCESSED,
  payload: data
});

export const POST_TODO_FAILED = 'POST_TODO_FAILED';
export const postNewTodoError = error => ({
  type: POST_TODO_FAILED,
  error: error
});

export function postNewTodo(value, categoryId) {
  return function action(dispatch) {
    dispatch(requestNewTodo());
    return axios
      .post(`${BASE_URL}/tasks`, {
        context: value,
        categoryId: categoryId,
        checked: false
      })
      .then(({ data }) => {
        dispatch(postNewTodoSuccessed(toObject(data)), error =>
          dispatch(postNewTodoError(error))
        );
      });
  };
}
