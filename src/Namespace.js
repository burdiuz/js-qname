/**
 * Created by Oleg Galaburda on 14.08.15.
 */

define('Namespace', [], function() {

  function Namespace(uri, prefix) {
    var _uri = Namespace.normalize(uri);
    var _prefix = Namespace.normalize(prefix);
    Object.defineProperties(_this, {
      uri: {
        get: function() {
          return _uri;
        },
        set: function() {}
      },
      prefix: {
        get: function() {
          return _prefix;
        },
        set: function() {}
      }
    });
  }

  Namespace.normalize = function(value) {
    if (value === undefined) value = '';
    else if(value !== null) value = String(value);
    return value;
  };

  Namespace.prototype.toString = function() {
    return this.uri;
  };

  Namespace.prototype.isEqual = function(ns) {
    return Boolean(ns && this.isEqualURI(ns.uri));
  };

  Namespace.prototype.isEqualURI = function(uri) {
    return Boolean(this.uri === null || uri === null || uri === this.uri);
  };

  Object.defineProperties(Namespace, {
    ANY_URI: {
      value: null,
      writable: false,
      configurable: false
    },
    GLOBAL_URI: {
      value: '',
      writable: false,
      configurable: false
    }
  });

  return Namespace;
});