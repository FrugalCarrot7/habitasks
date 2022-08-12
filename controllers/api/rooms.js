const Property = require('../../models/property')

module.exports = {
create,

};

async function create(req, res){
    roomsProperty = Property.findById(req.params.id)
        req.body.user = req.user._id
        console.log(roomsProperty)
        console.log(req.body)
    
}