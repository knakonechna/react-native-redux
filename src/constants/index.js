export const BASE_URL = 'http://localhost:3000';

const filter = ["All", "Active", "Completed"];

export const filterKey = filter.map(item => ({
	name: item,
	key: item.toLowerCase()
}));


export const createUniqId = () => Math.random().toString(36).substr(2, 9);
export const toObject = (arr) => {
	let rv = {};
	for (let i = 0; i < arr.length; ++i) {
		rv[arr[i].id] = arr[i];
	}
	return rv;
};

export const filtered = (data, key, pageId) => {
  let result = [];

  if (key === "active") {
    result = Object.keys(data).filter(item => !data[item].checked);
  } else if (key === "completed") {
    result = Object.keys(data).filter(item => data[item].checked);
  } else {
    result = Object.keys(data);
  }
	const pageData = result.map(i => data[i]).filter(el => el.pageId === pageId);
	return {
    todos: pageData,
		ids: pageData.map(i=> i.id),
    count: pageData.length
  };
};
