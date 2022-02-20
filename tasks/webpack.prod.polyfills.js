/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @since 10.02.2022
 * @modify 16-02-2022
 * @version 0.1.0
 */

const paths = require('./paths');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: false,

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  context: paths.source,

  entry: {
    "PrimaryNavigation.polyfills": {
      import: `./PrimaryNavigation.js`,
      library: {
        name: 'PrimaryNavigation',
        type: 'umd',
        export: 'default',
        umdNamedDefine: true,
      },
    },
  },

  output: {
    path: paths.build,
    filename: `[name].js`,
    publicPath: '/',
  },

  plugins: [
    new webpack.ProgressPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: {
          and: [/node_modules/],
          not: [/resize-delay/]
        },
        use: {
          "loader": "babel-loader",
          "options": {
            "exclude": [
              // \\ for Windows, \/ for Mac OS and Linux
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/,
            ],
            "presets": [
              ["@babel/preset-env", {
                "debug": true,
                "useBuiltIns": "usage",
                "corejs": 3,
                "modules": false,
                "loose": true,
              }]
            ]
          }
        }
      },
    ],
  },
};
