require('./index.less')
const str = require('./a.js')
console.log(str)
const arrowFn = () => {
  console.log('我箭头函数')
}
arrowFn()
import imgSrc from './images/mengmei.jpeg'
let img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)