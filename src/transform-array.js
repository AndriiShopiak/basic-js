const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (Array.isArray(arr) == false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  let index = 0;
  while (index <= arr.length -1){
    if(arr[index] == "--double-next") {
      if (arr[index + 1]) {
        res.push(arr[index + 1]);
      }
    }
    else if(arr[index] == "--discard-next") {
      index += 1;
    }
    else if(arr[index] == "--double-prev") {
      if (arr[index - 1] && arr[index - 2] !== "--discard-next"){
        res.push(arr[index - 1]);
      }
    }
    else if(arr[index] == "--discard-prev") {
      if(arr[index - 2] !== "--discard-next"){
        res.pop();
      }
    }
    else {
      res.push(arr[index]);
    }
    index += 1;
  }
  return res;
}

module.exports = {
  transform
};
