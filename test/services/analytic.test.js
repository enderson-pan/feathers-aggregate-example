const assert = require('assert');
const app = require('../../src/app');

describe('\'analytic\' service', () => {
  it('registered the service', () => {
    const service = app.service('analytic');

    assert.ok(service, 'Registered the service');
  });
});
