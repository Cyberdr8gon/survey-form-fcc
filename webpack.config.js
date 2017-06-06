// This library allows us to combine paths easily
const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.js'),
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
        {
          test: /\.js/,
          use: {
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }
        },
        {
          test: /\.scss/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.sass/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.css/,
          use: ['style-loader', 'css-loader']
        }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   devServer: {
     contentBase: './src',
     publicPath: '/output'
   } 
};
