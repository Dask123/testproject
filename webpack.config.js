/**
 * Created by Пользователь on 10.10.2017.
 */
"use strict";
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: "body"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/
      }
    ],
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        },{
          loader: "css-loader"
        },{
          loader: "less-loader"
        }]
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
    port: 9090
}
};

