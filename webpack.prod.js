const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const merge = require('webpack-merge').merge
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')
const webpackCommon = require('./webpack.common')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const webpackProd = {
  mode: 'production',

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
      }),
      new CssMinimizerPlugin({
        parallel: 4,
      }),
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: path.resolve(__dirname, 'manifest.json'),
    // }),
    // new AddAssetHtmlPlugin({
    //   filepath: path.resolve(__dirname, './dist/dll.js'),
    // }),
  ],
}
module.exports = merge(webpackCommon, webpackProd)
