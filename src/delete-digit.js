const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('')
  let min = Number(arr[0]);
  let iMin = 0;
  if (min >= arr[1]) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        console.log(arr[i])
        min = arr[i];
        iMin = i;
      }
    }
  }
  arr.splice(iMin, 1);
  return Number(arr.join(''))
}

module.exports = {
  deleteDigit
};
