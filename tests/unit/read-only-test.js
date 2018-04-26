import { module, test } from 'qunit';
import computed, {
  empty
} from 'ember-improved-cp/read-only';
import { defineProperty } from '@ember/object';
import { get, set } from '@ember/object';

let obj;
module('readOnly', {
  beforeEach() {
    obj = {
      first: 'Chad',
      last: 'Hietala'
    };
  }
});

test('computed', function(assert) {
  defineProperty(obj, 'fullName', computed(function() {
    return `${this.first} ${this.last}`;
  }));

  assert.equal(get(obj, 'fullName'), 'Chad Hietala');
  // should be readOnly
  assert.throws(() => set(obj, 'fullName', 'Stefan Penner'), /Cannot set read-only property/);

  // should memomize (TODO)
});

test('empty', function(assert) {
  defineProperty(obj, 'hasFirst', empty('first'));
  assert.equal(get(obj, 'hasFirst'), false);

  // should be readOnly
  assert.throws(() => set(obj, 'hasFirst', false), /Cannot set read-only property/);

  set(obj, 'first', '');
  assert.equal(get(obj, 'hasFirst'), true);
});
