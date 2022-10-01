const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: './dist',
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Project Demo',
     minify: {
      collapseWhitespace: true
     },
     hash: true,
     template: './src/index.html'
    })
   ]
};