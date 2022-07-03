function loader(source) {
  // 这里使用stringify是为了使css换行变为一行
  const code = `
    let style = document.createElement('style')
    style.innerHTML = ${JSON.stringify(source)} 
    document.head.appendChild(style)
  `
  return code
}
module.exports = loader