const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["url-loader?limit=10000", "img-loader"]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
