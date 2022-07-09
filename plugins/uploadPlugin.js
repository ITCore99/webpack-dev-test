/**
 * 这是一个打包之后自动上传的插件
 */
class UploadPlugin {
  constructor(options) {
    // 这里的内容不要太在意 就是七牛云的上传API而已
    this.uploadToken = 'xxx'
    this.localFile = "/Users/jemy/Documents/qiniu.mp4";
    const config = {}
    this.formUploader = new qiniu.form_up.FormUploader(config);
    this.putExtra = new qiniu.form_up.PutExtra();
  }
  apply(complier) {
    complier.hooks.afterEmit.tapPromise('UploadPlugin', function(compilcation){
      const assets = compilcation.assets  // 遍历资源进行一个个上传
      const promises = []
      Object.key(assets).forEach(filename => {
        promises.push (this.upload(filename))
      })
      return Promise.all(promises)
    })
  }
  upload(filename) {
    return new Promise((resolve,reject) => {
      formUploader.putFile(this.uploadToken, filename, this.localFile, this.putExtra, function(respErr,
        respBody, respInfo) {
        if (respErr) {
          reject(respErr)
        }
        if (respInfo.statusCode == 200) {
          resolve(respBody)
        }
      })
    })
  }
}
module.exports = UploadPlugin