import Ember from 'ember';
import immutable from './lib/immutable';

const macros = Ember.computed;

export default function(...args) {
  return immutable.call(Ember.computed(...args));
}

export const empty     = (...args) => immutable.call(macros.empty(...args));
export const notEmpty  = (...args) => immutable.call(macros.notEmpty(...args));
export const none      = (...args) => immutable.call(macros.none(...args));
export const not       = (...args) => immutable.call(macros.not(...args));
export const bool      = (...args) => immutable.call(macros.bool(...args));
export const match     = (...args) => immutable.call(macros.match(...args));
export const equal     = (...args) => immutable.call(macros.equal(...args));
export const gt        = (...args) => immutable.call(macros.gt(...args));
export const gte       = (...args) => immutable.call(macros.gte(...args));
export const lt        = (...args) => immutable.call(macros.lt(...args));
export const lte       = (...args) => immutable.call(macros.lte(...args));
export const readOnly  = (...args) => immutable.call(macros.readOnly(...args));
export const and       = (...args) => immutable.call(macros.and(...args));
export const or        = (...args) => immutable.call(macros.or(...args));
export const any       = (...args) => immutable.call(macros.any(...args));
export const sum       = (...args) => immutable.call(macros.sum(...args));
export const min       = (...args) => immutable.call(macros.min(...args));
export const max       = (...args) => immutable.call(macros.max(...args));
export const map       = (...args) => immutable.call(macros.map(...args));
export const sort      = (...args) => immutable.call(macros.sort(...args));
export const setDiff   = (...args) => immutable.call(macros.setDiff(...args));
export const mapBy     = (...args) => immutable.call(macros.mapBy(...args));
export const filter    = (...args) => immutable.call(macros.filter(...args));
export const filterBy  = (...args) => immutable.call(macros.filterBy(...args));
export const uniq      = (...args) => immutable.call(macros.uniq(...args));
export const uniqBy    = (...args) => immutable.call(macros.uniqBy(...args));
export const union     = (...args) => immutable.call(macros.union(...args));
export const intersect = (...args) => immutable.call(macros.intersect(...args));
export const collect   = (...args) => immutable.call(macros.collect(...args));
