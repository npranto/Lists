const customContextMenuState = {
	contextMenuSelector: '.ContextMenu',
	active: false,
	activeClass: 'ContextMenuActive'
};

const toggleCustomContextMenuOn = (elem) => {
	if (!customContextMenuState.active) {
		customContextMenuState.active = true;
		const contextMenuElem = elem.querySelector(customContextMenuState.contextMenuSelector);
		contextMenuElem.classList.add(customContextMenuState.activeClass);
	}
};

const toggleCustomContextMenuOff = () => {
	if (customContextMenuState.active) {
		customContextMenuState.active = false;
		const contextMenuElems = document.querySelectorAll(customContextMenuState.contextMenuSelector);
		contextMenuElems.forEach((menuElem) => {
			menuElem.classList.remove(customContextMenuState.activeClass);
		});
	}
};

const outsideClickListener = () => {
	document.addEventListener('click', (e) => {
		e.preventDefault();
		toggleCustomContextMenuOff();
	});
};

const keyupListener = () => {
	window.addEventListener('keyup', (e) => {
		if (e.keyCode === 27) {
			toggleCustomContextMenuOff();
		}
	});
};

const positionMenu = (e, elem) => {
	const contextMenu = elem.querySelector(customContextMenuState.contextMenuSelector);
	contextMenu.style.left = `${e.clientX}px`;
	contextMenu.style.top = `${e.clientY}px`;
};

const contextMenuListener = (elem) => {
	elem.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		toggleCustomContextMenuOn(elem);
		positionMenu(e, elem);
	});
	outsideClickListener();
	keyupListener();
};

const enableCustomContextMenuOnCategory = () => {
	const listCategoryElems = document.querySelectorAll('#ListCategory');
	if (listCategoryElems) {
		listCategoryElems.forEach((elem) => {
			contextMenuListener(elem);
		});
	}
};

export default enableCustomContextMenuOnCategory;
