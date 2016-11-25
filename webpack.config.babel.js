import path from 'path';
import webpack from 'webpack';

module.exports = {
	entry: {
	  preload: './target/main.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: 'dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js',
	},
	devtool: '#cheap-module-eval-source-map'
};
