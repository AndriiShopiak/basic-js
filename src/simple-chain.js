const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  simpleChain: [],

  getLength() {
    return this.simpleChain.length;
  },
  addLink( value ) {
    this.simpleChain.push(`( ${value} )`);
    return this;
  },
  removeLink( position ) {
    if (position >= this.getLength() || position < 1 || isNaN(position)) {
      this.simpleChain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.simpleChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.simpleChain.reverse();
    return this;
  },
  finishChain() {
    const res = this.simpleChain.join("~~");
    this.simpleChain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
