var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-eval-cheap-source-map', // 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "redux": "Redux",
    "react-redux": "ReactRedux",
  }
};
