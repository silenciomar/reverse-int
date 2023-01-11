module.exports = function reverse (n) {
  n = Math.abs(n);
  n = n.toString().split('').reverse().join('')
  if(n.endsWith("0")) {
    n.substring(1, n.length)
  }
  return Number(n)
}
