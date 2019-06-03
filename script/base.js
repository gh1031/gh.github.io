const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
    mode: isProd ? 'production' : 'development',
    devtool: 'source-map',
    entry: resolve('../src/index.js'),
    output: {
      filename: '[name].js',
      path: resolve('../dist'),
      library: 'MyWebsite',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          // use: [
          //   {
          //     loader: 'vue-loader',
          //     options: {
          //       loaders: {
          //         js: 'babel-loader',
          //       }
          //     }
          //   },
          // ],
          use: 'vue-loader',
        },
        {
          test: /\.js$/,
          use: ['babel-loader'],
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: resolve('../index.html')
      }),
    ]
  }