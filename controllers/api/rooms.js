const Property = require('../../models/property')

module.exports = {
create,

};

async function create(req, res){
    console.log(`create selectedProp: ${req.params.selectedProperty}`)
    const roomsProperty = await Property.findById(req.params.selectedProperty)
    console.log(req.body)
    if (roomsProperty && roomsProperty.user.equals(req.user._id)) {
        console.log(roomsProperty)
        roomsProperty.room.push(req.body)
        await roomsProperty.save()
        res.json(roomsProperty)
    } else {
        console.log('no property found')
    }
    
    
}