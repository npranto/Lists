import { logger } from './../utils';

const KEY = '__LIST__';

export const getState = () => {
	const listOnLocalStorage = localStorage.getItem(KEY);
	return (listOnLocalStorage
		? Object.assign({}, JSON.parse(listOnLocalStorage))
		: Object.assign((
			{},
			{
				categories: [],
				list: {},
				newItem: '',
				activeCategoryId: null
			}
		))
	);
};

export const setState = (newState, cb) => {
	localStorage.setItem(KEY, JSON.stringify(newState));
	logger('STATE UPDATE...', getState());
	if (cb) {
		cb();
	}
};

export const reloadDOMContent = () => {
	window.location.reload();	// TODO: Brute force! Find a better way to dynamically update DOM element
};

