import axios from "axios";
import { deleteTodo } from "./deleteTodos";
import { BASE_URL } from "../constants";

export const REMOVE_PAGE = "REMOVE_PAGE";
export const removePageRequest = () => ({
  type: REMOVE_PAGE
});

export const REMOVE_PAGE_SUCCESSED = "REMOVE_PAGE_SUCCESSED";
export const removePageSuccessed = data => ({
  type: REMOVE_PAGE_SUCCESSED,
  payload: data
});

export const REMOVE_PAGE_FAILED = "REMOVE_PAGE_FAILED";
export const removePageError = error => ({
  type: REMOVE_PAGE_FAILED,
  error: error
});

export function removePages(id, num, navigation, pageIds, tasksIds) {
  return function action(dispatch) {
    dispatch(removePageRequest());
    return axios
      .post(`${BASE_URL}/total`, { pages: num, pageIds: pageIds })
      .then(
        ({ data }) => {
          dispatch(removePageSuccessed(data));

          navigation.navigate("Content", { pageId: id, index: num - 1 });
	        tasksIds.forEach(el => dispatch(deleteTodo(el)))
        },
        e => dispatch(removePageError(e))
      );
  };
}
