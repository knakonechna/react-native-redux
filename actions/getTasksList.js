import { GET_TASKS, GET_TASKS_SUCCESSED, GET_TASKS_FAILED } from "../types";
import axios from "axios";

const apiUrl = "http://localhost:3000";

export const requestTasks = () => ({
  type: GET_TASKS
});

export const fetchTasksSuccessed = data => ({
  type: GET_TASKS_SUCCESSED,
  payload: data
});

export const fetchTaskError = error => ({
  type: GET_TASKS_FAILED,
  error: error
});

export function fetchTasks() {
  return function action(dispatch) {
    dispatch(requestTasks());
    return axios(`${apiUrl}/tasks`).then(
      ({ data }) => dispatch(fetchTasksSuccessed(data)),
      error => dispatch(fetchTaskError(error))
    );
  };
}
