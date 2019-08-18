// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const users = new Schema({
    name: { type: String, required: true, },
    phone: { type: String, required: true, unique: true },
    group: { type:String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
