const isProd = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const WebpackPlugin = require('./webpack-plugin');
const { resolve } = require('./util');

module.exports = {
  devtool: 'source-map',
  entry: resolve('../src/index.js'),
  output: {
    filename: isProd ? '[name].[contenthash].js' : '[name].[hash].js',
    path: resolve('../dist'),
    publicPath: '/',
    library: 'MyWebsite',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'babel-loader',
              }
            }
          },
        ],
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('../index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ]
}