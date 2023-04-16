const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resObj = {};
  for (let i = 0; i < domains.length ; i++) {
   let arrSplit = domains[i].split('.').reverse();
    for (let x = 0; x < arrSplit.length; x++) {
      let dns = '.' + arrSplit.slice(0, x + 1).join('.');
      if(resObj.hasOwnProperty(dns)) {
        resObj[dns]++;
      } else {
        resObj[dns] = 1;
      }
    }
  }
  return resObj;
}

module.exports = {
  getDNSStats
};
