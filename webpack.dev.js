const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
});