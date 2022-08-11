const Property = require('../../models/property')

module.exports = {
  index,
  create,
  delete: deleteProperty,
  update,
};

async function index(req, res) {
  console.log(`this is user index ${req.user}`)
  let property = null
  if(req.user._id){
    property = await Property.find({user : req.user._id})
  }
    // const property = await Property.getAllProperties();
  res.json(property)
}

async function create(req, res) {
  req.body.user = req.user._id
  console.log('hit create func')
  console.log(req.body)
  const newProperty = await Property.create(req.body);
  return res.json(newProperty)
}

async function deleteProperty(req, res) {
  console.log(req.params.id)
  const delProperty = await Property.findByIdAndRemove(req.params.id);
  console.log('i want to delete you')

  return res.json(delProperty)
}

async function update(req, res) {
  console.log('works')
  const updProperty = await Property.findByIdAndUpdate(req.params.id, req.body);
  return res.json(updProperty)
}
