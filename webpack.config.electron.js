
const merge = require('webpack-merge')
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const common = require('./webpack.config.common');

module.exports = merge(common,{
  entry: {
    main: "./src/main.ts"
  },

  node: {
    __dirname: false,
    __filename: false
  },
  target: "electron-main",
  plugins: [new FriendlyErrorsWebpackPlugin()]
});
