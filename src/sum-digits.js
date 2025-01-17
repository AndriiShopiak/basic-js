const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  let res = 0;
  let sum = 0;

  let arrNumbers = n.toString().split("");
  arrNumbers.forEach((el) => {
    res += Number(el);
  });

  if(res.toString().length == 2) {
    let str = res.toString().split("");
    str.forEach((el) => {
      sum += Number(el);
    });
    res = sum;
  }
  return res;
}

module.exports = {
  getSumOfDigits
};
