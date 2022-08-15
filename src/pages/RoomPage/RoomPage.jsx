import {useParams} from 'react-router-dom'
import * as propertiesAPI from '../../utilities/properties-api'
import * as roomsAPI from '../../utilities/rooms-api'
import {useEffect} from 'react'
import NewRoomForm from '../../components/NewRoomForm/NewRoomForm'
import RoomList from '../../components/RoomList/RoomList'

export default function RoomPage( {useState}) {
    const [rooms, setRooms] = useState([])
    let {selectedProperty} = useParams()

    useEffect(function() {
        async function getRooms(selectedProperty) {
          let propertyRooms = await propertiesAPI.getOneProperty(selectedProperty)
          setRooms(propertyRooms.room)
        }
        getRooms(selectedProperty)
      }, []) 

      async function addRoom(newRoom, newForm) {
        const newestRoom = await roomsAPI.addARoom(newRoom, newForm)
        const arraylength = rooms.length
        const lastRoom = newestRoom.room[arraylength]
        setRooms([...rooms, lastRoom])
      }

    return (
        <main>
            <h1>Rooms</h1>{selectedProperty}
            <RoomList rooms={rooms}/>
            <NewRoomForm addRoom={addRoom} selectedProperty={selectedProperty}/>
        </main>
    )
}