const assert = require('assert');
const app = require('../../src/app');

describe('\'pose\' service', () => {
  it('registered the service', () => {
    const service = app.service('pose');

    assert.ok(service, 'Registered the service');
  });
});
