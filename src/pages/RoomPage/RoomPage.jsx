import {useParams} from 'react-router-dom'

export default function RoomPage( {useState} ) {
    const [rooms, setRooms] = useState([])
    let {selectedProperty} = useParams()
    return (
        <main>
            <h1>Rooms</h1>{selectedProperty}
        </main>
    )
}