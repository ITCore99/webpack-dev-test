module.exports =  class P {
    apply(complier) {
      complier.hooks.entryOption.tap('entryOption',() => {
        console.log('我是webpack plugin p 运行时机是 entryOption')
      })
    }
}