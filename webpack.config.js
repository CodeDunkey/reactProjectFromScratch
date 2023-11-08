const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: './src/index.jsx',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['', '.js', '.jsx', '.css']
  },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
      ]
   },
   plugins:[
       new HtmlWebpackPlugin({
            template: path.join(__dirname,'/index.html')
       }) 
   ]
}