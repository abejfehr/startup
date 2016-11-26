import path from 'path';
import webpack from 'webpack';

module.exports = {
	entry: [
		'./src/main.js',
	],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: 'dist/',
		filename: '[name].js',
		chunkFilename: '[id].js',
	},
  devtool: '#cheap-module-eval-source-map',
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css',
			},
			{
				test: /\.jsx?$/,
				exclude: '/node_modules/',
				loader: 'babel',
				include: __dirname,
			}
		],
	}
};
