var webpack = require('webpack')
var path = require('path');

module.exports = {
  cache: true,
  context: __dirname + '/src',
  entry: './index',
  output: {
    path: __dirname + '/lib',
    library: 'react-bootstrap-components',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: {
   'react': 'var React',
   'react/addons': 'var React'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-export-extensions'],
          presets: ['es2015', 'react']
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
