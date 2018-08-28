var webpack = require('webpack');
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: __dirname,
    //filename: '[chunkhash].js'
    filename: 'bundle.js'
  },
  performance: {
    hints: false
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new CompressionPlugin({
    //   test: /\.js/,
    //   cache: true
    // }),
    new StatsWriterPlugin({
      transform: function (data, opts) {
        return JSON.stringify({
          main: data.assetsByChunkName.main
        }, null, 2);
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};