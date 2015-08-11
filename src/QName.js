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
            _localName = QName.normalize(value);
          }
        }
      }
    });
    this.uri = uri;
    this.localName = localName;
  }

  QName.normalize = function(value) {
    if (value === null || value === undefined) value = '';
    return String(value);
  };

  QName.prototype.isEqual = function(qname) {
    return qname && qname.uri === this.uri && qname.localName === this.localName && true;
  };

  QName.prototype.clone = function() {
    return new QName(this.uri, this.localName);
  };

  return QName;
});