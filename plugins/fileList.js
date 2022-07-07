/**
 * 这是一个文件列表插件 就是将webpack打包出来的文件大小进行统计
 */
class FileListPlugin {
  constructor({ filename }) {
    this.filename = filename
  }
  apply(complier) { // 每一个自定义插件 都需要存在一个apply方法
    complier.hooks.emit.tap('FileListPlugin', (compilcation) => {
      const assets =  compilcation.assets
      let content =  `# 文件名    资源\r\n\r\n`
      Object.entries(assets)
      .forEach(([fileName, statObj]) => {
        // console.log('xxxx=>>>', fileName, statObj)
        content += `- ${fileName}    ${statObj.size()}\r\n`
      })
      assets[this.filename] = {
        source() {
          return content
        },
        size() {
          return content.length
        }
      }
    })
  }
}
module.exports = FileListPlugin