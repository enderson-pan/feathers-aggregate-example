const assert = require('assert');
const app = require('../../src/app');

describe('\'tower\' service', () => {
  it('registered the service', () => {
    const service = app.service('tower');

    assert.ok(service, 'Registered the service');
  });
});
