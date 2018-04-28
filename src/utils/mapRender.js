const mapRender = (array, cb) =>
	array.map((item, index, arr) => cb(item, index, arr)).join('\n');

export default mapRender;
