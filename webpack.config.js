var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  publicPath: '/public/',
  output: { path: __dirname + '/build', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.json$/, loader: "json" },
      { test: /\.(png|woff|)$/, loader: 'url-loader?limit=100000' }
    ]
  },
};
