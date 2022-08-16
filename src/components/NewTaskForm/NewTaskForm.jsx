import { useState } from 'react'
import * as tasksAPI from '../../utilities/tasks-api'


export default function NewTaskForm( {addTask, selectedProperty, selectedRoom} ) {
    const [taskForm, setTaskForm] = useState({
        name: '',
        due: ''
    })



    async function handleSubmit(evt) {
        evt.preventDefault()
        addTask(selectedProperty, selectedRoom, taskForm)
        
        setTaskForm({
            name: '',
            due: ''
        })

    }

    function handleChange(evt) {
        let newTaskForm = {
            ...taskForm,
            [evt.target.name]: evt.target.value
        }
        setTaskForm(newTaskForm)
    }
    
  
    return (
        <form onSubmit={handleSubmit}>
            <label>Task:</label>
            <input type='text' name='task' value={taskForm.task} onChange={handleChange}></input>
            <label>Due:</label>
            <input type='date' name='due' value={taskForm.due} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    );
  }