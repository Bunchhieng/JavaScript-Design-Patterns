function clone(object) {
  function F() {}
  F.prototype = object;
  return new F;
}

module.exports = clone;
