import path from 'path';
import webpack from 'webpack';

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8000',
		'webpack/hot/only-dev-server',
		'./src/main'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: 'dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js',
	},
  devtool: '#cheap-module-eval-source-map',
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel',
				include: __dirname,
				query: {
					presets: [ 'es2015', 'react', 'react-hmre' ]
				}
			}
		],
	}
};
