const loaderUtils = require('loader-utils')
function loader(source) {
  // 这里使用stringify是为了使css换行变为一行
  const code = `
    let style = document.createElement('style')
    style.innerHTML = ${JSON.stringify(source)} 
    document.head.appendChild(style)
  `
  return code
}
// 暂时未实现 因为loaderUtils中的stringifyRequest方法不存在导致目前暂时没有其他的方法进行 所以暂时注释
// loader.pitch = function(remainRequest) { // 参数剩余的请求
//   // style-loader 处理remainRequest -! 不会让文件 再被pre + normal loader处理 ！不会让normal处理  !!什么都不要处理
//   // require 返回的就是css-loader处理
//   const str = `
//   let style = document.createElement('style')
//   style.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + remainRequest)})
//   document.head.appendChild(style)
// `
// return str
// }
module.exports = loader