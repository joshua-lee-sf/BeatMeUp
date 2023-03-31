const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
    path.resolve(__dirname, 'src', 'index.scss')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  modules: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s?[ac]ss$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {url: false}
          },
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
};