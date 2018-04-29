const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackCommonConfig = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				exclude: /(node_modules|bower_components)/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: './src/assets',
				to: 'assets/'
			}
		])
	]
};

module.exports = webpackCommonConfig;
