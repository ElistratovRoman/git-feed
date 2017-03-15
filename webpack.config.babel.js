import { resolve } from 'path'
import webpack from 'webpack'


module.exports = {
  context: resolve(__dirname, 'src'),

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app.js',
    './index.html'
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.sass'],
    modules: [resolve('./src'), 'node_modules']
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },

      { test: /\.sass$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },

          {
            loader: "sass-loader",
            options: {
              includePaths: [resolve(__dirname, 'src')]
            }
          }
      ]},

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NamedModulesPlugin(),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        sassLoader: {
          includePaths: [resolve(__dirname, './src')]
        }
      }
    })
  ]
}