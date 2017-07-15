var path = require('path');
const webpack = require('webpack'); //to access built-in plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[file].map'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({sourceMap:true}),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    //Plugin生成sourcemap
  //   new webpack.SourceMapDevToolPlugin({
  //     filename: '[name].js.map',
  //     exclude: ['vendor.js']
  //   })
  ],
  devtool: 'source-map'
};
