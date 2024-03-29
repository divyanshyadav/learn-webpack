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
      maxChunks: 10,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /\.test(.js|)$/,
      contextRegExp: /src$/,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /.*/,
      contextRegExp: /moment\\locale$/,
    }),
    new webpack.IgnorePlugin({
      checkResource(resource, context) {
        console.log({ resource, context });
        // do something with resource
        return false;
      },
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: false
};