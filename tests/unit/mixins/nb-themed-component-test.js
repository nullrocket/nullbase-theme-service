import Ember from 'ember';
import NbThemedComponentMixin from 'nullbase-theme-service/mixins/nb-themed-component';
import { module, test } from 'qunit';

module('Unit | Mixin | nb themed component');

// Replace this with your real tests.
test('it works', function(assert) {
  let NbThemedComponentObject = Ember.Object.extend(NbThemedComponentMixin);
  let subject = NbThemedComponentObject.create();
  assert.ok(subject);
});
