import Ember from 'ember';
import NullbaseThemeHandlerMixin from 'nullbase-theme-service/mixins/nullbase-theme-handler';
import { module, test } from 'qunit';

module('Unit | Mixin | nullbase theme handler');

// Replace this with your real tests.
test('it works', function(assert) {
  let NullbaseThemeHandlerObject = Ember.Object.extend(NullbaseThemeHandlerMixin);
  let subject = NullbaseThemeHandlerObject.create();
  assert.ok(subject);
});
