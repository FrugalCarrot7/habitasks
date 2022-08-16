const Property = require('../../models/property')

module.exports = {
create,
index,

};

async function index(req, res){
    const roomsProperty = await Property.findById(req.params.selectedProperty)
    // console.log(req.params.selectedProperty)
    console.log(req.params.selectedRoom)
    // console.log(roomsProperty)
    let currentRoom = []
    console.log(currentRoom)
    allRooms = roomsProperty.room
    currentRoom = allRooms.find(r => r._id.toString() === req.params.selectedRoom)
    console.log(currentRoom.tasks) 
    
    res.json(currentRoom.tasks)

    
    
}

async function create(req, res){
    const roomsProperty = await Property.findById(req.params.selectedProperty)
    // console.log(req.params.selectedProperty)
    console.log(req.params.selectedRoom)
    // console.log(roomsProperty)
    let currentRoom = []
    console.log(currentRoom)
    allRooms = roomsProperty.room
    currentRoom = allRooms.find(r => r._id.toString() === req.params.selectedRoom)
    console.log(currentRoom)
    currentRoom.tasks.push(req.body)
    console.log(currentRoom)
    roomsProperty.save()

    res.json(currentRoom.tasks)

    
        // console.log('above'),
        // console.log(filteredRoom),
        // console.log('below')
        
    
    // const roomsProperty = await Property.findById(req.params.selectedProperty)
    // if (roomsProperty && roomsProperty.user.equals(req.user._id)) {
    //     const tasksRoom = await roomsProperty.room.findById(req.params.selectedRoom)
    //     console.log(tasksRoom)
    // } else {
    //     console.log('no property found')
    // }
    
    // res.json(tasksRoom)
}
