const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    // An order belongs to a user
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true}
  }, {
    timestamps: true
});