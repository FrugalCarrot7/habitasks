import {useParams} from 'react-router-dom'
import * as tasksAPI from '../../utilities/tasks-api'
import {useEffect} from 'react'
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm'
import TaskList from '../../components/TaskList/TaskList'


export default function TaskPage( {useState}) {
    const [tasks, setTasks] = useState([])
    const {selectedProperty} = useParams()
    const {selectedRoom} = useParams()

    useEffect(function() {
        async function getTasks(selectedProperty, selectedRoom) {
          const roomTasks = await tasksAPI.getOneRoom(selectedProperty, selectedRoom)
          console.log(roomTasks)
          setTasks(roomTasks)
        }
        getTasks(selectedProperty, selectedRoom)
      }, [])
    

    async function addTask(newTaskProperty, NewTaskRoom, newTaskForm) {
        const newestTasks = await tasksAPI.addATask(
            newTaskProperty, NewTaskRoom, newTaskForm
            )
        console.log(newestTasks)
        
        setTasks([...newestTasks])
    }

    return (
        <main>
            <h1>Tasks</h1>{selectedRoom}
            <TaskList tasks={tasks}/>
            <NewTaskForm addTask={addTask} 
            selectedProperty={selectedProperty} selectedRoom={selectedRoom} />
        </main>
    )
}