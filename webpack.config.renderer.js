const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const common = require("./webpack.config.common");
module.exports = merge(common, {
  entry: {
    renderer: "./src/renderer/index.tsx"
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/static/index.html",
      chunks: ["renderer"]
    })
  ]
});
