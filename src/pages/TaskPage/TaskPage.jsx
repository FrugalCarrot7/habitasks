import {useParams} from 'react-router-dom'
import * as tasksAPI from '../../utilities/tasks-api'

import {useEffect} from 'react'
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm'


export default function TaskPage( {useState}) {
    const [tasks, setTasks] = useState([])
    const {selectedProperty} = useParams()
    const {selectedRoom} = useParams()

    useEffect(function() {
        async function getTasks(selectedProperty, selectedRoom) {
          const roomTasks = await tasksAPI.getOneRoom(selectedProperty, selectedRoom)
          setTasks([])
        }
        getTasks()
      }, [])
    

    async function addTask(newTaskProperty, NewTaskRoom, newTaskForm) {
        const newestTask = await tasksAPI.addATask(
            newTaskProperty, NewTaskRoom, newTaskForm
            )
        console.log(newestTask)
        
        setTasks([...tasks])
    }

    return (
        <main>
            <h1>Tasks</h1>{selectedRoom}
            <NewTaskForm addTask={addTask} 
            selectedProperty={selectedProperty} selectedRoom={selectedRoom} />
        </main>
    )
}