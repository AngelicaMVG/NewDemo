module.exports = {
  context: __dirname,
  entry: './src/client/js/App.js',
  devtool: 'cheap-eveal-source-map',
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?mimetype=image/png'
      }
    ]
  }
};
