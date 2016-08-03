var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/app',
  ],
  output: {
    path: './dist',
    filename: 'app.[hash].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.less$/,
      loader: 'style!css!autoprefixer!less'
    }, {
      test: /\.scss$/,
      loader: 'style!css!autoprefixer!sass'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.(svg|jpg|png)$/,
      loader: 'url'
    }, {
      test: /\.(otf|eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("production") 
       }
    })
  ],
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, 'node_modules')]
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  }
};
