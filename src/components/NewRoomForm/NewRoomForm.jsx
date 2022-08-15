import { useState } from 'react'
import * as propertiesAPI from '../../utilities/properties-api'

export default function NewRoomForm({addRoom, selectedProperty} ) {
    console.log('above')
    console.log(selectedProperty)
    const [roomForm, setRoomForm] = useState({
        name: '',
        size: ''
    })


    async function handleSubmit(evt) {
        evt.preventDefault()
        addRoom(selectedProperty, roomForm)
        console.log(roomForm)
        
        setRoomForm({
            name: '',
            size: ''
        })

    }

    function handleChange(evt) {
        let newRoomForm = {
            ...roomForm,
            [evt.target.name]: evt.target.value
        }
        setRoomForm(newRoomForm)
    }
    
  
    return (
        <form onSubmit={handleSubmit}>
            <label>Room Name:</label>
            <input type='text' name='name' value={roomForm.name} onChange={handleChange}></input>
            <label>Room Size:</label>
            <input type='number' name='size' value={roomForm.size} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    );
  }