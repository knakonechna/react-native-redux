export const BASE_URL = 'http://localhost:3000';

const filter = ["All", "Active", "Completed"];

export const filterKey = filter.map(item => ({
	name: item,
	key: item.toLowerCase()
}));

export const toObject = (arr) => {
	let rv = {};
	for (let i = 0; i < arr.length; ++i) rv[arr[i].id] = arr[i];
	return rv;
};
