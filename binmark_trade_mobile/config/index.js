"use strict";
const path = require("path");
module.exports = {
  dev: {
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      '/API': {
        target: "http://192.168.16.51:8080/",
        changeOrigin: true
      }
    },
    host: '127.0.0.1',
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: "cheap-module-eval-source-map",
    cacheBusting: true,
    cssSourceMap: true
  },
  build: {
    index: path.resolve(__dirname, "../dist/index.html"),
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    productionSourceMap: true,
    devtool: "#source-map",
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
