import {useParams} from 'react-router-dom'
import * as propertiesAPI from '../../utilities/properties-api'
import * as roomsAPI from '../../utilities/rooms-api'
import {useEffect} from 'react'


export default function TaskPage( {useState}) {
    const [tasks, setTasks] = useState([])
    let {selectedRoom} = useParams()



    return (
        <main>
            <h1>Tasks</h1>{selectedRoom}

        </main>
    )
}