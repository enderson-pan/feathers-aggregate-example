// Initializes the `tower` service on path `/tower`
const createService = require('feathers-mongoose');
const createModel = require('../../models/tower.model');
const hooks = require('./tower.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
    multi: true
  };

  // Initialize our service with any options it requires
  app.use('/tower', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tower');

  service.hooks(hooks);
};
