const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

const webpackProdConfig = merge(common, {
	mode: 'production',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		})
	]
});

module.exports = webpackProdConfig;
