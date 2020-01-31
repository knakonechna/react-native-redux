import { FILTER_TODO } from "../types";

export const filterTodoBy = (condition) => ({
		type: FILTER_TODO,
		condition,
});
