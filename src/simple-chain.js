const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length;
  },
  addLink(value) {
    this._chain.push(String(value));
    return this;
  },
  removeLink(position) {
    const index = position - 1;
    if (index < 0 || index >= this._chain.length || !Number.isInteger(position)) {
      this._chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this._chain.splice(index, 1);
    return this;
  },
  reverseChain() {
    this._chain.reverse();
    return this;
  },
  finishChain() {
    const result = this._chain.map(link => `( ${link} )`).join('~~');
    this._chain = [];
    return result;
  }
};

module.exports = {
  chainMaker,
};
