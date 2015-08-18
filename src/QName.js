/**
 * Created by Oleg Galaburda on 10.08.15.
 */
'use strict';

define('QName', ['Namespace'], function(Namespace) {

  function QName(uri, localName) {
    var _uri;
    var _localName;
    Object.defineProperties(_this, {
      uri: {
        get: function() {
          return _uri;
        },
        set: function(value) {
          if(value instanceof Namespace){
            value = value.uri;
          }
          if (value !== _uri) {
            _uri = Namespace.normalize(value);
          }
        }
      },
      localName: {
        get: function() {
          return _localName;
        },
        set: function(value) {
          if (value !== _localName) {
            _localName = String(value);
          }
        }
      }
    });
    this.uri = uri;
    this.localName = localName;
  }

  QName.prototype.isEqual = function(qname) {
    return Boolean(
      qname && (
        this.uri === null ||
        qname.uri === null ||
        qname.uri === this.uri
      ) &&
      qname.localName === this.localName
    );
  };

  QName.prototype.clone = function() {
    return new QName(this.uri, this.localName);
  };

  return QName;
});