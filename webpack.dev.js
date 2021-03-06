const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const webpackDevConfig = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	}
});

module.exports = webpackDevConfig;
