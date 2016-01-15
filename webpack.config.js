var path = require('path');

module.exports = {
	entry: "./src/app.js",
	output: {
		path: __dirname + '/public/assets',
		publicPath: '/assets/',
		filename: 'app.js'
	},
	module: {
		loaders: [{ 
			test: /\.jsx?$/,
			loader: "babel-loader"
		}]
	}
}