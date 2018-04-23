const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
	mode: 'development',	
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
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
      template: './public/index.html'
		})
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
	watch: false
}

module.exports = webpackConfig;