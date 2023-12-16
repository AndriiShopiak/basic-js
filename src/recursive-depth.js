const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let max = 0;
    const counter = 1;

    arr.forEach((e) => {
      if (Array.isArray(e)) {  
        max = Math.max(max, this.calculateDepth(e));
      }
    });
    return counter + max;
  }
}

module.exports = {
  DepthCalculator
};
