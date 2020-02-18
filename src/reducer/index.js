import { fetchToDos } from "./fetchTodos";
import { fetchCategories } from "./fetchCategories";
import { combineReducers } from "redux";

export default combineReducers({
  fetchToDos,
  fetchCategories
});
