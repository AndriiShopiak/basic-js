const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length >= 2) {
      let res = "";
      for (let i = 0; i < str.length; i++) {
          let count = 1;
          while (str[i] === str[i+1]) {
              count++;
              i++;
          }
      res += count === 1 ? "" + str[i] : count + str[i];
      }
      return res;
  } else {
      return str.length === 0 ? "" : str[0];
    }
}

module.exports = {
  encodeLine
};
