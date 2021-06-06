const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  entry: {
    js: path.resolve(__dirname, 'assets/js/laundry.ts'),
    css: path.resolve(__dirname, 'assets/scss/main.scss')
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            }
          }
        ]
      },
      {
        test: /\.(svg|woff|woff2|ttf|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'templates/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].bundle.css',
      chunkFilename: '[id].[contenthash].bundle.css'
    }),
  ],
  resolve: {
    alias: {
      LaundryJS: path.resolve(__dirname, 'assets/js'),
      LaundryCSS: path.resolve(__dirname, 'assets/scss')
    },
    extensions: ['.tsx', '.ts', '.js'],
  }
};