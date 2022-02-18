const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//had to get rid fo this htmlwebpackplugin or html file gets wiped and regenerated each time with one line formatting


// webpack.config.js  
module.exports = {
    entry: {
      app: './src/index.js',
    },
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     title: 'Production',
    //   }),
    // ],
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