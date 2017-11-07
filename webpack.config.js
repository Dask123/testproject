/**
 * Created by Пользователь on 10.10.2017.
 */
"use strict";
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const moment = require("moment");
const BUILD_DATETIME = moment().format("DD.MM.YYYY HH:mm");

const NODE_ENV = process.env.NODE_ENV.trim() || "development";

const inDevMode = NODE_ENV == "development";

let plugins = [];

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

const prodPlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: "body",
    filename: inDevMode ? "index.html" : "/index.html"
  }),
  new ExtractTextPlugin({
      filename: 'style.css',
      disable: inDevMode,
      allChunks: true
    }
  ),
  new webpack.DefinePlugin({
    BUILD_DATETIME: JSON.stringify(BUILD_DATETIME),
    "process.env": {
      NODE_ENV: JSON.stringify(NODE_ENV)
    }
  }),
];

plugins = !inDevMode ? prodPlugins : plugins.concat(prodPlugins, devPlugins);

module.exports = {
  devtool: inDevMode && 'cheap-module-eval-source-map',
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: __dirname + (inDevMode ? "/" : "/public/"),
    publicPath: inDevMode ? "/" : "../public/",
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
      ,
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 1010
  }
};

