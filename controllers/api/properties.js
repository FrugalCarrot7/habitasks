const Property = require('../../models/property')

module.exports = {
  index,
  create,
  delete: deleteProperty,
  update,
  show,
};

async function index(req, res) {
  stupidReact = req.user.id
  // console.log(`this is user index ${stupidReact}`)
  let property = null
  if(req.user){
    property = await Property.find({user : req.user._id})
    // console.log('there is req.user in index')
  }
    // const property = await Property.getAllProperties();
  res.json(property)
}

async function create(req, res) {
  req.body.user = req.user._id
  // console.log('hit create func')
  // console.log(req.body)
  const newProperty = await Property.create(req.body);
  return res.json(newProperty)
}

async function deleteProperty(req, res) {
  // console.log(req.params.id)
  const delProperty = await Property.findByIdAndRemove(req.params.id);
  // console.log('i want to delete you')

  return res.json(delProperty)
}

async function update(req, res) {
  const updProperty = await Property.findByIdAndUpdate(req.params.id, req.body);
  return res.json(updProperty)
}

async function show(req, res) {
  // console.log('hit show function properties')
  // console.log(req.params.id)
  const oneProperty = await Property.findById(req.params.selectedProperty)
  // console.log(`this is oneProperty.room ${oneProperty.room}`)

  return res.json(oneProperty)

}
