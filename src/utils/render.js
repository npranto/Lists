const render = (parentId, Component, props) => {
	return new Promise((resolve, reject) => {
		try {
			const container = document.getElementById(parentId);
			container.innerHTML = Component(props);
			resolve(true);
		}
		catch(e) {
			console.error(e);
			reject(false, e);
		}
		
	})
   
}

export default render;