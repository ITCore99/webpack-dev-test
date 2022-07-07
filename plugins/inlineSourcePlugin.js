/**
 * 把外联的标签变成内联的形式
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
class InlineSourcePlugin {
  constructor({ match }) {
    this.match = match
  }
  apply(compiler) {
    // 要通过htmlWebpackPlugin来实现这个功能(借助这个插件给我们提供的钩子函数)
    compiler.hooks.compilation.tap('InlineSourcePlugin', (compilcation) => {
      HtmlWebpackPlugin.getHooks(compilcation).alterAssetTagGroups.tapAsync(
        'alterAssetTagGroups', // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          // Manipulate the content
          // 处理标签
          data = this.processTags(data, compilcation)
          // console.log('data=>',data)
          cb(null, data)   // Tell webpack to move on
        }
      )
    })
  }
  // 处理引入标签的数据
  processTags(data, compilcation) {
    
    let headTags = []
    let bodyTags = []
    data.headTags.forEach(headTag => {
      headTags.push(this.processTag(headTag, compilcation))
    })
    data.bodyTags.forEach(bodyTag => {
      bodyTags.push(this.processTag(bodyTag, compilcation))
    })
    return { ...data, headTags, bodyTags} // 覆盖掉之前的headTags 和 bodyTags
  }
  processTag(tag, compilation) {
    let newTag, url
    if(tag.tagName === 'link' && this.match.test(tag.attributes.href)) {
      url = tag.attributes.href
      newTag = {
        tagName: 'style',
        attributes: { rel: 'stylesheet' }
      }
    }
    if(tag.tagName === 'script' && this.match.test(tag.attributes.src)) { // 这里有个问题 插入到head中立即执行的函数  如果你操作了dom是没法获取到dom的
      url = tag.attributes.src
      newTag = {
        tagName: 'script',
        attributes: { async: true, type: undefined }
      }
    }
    if(url) {
      newTag.innerHTML = compilation.assets[url].source()
      delete compilation.assets[url] // 删除掉原有的资源 避免又生成文件
      return newTag
    }
    return tag
  }
}
module.exports = InlineSourcePlugin