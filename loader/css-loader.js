// TODO:  有点复杂暂时未写完
function loader(source) {
  let reg = /url\((.+?)\)/g
  let pos = 0
  let current
  let arr = ['let list = []']
  while(current = reg.exec(source)) { // [matchUrl, group]
    const [mathUrl, g] = current
    console.log(55, mathUrl, g)
    let last = reg.lastIndex - mathUrl.length // 取到url('xxx')之前的所有内容
    arr.push(`list.push(${JSON.stringify(source.slice(pos, last))})`) // JOSN.strify() 为了清除掉换行回车
    pos = reg.lastIndex
    // 把g替换成require的写法
    arr.push(`list.push('url('+requie(${g})+')'`)
  }
  arr.push(`list.push(${JSON.stringify(source.slice(pos))})`) // 将匹配剩下的最后一段进行拼起来
  arr.push(`module.exports=list.join('')`)
  // console.log(666, )
  return arr.join('\r\n')
}
module.exports = loader