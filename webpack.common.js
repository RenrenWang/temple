const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

module.exports = {
  entry: {
    index: [path.resolve(__dirname, 'src/index.tsx')],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[hash].js',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
    },

    extensions: ['.js', '.json', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
        include: [
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, './node_modules/antd'),
          path.resolve(__dirname, './node_modules/@ant-design/'),
        ],
      },
      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]',
              },
            },
          },
          {
            loader: 'less-loader',
            options: { lessOptions: { javascriptEnabled: true } },
          },
        ],
        include: [
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, './node_modules/antd'),

          path.resolve(__dirname, './node_modules/@ant-design/'),
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
          // 'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/public/index.html'),
    }),
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
    }),
  ],
}
