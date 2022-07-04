const path = require('path')
const P = require('./plugin/p.js')
const P2 = require('./plugin/p2.js')
module.exports = {
  mode: 'development',
  entry: './src/index.js', // 由于路径有问题暂时先这样兼容
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loader')]
  },
  module: {
    rules: [  
      {
        test: /\.less$/,
        use: [
          'style-loader',
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
    new P(),
    new P2()
  ]
}