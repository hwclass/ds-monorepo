const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    Benefits: './src/Benefits.jsx',
    BookingWidget: './src/BookingWidget.jsx',
    Footer: './src/Footer.jsx',
    Header: './src/Header.jsx',
    Hero: './src/Hero.jsx',
    Panorama: './src/Panorama.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(),
  ],
  externals: [
    'react',
  ],
};
