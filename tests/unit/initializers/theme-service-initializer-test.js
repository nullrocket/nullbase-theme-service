import Ember from 'ember';
import ThemeServiceInitializerInitializer from 'dummy/initializers/theme-service-initializer';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | theme service initializer', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ThemeServiceInitializerInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
