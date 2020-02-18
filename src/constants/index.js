export const BASE_URL = 'http://localhost:3000';

const filter = ["All", "Active", "Completed"];

export const filterKey = filter.map(item => ({
	name: item,
	key: item.toLowerCase()
}));

export const toObject = (data) => {
	let rv = {};
	if (Array.isArray(data)) {
		data.forEach(el => {
			rv[el.id] = el;
		});
	} else {
		rv[data.id] = data
	}
	return rv;
};

export const filtered = (data, key, categoryId) => {
  let result = [];

  if (key === "active") {
    result = Object.keys(data).filter(item => !data[item].checked);
  } else if (key === "completed") {
    result = Object.keys(data).filter(item => data[item].checked);
  } else {
    result = Object.keys(data);
  }
	const pageData = result.map(i => data[i]).filter(el => el.categoryId === categoryId);
	return {
    todos: pageData,
		ids: pageData.map(i=> i.id),
    count: pageData.length
  };
};
