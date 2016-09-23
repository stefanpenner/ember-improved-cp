import Ember from 'ember';
import immutable from '../immutable';

// monkey patch
Ember.computed(_=> _)['__proto__'].immutable = immutable;
