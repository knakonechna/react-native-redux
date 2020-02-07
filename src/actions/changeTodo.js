import axios from "axios";
import { fetchTodos } from "./getTodosList";
import { BASE_URL } from "../constants";

export const PUT_TODO = "PUT_TODO";
const changeTodoRequest = () => ({
  type: PUT_TODO,
});

export const PUT_TODO_SUCCESSED = "PUT_TODO_SUCCESSED";
const changeTodoSuccessed = () => ({
  type: PUT_TODO_SUCCESSED
});

export const PUT_TODO_FAILED = "PUT_TODO_FAILED";
const changeTodoFailed = error => ({
  type: PUT_TODO_FAILED,
  error
});

export function changeTodo(todo) {
  return function action(dispatch) {
    dispatch(changeTodoRequest());
    return axios
      .put(`${BASE_URL}/tasks/${todo.id}`, { ...todo })
      .then(
        () => dispatch(changeTodoSuccessed()),
        e => {
          dispatch(changeTodoFailed(e));
        }
      )
      .then(() => dispatch(fetchTodos()));
  };
}
