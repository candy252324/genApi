/** 首字母大小 */
function upperCaseFirseLetter(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

module.exports = {
  upperCaseFirseLetter,
}
