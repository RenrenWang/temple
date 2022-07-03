const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  entry: {
    vendors: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: '[name]',
    filename: 'dll.js',
    clean: true,
  },

  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]',
      path: path.join(__dirname, 'manifest.json'),
    }),
  ],
}
