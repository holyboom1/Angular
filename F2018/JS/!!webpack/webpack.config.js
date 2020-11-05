const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


var NODE_ENV = process.env.NODE_ENV;
console.log(NODE_ENV == 'development');
//console.log(process.env.NODE_ENV=="development");
const config = {



  entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist')
   },

   mode: 'development',
   watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'eval' : 'none',


   module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },

        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
             {
               loader: 'css-loader'
            }
           ],
        },

        {
            test: /\.pug$/,
            use: {
                loader: "pug-loader",
                options: {
                    pretty:true
                },
            }
        },

        {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            minimize: true,
                        }
                    }
                    ,"less-loader"],
            },
      ]
    },


   plugins : [
     new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(NODE_ENV)
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new HtmlWebpackPlugin({
        template: "./src/pug/indexPug.pug",
        filename: "city.html"
    }),
   ]
}

module.exports = config;
