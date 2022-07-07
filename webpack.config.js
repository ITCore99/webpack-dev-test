const path = require('path')
const P = require('./plugin/p.js')
const P2 = require('./plugin/p2.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FileListPlugin = require('./plugins/fileList')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const InlineSourcePlugin = require('./plugins/inlineSourcePlugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js', // 由于路径有问题暂时先这样兼容
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loader')],
  },
  module: {
    rules: [  
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader' 
        ]
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.jpeg|jpg|png$/,
        // use: ['file-loader']
        use: {
          loader: 'url-loader',
          options: {
            limit: 200 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new FileListPlugin({
      filename: 'fileList.md'
    }) ,
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new InlineSourcePlugin({
      match: /\.(js|css)$/
    }) 
  ]
}