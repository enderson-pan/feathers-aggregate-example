/* eslint-disable no-unused-vars */
class Service {
  constructor (options, app) {
    this.options = options || {};
    this.app = app || {};
  }

  async find (params) {
    const res = await this.app.service('users').Model
      .aggregate()
      .lookup({
        from: 'towers',
        localField: 'group',
        foreignField: 'group',
        as: 'tower_group'
        }
      );
    return res;
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
