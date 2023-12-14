const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  let res = 0;
  matrix.forEach((el, i) => {
    el.forEach((e, index) => {
      if (e == 0 && i+1 < matrix.length) {
        matrix[i+1][index] = 0;
      }
      res += e;
    });
  });
  return res;
}

module.exports = {
  getMatrixElementsSum
};
