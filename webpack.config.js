<<<<<<< HEAD
var path = require("path");
const webpack = require("webpack"); //访问内置的插件
var HtmlWebpackPlugin = require("html-webpack-plugin");
=======
var path = require('path');
const webpack = require('webpack'); //to access built-in plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
>>>>>>> 2141d569f2241fda7ea241a498a2d8e18589152d

module.exports = {
  entry: "./src/index.js",
  output: {
<<<<<<< HEAD
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [
              require("babel-plugin-transform-object-rest-spread"),
              require("babel-plugin-transform-class-properties")
            ]
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
=======
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
>>>>>>> 2141d569f2241fda7ea241a498a2d8e18589152d
};
