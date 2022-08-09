const Property = require('../../models/property')

module.exports = {
  index,
};

async function index(req, res) {
    const newProperty = await Property.getAllProperties();
    res.json(newProperty)
}
