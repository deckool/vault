/*! vault.js v1.2.0 | (c) 2014 @toddmotto | https://github.com/toddmotto/vault */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.vault = factory();
  }
})(this, function () {

  'use strict';

  var vault = {};

  vault.set = function (key, value) {
    if (!key || !value) return;
    localStorage[key] = JSON.stringify(value);
  };

  vault.get = function (key) {
    var value = localStorage[key];
    if (!value) return;
    return JSON.parse(value);
  };

  vault.remove = function (key) {
    if (!localStorage[key]) return;
    delete localStorage[key];
  };

  vault.empty = function () {
    for (var key in localStorage) {
      vault.remove(key);
    }
  };

  return vault;

});
