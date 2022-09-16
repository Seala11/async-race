const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    filename: 'index.[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    // assetModuleFilename: 'assets/images/[name][ext]',
    clean: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1,
      //         modules: {
      //           localIdentName: '[name]__[local]___[hash:base64:5]',
      //         },
      //       },
      //     },
      //   ],
      //   include: /\.module\.css$/,
      // },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
      //   exclude: /\.module\.css$/,
      // },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module.css$/,
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src/'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/assets/favicon.ico',
      template: path.resolve(__dirname, './src/index.html'),
      filename: './index.html',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
