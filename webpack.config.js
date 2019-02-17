const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',  
  entry: {
      app: ['./src/index.js', './src/app.scss']
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
      hot: true
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          // Babel
          {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
          },
          // CSS
          {
              test: /\.(sa|sc|c)ss$/,
              use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  "sass-loader"
              ]
          }
      ]
  },
  plugins: [
      new CleanWebpackPlugin(['dist']),
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          //both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css" 
      }),
      new HtmlWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
  ]
};