const assert = require('assert');
const app = require('../../src/app');

describe('\'toweranalytic\' service', () => {
  it('registered the service', () => {
    const service = app.service('toweranalytic');

    assert.ok(service, 'Registered the service');
  });
});
