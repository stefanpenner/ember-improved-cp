function makeDescriptor(computed) {
  computed.setup = function(target, keyName) {
    Ember.meta(target)._descs[keyName] = computed;
    Object.defineProperty(target, {
      get() {
        return computed.get(this, keyName);
      }
    })
  };

  return computed;
}
