const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const jstsRegex = /\.(js|jsx|ts|tsx)$/;

module.exports = {
  mode: "production",
  devtool: false,
  context: path.join(__dirname, "src"),
  entry: "./index.ts",
  output: {
    path: __dirname + "/dist/",
    filename: "rd3g.bundle.js",
  },
  module: {
    rules: [
      {
        test: jstsRegex,
        exclude: /node_modules|sandbox/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "../gen-docs/bundle-analyser-stats.html",
      openAnalyzer: true,
    }),
    new webpack.DefinePlugin({
      rd3gRunningVersion: JSON.stringify(process.env.npm_package_version || "unknown"),
    }),
  ],
};
