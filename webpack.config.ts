import * as webpack from 'webpack';
import * as path from 'path';
declare var __dirname;

const config: webpack.Configuration = {
  entry: './resources/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  }
};

export default config;

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./resources/assets/js/app.js', './resources/assests/sass/app.scss'],
  output: {
    filename: 'public/js/app.bundle.js'
  },
  module: {

    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'public/css/app.bundle.css',
      allChunks: true,
    }),
  ],
};