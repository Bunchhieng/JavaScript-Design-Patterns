// Usage: $('example').addEvent(e, fn).addClass(className);
// Include syntactic sugar to help the development of our interface.
Function.prototype.method = function(name, fn) {
  this.prototype[name] = fn; // Setting up prototype chain
  return this;
};

// Here is the real deal
(function() {
  function _$(els) {
    this.elements = [];
    for (var i = 0, len = els.length; i < len; i++) {
      var element = els[i];
      if (typeof element === 'string') {
        element = document.getElementById(element);
      }
      this.elements.push(element);
    }
  }
  /**
   * Events
   */
  _$.method('addEvent', function(type, fn) {

  }).method('getEvent', function(e) {

  }).method('addClass', function(className) {

  });

  window.installHelper = function(scope, interface) {
    scope[interface] = function() {
      return new _$(arguments);
    }
  }
})();
