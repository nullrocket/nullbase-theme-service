import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nullbase-theme-initializer', 'Integration | Component | nullbase theme initializer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nullbase-theme-initializer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nullbase-theme-initializer}}
      template block text
    {{/nullbase-theme-initializer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
