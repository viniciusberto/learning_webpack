const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    print: './src/print.js',
    app: './src/index.js'
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};