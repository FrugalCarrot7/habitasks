const Property = require('../../models/property')

module.exports = {
  index,
  create,
};

async function index(req, res) {
    const property = await Property.find({user : req.user._id})
    // const property = await Property.getAllProperties();
    res.json(property)
}

async function create(req, res) {
  console.log('hit create func')
}
