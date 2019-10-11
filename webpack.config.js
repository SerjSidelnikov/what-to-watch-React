const webpack = require(`webpack`);
const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`) // eslint-disable-line
  },
  devServer: {
    contentBase: path.join(__dirname, `public`), // eslint-disable-line
    historyApiFallback: true,
    compress: false,
    port: 1337,
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': `react`,
      'ReactDOM': `react-dom`,
      'PropTypes': `prop-types`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  devtool: `source-map`
};
