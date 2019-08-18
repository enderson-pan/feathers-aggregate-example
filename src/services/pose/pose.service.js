// Initializes the `pose` service on path `/pose`
const createService = require('feathers-mongoose');
const createModel = require('../../models/pose.model');
const hooks = require('./pose.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
    multi: true
  };

  // Initialize our service with any options it requires
  app.use('/pose', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('pose');

  service.hooks(hooks);
};
