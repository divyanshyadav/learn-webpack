const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'code splitting',
      template: 'index.html'
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 3,
    })
  ],
  optimization: {
    splitChunks: {
      minChunks: 1,
    }
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: false
};