const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let filtered = [];
  let index = -1;
  arr.forEach((el) => {
      if(el != index) filtered.push(el);
  })
  let sortNumber = filtered.sort((a,b) => {
    return a - b ;
  });
  const res = arr.map((v) => {
    if(v == -1) {
        return -1;
    }
    index++;
    return arr = sortNumber[index];
  });
  return res;
}


module.exports = {
  sortByHeight
};
