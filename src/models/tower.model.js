// tower-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const tower = new Schema({
    name: { type: String, required: true, unique: true },
    group: { type: String, required: true },
    bindToDevice: { type: String, required: true } // Device IMEI
  }, {
    timestamps: true
  });

  return mongooseClient.model('tower', tower);
};
