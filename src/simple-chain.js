const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length;
  },

  addLink(value) {
    if (value === undefined) value = '';
    this.chains.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) throw new Error(`You can't remove incorrect link!`);
    if (position < 1 || position > this.chains.length) throw new Error(`You can't remove incorrect link!`);
    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let chainStr = '';
    for (let i = 0; i < this.chains.length; i++) {
      chainStr += `( ${this.chains[i]} )`;
      if (i < this.chains.length - 1) chainStr += '~~';
    }
    this.chains.length = 0;
    return chainStr;
  }
};

module.exports = {
  chainMaker
};
