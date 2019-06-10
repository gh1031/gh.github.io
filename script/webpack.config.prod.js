const base = require('./base');
const merge = require('webpack-merge');

module.exports = merge(base, {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter'
  },
})