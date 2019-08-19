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
    maintainers: [{ type: String }],
    bindToDevice: { type: String, required: true}
  }, {
    timestamps: true,
    toJSON: {
      virtuals: true
    },
    toObject: {
      virutals: true
    }
  });
  // ref only support objectId, so use virtual instead.
  tower.virtual('maintainersInfo', {
    ref: 'users',
    localField: 'maintainers',
    foreignField: 'phone'
  });
  tower.virtual('bindToDeviceInfo', {
    ref: 'pose',
    localField: 'bindToDevice',
    foreignField: 'deviceIMEI'
  });

  return mongooseClient.model('tower', tower);
};
