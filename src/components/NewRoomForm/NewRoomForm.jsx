import { useState } from 'react'


export default function NewRoomForm({addRoom, selectedProperty} ) {
    const [roomForm, setRoomForm] = useState({
        name: '',
        size: ''
    })


    async function handleSubmit(evt) {
        evt.preventDefault()
        addRoom(selectedProperty, roomForm)
        
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
        <>
            <h3>CREATE A ROOM</h3>
            <form onSubmit={handleSubmit}>
                <label>Room Name:</label>
                <input type='text' name='name' value={roomForm.name} onChange={handleChange}></input>
                <label>Room Size:</label>
                <input type='number' name='size' value={roomForm.size} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </>
        
    );
  }