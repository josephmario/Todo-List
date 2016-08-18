import path from 'path'
import webpack from 'webpack';

export default
{
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/view/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'view'),
        loaders : [ 'react-hot', 'babel' ]
      }
    ]
  },
  resolve: {
    extentions : [ '', '.js' ]
  }
}
