import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('single-photo', 'Integration | Component | single photo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{single-photo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#single-photo}}
      template block text
    {{/single-photo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('should not be showing photo', function(assert) {
    // set show photo to false
    this.set('showPhotoDetail', false);
    
    this.render(hbs`{{single-photo}}`);
    
    assert.equal(this.$('div').find('img').length, false, 'not showing photo');
});