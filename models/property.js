const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name:{type: String, required: true},
  size:{type: Number}
}, {
  timestamps: true
});

const propertySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true},
    room: [roomSchema]
  }, {
    timestamps: true
});

// propertySchema.statics.getAllProperties = function() {
//   return this.find({});
// };

module.exports = mongoose.model('Property', propertySchema);