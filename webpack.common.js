const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// webpack.config.js  
module.exports = {
    entry: {
      app: './src/index.js',
    },
    plugins: [
      //this makes it so the index.html in src gets bundled to the dist folder.  you should touch nothing in the dist folder as that is all managed by webpack
      new HtmlWebpackPlugin({
        title: 'Production',
        inject: 'body',
        template: './src/index.html',
        filename: 'index.html'
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    experiments: {
        topLevelAwait: true,
      },
  

  module: {  
    rules: [  
      {  
        test: /\.js$/,  
        exclude: /node_modules/,  
        use: {  
          loader: 'babel-loader',  
          options: {  
            presets: ['@babel/preset-env']  
          }  
        }  
      }  
    ]  
  } 
};