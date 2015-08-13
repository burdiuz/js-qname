/**
 * Created by Oleg Galaburda on 10.08.15.
 */
'use strict';

define('QName', [], function() {

  function QName(uri, localName) {
    var _uri;
    var _localName;
    Object.defineProperties(_this, {
      uri: {
        get: function() {
          return _uri;
        },
        set: function(value) {
          if (value !== _uri) {
            _uri = QName.normalize(value);
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

  QName.normalize = function(value) {
    if (value === undefined) value = '';
    else if(value !== null) value = String(value);
    return value;
  };

  Object.defineProperties(QName, {
    ANY_NAMESPACE: {
      value: null,
      writable: false,
      configurable: false
    },
    GLOBAL_NAMESPACE: {
      value: '',
      writable: false,
      configurable: false
    }
  });

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