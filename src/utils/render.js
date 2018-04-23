const render = (parentId, Component, props) => {
    const container = document.getElementById(parentId);
    container.innerHTML = Component(props);
}

export default render;