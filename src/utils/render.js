const { document } = window;

const render = (parentId, Component, props) =>
  new Promise((resolve, reject) => {
    try {
      const container = document.getElementById(parentId);
      container.innerHTML = Component(props);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });

export default render;
