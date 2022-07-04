/**
 * url-loader 
 * 1、会处理路径 使用file-loader
 * 2、
 * 3、将代码中引入的位置换成新的文件路径
 */
 const mime = require('mime');
 function loader(source) {
   const limit = this.query.limit
   if(limit && limit > source.length) { // 小于限制的话 我们使用base64
    return `module.exports="data:${mime.getType(this.resourcePath)};base64,${source.toString('base64')}"` // 返回一个路径 这里返回的会替换掉index.js中引入路径的'./images/萌妹.jpeg'  import imgSrc from './images/萌妹.jpeg'
   } else { // 否则的话 使用file-loader进行打包
    return require('./file-loader.js').call(this, source)
   }
 }
 loader.raw = true // 将图片文件转化为二进制
 module.exports = loader