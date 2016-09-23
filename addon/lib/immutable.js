import Ember from 'ember';

export default function immutable() {
  this.volatile();
  this.readOnly();
  this._getter = cachedGetter(this._getter);
  this._oldGetter = this._getter;
  this._setter = null;

  return this;
}

function UNDEFINED() {}

function cachedGetter(getter) {
  return function(keyName) {
    var meta = Ember.meta(this);
    var cache = meta.writableCache();
    var cachedValue = cache[keyName];

    if (cachedValue === UNDEFINED) {
      return undefined;
    } else if (cachedValue !== undefined) {
      return cachedValue;
    }

    var value = getter.call(this, keyName);

    if (value === undefined) {
      cache[keyName] = UNDEFINED;
    } else {
      cache[keyName] = value;
    }
    return value;
  };
}

