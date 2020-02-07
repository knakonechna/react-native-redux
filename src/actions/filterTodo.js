export const FILTER_TODO = 'FILTER_TODO';
export const filterTodoBy = (condition) => ({
		type: FILTER_TODO,
		condition,
});
