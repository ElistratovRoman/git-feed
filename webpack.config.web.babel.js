import path from 'path'
import { resolve } from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'


module.exports = {
  entry: [
    resolve(__dirname, './src/app.js'),
    resolve(__dirname, './src/index.html'),
    resolve(__dirname, './src/cache.manifest')
  ],

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.sass', '.html'],
    modules: [resolve('./src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.(html|manifest)$/,
        loader: 'file-loader?name=[name].[ext]',
      },

      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: "css-loader" },

            {
              loader: "sass-loader",
              options: {
                includePaths: [resolve(__dirname, 'src')]
              }
            }
          ]
        })
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new ExtractTextPlugin("styles.css")
  ]
}
