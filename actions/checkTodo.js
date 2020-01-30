import { CHECK_TODO, CHECK_TODO_SUCCESSED, CHECK_TODO_FAILED } from "../types";
import axios from "axios";
import { fetchTodos } from "./getTodosList";

const apiUrl = "http://localhost:3000";

export const checkTodoRequest = () => ({
  type: CHECK_TODO
});

export const checkTodoSuccessed = () => ({
  type: CHECK_TODO_SUCCESSED
});

export const checkTodoFailed = () => ({
  type: CHECK_TODO_FAILED,
  error
});

export function checkTodo(todo) {
  return function action(dispatch) {
    dispatch(checkTodoRequest());
    return axios
      .put(`${apiUrl}/tasks/${todo.id}`, {
        ...todo,
        checked: !todo.checked
      })
      .then(
        () => {
        	console.log('here')
        	dispatch(checkTodoSuccessed())
        },
        e => dispatch(checkTodoFailed(e))
      )
      .then(() => dispatch(fetchTodos()));
  };
}
