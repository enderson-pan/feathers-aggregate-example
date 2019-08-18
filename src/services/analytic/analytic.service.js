// Initializes the `analytic` service on path `/analytic`
const createService = require('./analytic.class.js');
const hooks = require('./analytic.hooks');

module.exports = function (app) {

  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/analytic', createService(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('analytic');

  service.hooks(hooks);
};
