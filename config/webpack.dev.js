const paths = require("./paths");

const Webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

let proxy = {};

if (process.env.REACT_APP_LOCAL_DEV) {
  proxy = {
    // USE THIS FIELD TOGETHER WITH THE PROCESSENV TO SETUP CUSTOM PROXY FOR BACKEND
    // "/api/**": {
    //   target: "https://www.somebackend.com/",
    //   secure: false,
    //   changeOrigin: true
    // },
  };
}

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  stats: "errors-only",
  devServer: {
    historyApiFallback: true,
    static: paths.build,
    open: true,
    compress: true,
    hot: true,
    watchFiles: ["src/**/*.js"],
    proxy,
    port: 3000,
  },
  plugins: [
    // HOT RELOADING
    new Webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(common, devConfig);
