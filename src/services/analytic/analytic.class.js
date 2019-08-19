/* eslint-disable no-unused-vars */
class Service {
  constructor (options, app) {
    this.options = options || {};
    this.app = app || {};
  }

  async find (params) {
    if (params.query && params.query.aggregate) {
      const res = await this.app.service('users').Model
        .aggregate()
        .match({
          phone: params.query.aggregate
        })
        .lookup({
            from: 'towers',
            localField: 'group',
            foreignField: 'group',
            as: 'groups_towers'
          }
        );
      return res;
    }

    if (params.query && params.query.populate) {
      const userGroup = await this.app.service('users').find({
        query: {
          phone: params.query.populate
        }
      });

      const { group } = userGroup.data[0];
      const populateRes = await this.app.service('tower').Model
        .find({
          group
        })
        .populate({
          path: 'maintainersInfo bindToDeviceInfo'
        });
      return populateRes;
    }
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options, app) {
  return new Service(options, app);
};

module.exports.Service = Service;
