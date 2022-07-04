// TODO:  有点复杂暂时未写完
function loader(source) {
  let reg = /url\((.+?)\)/g
  let pos = 0
  let current
  while(current = reg.exec(source)) { // [matchUrl, group]
    const [mathUrl, g] = current
    console.log(55, mathUrl, g)
  }
  return source
}
module.exports = loader