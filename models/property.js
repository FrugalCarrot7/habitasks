const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true}
  }, {
    timestamps: true
});

propertySchema.statics.getAllProperties = function() {
  return this.find({});
};

module.exports = mongoose.model('Property', propertySchema);