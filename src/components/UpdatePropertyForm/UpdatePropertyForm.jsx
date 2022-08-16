import { useState } from 'react'
import * as propertiesAPI from '../../utilities/properties-api'

export default function UpdatePropertyForm({house, updateProperty}) {
    const [updatePropertyForm, setUpdatePropertyForm] = useState({
        name: ''
    })


    async function handleSubmit(evt) {
        evt.preventDefault()
        updateProperty(house._id, updatePropertyForm)
        console.log(house._id)
        console.log(updatePropertyForm)
        setUpdatePropertyForm({
            name: ''
        })
    }

    function handleChange(evt) {
        let newUpdatePropertyForm = {
            ...updatePropertyForm,
            [evt.target.name]: evt.target.value
        }
        setUpdatePropertyForm(newUpdatePropertyForm)
    }
    
  
    return (
        <form onSubmit={handleSubmit}>
            <label>Property Name:</label>
            <input type='text' name='name' value={updatePropertyForm.name} onChange={handleChange}></input>
            <button type="submit">UPDATE</button>
        </form>
    );
  }