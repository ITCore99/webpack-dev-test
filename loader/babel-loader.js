const babel = require('@babel/core')
const loaderUtils = require('loader-utils') 
function loader(source) { // this loader的上下文
  const options = this.query
  console.log('this.resourcePath', this.resourcePath)
  let cb = this.async() // 这是异步的回调 webpack为我们封装
  babel.transform(source, {
    ...options,
    sourceMap: true,
    filename: this.resourcePath
  },function (err, result) {
    console.log('code', result.code)
    cb(err, result.code,  result.map) // 参数1 错误转化错误 参数2 转换之后的代码 参数3 sourceMap
  })
}
module.exports = loader