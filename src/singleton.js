// Singleton as namespace
var Singleton = {};
Singleton.Common = {};
Singleton.ErrorCodes = {};

// Singleton with private member
MyNameSpace.Singleton = (function() {
  // Private members
  var privateAtt = true;

  function privateMethod() {}

  // Public members
  return {
    publicAtt: true,
    function publicMethod: function() {}
  }
})();

// For resource intensive Singleton, to defer the instantiation: use this instead

MyNameSpace.Singleton = (function() {
  var uniqueInstance;

  function constructor() {
    // Private members
    var privateAtt = true;

    function privateMethod() {}
  }
  // Public members
  return {
    getInstance: function() {
      if (!uniqueInstance) {
        uniqueInstance = constructor();
      }
      return uniqueInstance;
    }
  }
})();
