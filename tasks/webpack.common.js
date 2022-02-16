/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @since 10.02.2022
 * @modify 13-02-2022
 * @version 0.1.0
 */

const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  context: paths.source,

  entry: {
    PrimaryNavigation: {
      import: `./PrimaryNavigation`,
      library: {
        name: 'PrimaryNavigation',
        type: 'umd',
        export: 'default',
        umdNamedDefine: true,
      },
    },

    index: {
      import: `./index`,
      dependOn: ['PrimaryNavigation'],
    }
  },

  output: {
    path: paths.build,
    filename: `[name].js`,
    publicPath: '/',
    clean: true,
  },

  plugins: [
    new webpack.ProgressPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      favicon: `favicon.ico`,
      inject: 'body',
      minify: false
    }),

    new MiniCssExtractPlugin({
      filename: `primary-navigation.css`,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "expanded",
              },
            },
          },
        ],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },

    ],
  },
};
