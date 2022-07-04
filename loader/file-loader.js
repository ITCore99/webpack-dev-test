/**
 * file-loader 主要要实现的内容
 * 1、根据文件的内容生成一个md5
 * 2、发射到dist的目录下
 * 3、将代码中引入的位置换成新的文件路径
 */
const loaderUtils = require('loader-utils')
function loader(source) {
  const filename =loaderUtils.interpolateName(this, '[hash].[ext]', { content: source}) // 根据内容生成符合规则的文件名
  this.emitFile(filename, source) // 将文件发射出去
  return `module.exports="${filename}"` // 返回一个路径 这里返回的会替换掉index.js中引入路径的'./images/萌妹.jpeg'  import imgSrc from './images/萌妹.jpeg'
}
loader.raw = true // 将图片文件转化为二进制
module.exports = loader