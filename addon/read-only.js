import Ember from 'ember';

const macros = Ember.computed;

export default function computed() {
  return Ember.computed(...arguments).readOnly();
}

export const readOnly  = macros.readOnly;
export const empty     = (...args) => macros.empty(...args).readOnly();
export const notEmpty  = (...args) => macros.notEmpty(...args).readOnly();
export const none      = (...args) => macros.none(...args).readOnly();
export const not       = (...args) => macros.not(...args).readOnly();
export const bool      = (...args) => macros.bool(...args).readOnly();
export const match     = (...args) => macros.match(...args).readOnly();
export const equal     = (...args) => macros.equal(...args).readOnly();
export const gt        = (...args) => macros.gt(...args).readOnly();
export const gte       = (...args) => macros.gte(...args).readOnly();
export const lt        = (...args) => macros.lt(...args).readOnly();
export const lte       = (...args) => macros.lte(...args).readOnly();
export const and       = (...args) => macros.and(...args).readOnly();
export const or        = (...args) => macros.or(...args).readOnly();
export const any       = (...args) => macros.any(...args).readOnly();
export const sum       = (...args) => macros.sum(...args).readOnly();
export const min       = (...args) => macros.min(...args).readOnly();
export const max       = (...args) => macros.max(...args).readOnly();
export const map       = (...args) => macros.map(...args).readOnly();
export const sort      = (...args) => macros.sort(...args).readOnly();
export const setDiff   = (...args) => macros.setDiff(...args).readOnly();
export const mapBy     = (...args) => macros.mapBy(...args).readOnly();
export const filter    = (...args) => macros.filter(...args).readOnly();
export const filterBy  = (...args) => macros.filterBy(...args).readOnly();
export const uniq      = (...args) => macros.uniq(...args).readOnly();
export const uniqBy    = (...args) => macros.uniqBy(...args).readOnly();
export const union     = (...args) => macros.union(...args).readOnly();
export const intersect = (...args) => macros.intersect(...args).readOnly();
export const collect   = (...args) => macros.collect(...args).readOnly();
