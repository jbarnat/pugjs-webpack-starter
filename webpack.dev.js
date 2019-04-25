const p = require("path")
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: p.join(__dirname, "dist"),
    // publicPath: "",
    historyApiFallback: true,
    compress: false,
    port: 9000,
  }
});
