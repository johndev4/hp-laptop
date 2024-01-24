const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",
  entry: ["./src/main.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    alias: {
      "@frameZone": path.resolve(__dirname, "vendor/frameZone"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/assets/favicon.svg",
      // scriptLoading: "blocking",
      hash: true,
      chunks: "all",
      chunksSortMode: "auto",
      minify: true,
      cache: false,
      showErrors: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: "css-loader",
          options: {
            exportType: "css-style-sheet",
          },
        },
      },
    ],
  },
};
