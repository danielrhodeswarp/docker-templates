import { moduleFor, test } from 'ember-qunit';

moduleFor('route:cool-new-route', 'Unit | Route | cool new route', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
