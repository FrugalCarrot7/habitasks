const Property = require('../../models/property')

module.exports = {
  index,
};

// A cart is the unpaid order for a user
async function index(req, res) {
    properties = Property.find({})
    console.log('property index works', properties)
}
