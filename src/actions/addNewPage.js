import axios from "axios";
import { BASE_URL } from "../constants";

export const ADD_PAGE = "ADD_PAGE";
export const addPageRequest = () => ({
  type: ADD_PAGE
});

export const ADD_PAGE_SUCCESSED = "ADD_PAGE_SUCCESSED";
export const addPageSuccessed = data => ({
  type: ADD_PAGE_SUCCESSED,
  payload: data
});

export const ADD_PAGE_FAILED = "ADD_PAGE_FAILED";
export const addPageError = error => ({
  type: ADD_PAGE_FAILED,
  error: error
});


export function addPages(num, navigation) {
  return function action(dispatch) {
  	dispatch(addPageRequest());
    return axios.post(`${BASE_URL}/total`, { pages: num }).then(
	    ({ data }) => {
	    	dispatch(addPageSuccessed(data));
		    navigation.navigate('Content', { pageId: data.pages });
	    },
	    e => dispatch(addPageError(e))
    );
  };
}

