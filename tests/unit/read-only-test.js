import Ember from 'ember';
import { module, test } from 'qunit';
import computed, {
  empty
} from 'ember-improved-cp/read-only';

var obj;
module('readOnly', {
  beforeEach() {
    obj = {
      first: 'Chad',
      last: 'Hietala'
    };
  }
});

test('computed', function(assert) {
  Ember.defineProperty(obj, 'fullName', computed(function() {
    return `${this.first} ${this.last}`;
  }));

  assert.equal(Ember.get(obj, 'fullName'), 'Chad Hietala');
  // should be readOnly
  assert.throws(() => Ember.set(obj, 'fullName', 'Stefan Penner'), /Cannot set read-only property/);

  // should memomize (TODO)
});

test('empty', function(assert) {
  Ember.defineProperty(obj, 'hasFirst', empty('first'));
  assert.equal(Ember.get(obj, 'hasFirst'), false);

  // should be readOnly
  assert.throws(() => Ember.set(obj, 'hasFirst', false), /Cannot set read-only property/);

  Ember.set(obj, 'first', '');
  assert.equal(Ember.get(obj, 'hasFirst'), true);
});
