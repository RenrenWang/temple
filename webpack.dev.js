const path = require('path')
const webpackCommon = require('./webpack.common')
const merge = require('webpack-merge').merge
const webpack = require('webpack')
const webpackDev = {
  mode: 'development',
  devtool: 'source-map',
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  devServer: {
    // 运行代码的目录
    static: {
      directory: path.join(__dirname, 'dist'),
    },

    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 5000,
    // 域名
    // 自动打开浏览器
    open: true,
    // 开启HMR功能
    hot: true,
    allowedHosts: 'all',
    historyApiFallback: true,

    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
module.exports = merge(webpackCommon, webpackDev)
