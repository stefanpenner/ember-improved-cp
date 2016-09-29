# Ember-improved-cp

An addon to provide and experiment with different computed property patterns

### readOnly by default

In most cases, we likely actually want our computed properties to be readOnly.
This was discussed for ember 2.0.0, but due to the potential upgrade pain it
was decided against. In the future this may be reconsidered, but in the interim
we can still benefit from this convention.

Today, we can easily mark any computed property as `readOnly`, but wouldn't it
be nicer if it was the default?

Your in luck, simply import your computer properties and computed macros from
the `ember-improved-cp/read-only` module, and you live in a readOnly by default world.

```js
import computed, {
  readOnly
  empty
  notEmpty
  none
  not
  bool
  match
  equal
  gt
  gte
  lt
  lte
  and
  or
  any
  sum
  min
  max
  map
  sort
  setDiff
  mapBy
  filter
  filterBy
  uniq
  uniqBy
  union
  intersect
  collect
} from 'ember-improved-cp/read-only'
```

One example is providing `defaults` to components via attributes.

```hbs
{{blog-commpent author=user.name}}
```

```js
import Ember from 'ember';
import { or } from 'ember-improved-cp/read-only';

export default Ember.Computed.extend({
  _defaultName: 'Anonymous Coward',
  _name: or('author', '_defaultName')
})

```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-improved-cp`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
