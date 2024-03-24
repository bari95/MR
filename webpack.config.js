const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // or 'production'
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', // Make sure to include postcss-loader for Tailwind CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // Enable CSS minification
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Serve files from the 'dist' directory
    },
    compress: true, // Enable gzip compression for everything served
    port: 3001, // Specify the port for webpack-dev-server (optional, default is 8080)
    hot: true, // Enable Hot Module Replacement (HMR)
    open: true, // Open the default browser when the server starts
  },
};
