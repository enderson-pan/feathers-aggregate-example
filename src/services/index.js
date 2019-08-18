const users = require('./users/users.service.js');
const tower = require('./tower/tower.service.js');
const pose = require('./pose/pose.service.js');
const analytic = require('./analytic/analytic.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tower);
  app.configure(pose);
  app.configure(analytic);
};
