let PROD = process.argv.indexOf('-p') >= 0;

let path = require("path");
let webpack = require("webpack");

module.exports = {
  entry: {
    'NODE': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: PROD ? '[name].min.js' : '[name].js',
    library: 'NODE',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      }
    ]
  }
};
