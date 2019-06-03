const base = require('./base');
const merge = require('webpack-merge');

module.exports = merge(base, {
  devServer: {
    host: 'localhost',
    port: 8000,
    hot: true,
    open: true,
  }
});
