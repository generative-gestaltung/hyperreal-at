var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app',
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
      test: /\.less/,
      loader: 'style!css!autoprefixer!less'
    }, {
      test: /\.scss/,
      loader: 'style!css!autoprefixer!sass'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.(svg|jpg|png)$/,
      loader: 'url'
    }, {
      test: /\.(otf|ttf|eot|woff|woff2)$/,
      loader: 'url'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
};
