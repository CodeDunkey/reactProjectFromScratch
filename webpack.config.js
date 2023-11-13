const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

// const webpack = require('webpack');

module.exports = {
   mode: isDevelopment ? 'development' : 'production',
   entry: {
      app:'./src/index.jsx'
      // hot: 'webpack/hot/dev-server.js',
      // client:'webpack-dev-sever/client/index.js?hot=true&live-reload=true',
   },
   
   devtool: 'inline-source-map',
    devServer: {
      // static: './dist',
      hot: true,
     client: {logging: "error", overlay: true},
   //   hot: false
    },
    plugins: [
       new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
         }),
         // new webpack.HotModuleReplacementPlugin(),
    ],
   
   // output: {
   //    path: path.join(__dirname, '/dist'),
   //    filename: 'bundle.js',
   //    clean: true
   // },
   
   resolve: {
      extensions: ['', '.js', '.jsx', '.css', 'scss']
  },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: path.join(__dirname,'src'),
            use:
            "babel-loader"
            // [   
            // {   
            // loader: require.resolve('babel-loader'),
            
            // options: {
               
            //    plugins: [require.resolve('react-refresh/babel')],
            //  },
            // },  
            // ],   
         },
         {
            test: /\.s[ac]ss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
      ]
   },
   plugins:[
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
            filename: "./index.html",
            template: path.join(__dirname,'/public/index.html')
       }),
      //  new ReactRefreshWebpackPlugin(),
   ].filter(Boolean),
}