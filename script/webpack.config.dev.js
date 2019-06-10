const base = require('./base');
const merge = require('webpack-merge');
const { resolve } = require('./util');
const webpack = require('webpack');

module.exports = merge(base, {
  mode: 'development',
  stats: "errors-warnings",
  devServer: {
    contentBase: resolve('../dist'),
    host: 'localhost',
    port: 8000,
    hot: true,
    open: true,
    overlay: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
