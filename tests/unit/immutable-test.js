import Ember from 'ember';
import { module, test } from 'qunit';
import computed, {
  empty
} from 'ember-improved-cp/immutable';

let obj;
module('immutable', {
  beforeEach() {
    obj = {
      first: 'Chad',
      last: 'Hietala'
    };
  }
});

test('macro(...).immutable()', function(assert) {
  let count = 0;

  Ember.defineProperty(obj, 'fullName', computed(function() {
    count++;
    return `${this.first} ${this.last}`;
  }));

  assert.equal(count, 0);
  assert.equal(Ember.get(obj, 'fullName'), 'Chad Hietala');
  assert.equal(count, 1);
  assert.equal(Ember.get(obj, 'fullName'), 'Chad Hietala');
  assert.equal(count, 1);
  // should be readOnly
  assert.throws(function() {
    Ember.set(obj, 'fullName', 'Stefan Penner');
  }, /Cannot set read-only property/);
  assert.equal(count, 1);

  Ember.set(obj, 'first', 'Chad');
  assert.equal(Ember.get(obj, 'fullName'), 'Chad Hietala');
  assert.equal(count, 1);
});

test('empty', function(assert) {
  Ember.defineProperty(obj, 'missingFirst', empty('first'));

  assert.equal(Ember.get(obj, 'missingFirst'), false);
  Ember.set(obj, 'first', '');
  assert.equal(Ember.get(obj, 'missingFirst'), false); // still frozen to the first access.
});
