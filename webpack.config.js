const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const isDevelopment = process.env.NODE_ENV !== 'production';

// const webpack = require('webpack');

module.exports = {
   // mode: isDevelopment ? 'development' : 'production',
   entry: {
      app:'./src/index.jsx'
      // hot: 'webpack/hot/dev-server.js',
      // client:'webpack-dev-sever/client/index.js?hot=true&live-reload=true',
   },
   
   devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
   //   client: false,
   //   hot: false
    },
    plugins: [
       new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
         }),
         // new webpack.HotModuleReplacementPlugin(),
    ],
   
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
      clean: true
   },
   
   resolve: {
      extensions: ['', '.js', '.jsx', '.css', 'scss']
  },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            
            use:[   
            {   
            loader: require.resolve('babel-loader'),
            
            options: {
               // ... other options
               // DO NOT apply the Babel plugin in production mode!
               plugins: [require.resolve('react-refresh/babel')],
             },
            },  
            ],   
         },
         {
            test: /\.s[ac]ss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
      ]
   },
   plugins:[
       new HtmlWebpackPlugin({
            template: path.join(__dirname,'/index.html')
       }),
       new ReactRefreshWebpackPlugin(),
   ]
}