module.exports =  class P2 {
  apply(complier) {
    complier.hooks.emit.tap('emit', function() {
      console.log('我是webpack plugin 我的运行时机是emit')
    })
  }
}