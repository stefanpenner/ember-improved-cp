import { computed } from '@ember/object';

export default function() {
  return computed(...arguments).readOnly();
}

export const readOnly  = computed.readOnly;
export const empty     = (...args) => computed.empty(...args).readOnly();
export const notEmpty  = (...args) => computed.notEmpty(...args).readOnly();
export const none      = (...args) => computed.none(...args).readOnly();
export const not       = (...args) => computed.not(...args).readOnly();
export const bool      = (...args) => computed.bool(...args).readOnly();
export const match     = (...args) => computed.match(...args).readOnly();
export const equal     = (...args) => computed.equal(...args).readOnly();
export const gt        = (...args) => computed.gt(...args).readOnly();
export const gte       = (...args) => computed.gte(...args).readOnly();
export const lt        = (...args) => computed.lt(...args).readOnly();
export const lte       = (...args) => computed.lte(...args).readOnly();
export const and       = (...args) => computed.and(...args).readOnly();
export const or        = (...args) => computed.or(...args).readOnly();
export const any       = (...args) => computed.any(...args).readOnly();
export const sum       = (...args) => computed.sum(...args).readOnly();
export const min       = (...args) => computed.min(...args).readOnly();
export const max       = (...args) => computed.max(...args).readOnly();
export const map       = (...args) => computed.map(...args).readOnly();
export const sort      = (...args) => computed.sort(...args).readOnly();
export const setDiff   = (...args) => computed.setDiff(...args).readOnly();
export const mapBy     = (...args) => computed.mapBy(...args).readOnly();
export const filter    = (...args) => computed.filter(...args).readOnly();
export const filterBy  = (...args) => computed.filterBy(...args).readOnly();
export const uniq      = (...args) => computed.uniq(...args).readOnly();
export const uniqBy    = (...args) => computed.uniqBy(...args).readOnly();
export const union     = (...args) => computed.union(...args).readOnly();
export const intersect = (...args) => computed.intersect(...args).readOnly();
export const collect   = (...args) => computed.collect(...args).readOnly();
