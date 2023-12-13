const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  let res = email.split("@");
  return res.slice(res.lastIndexOf('.') + 1)[res.length -1];
}

module.exports = {
  getEmailDomain
};
