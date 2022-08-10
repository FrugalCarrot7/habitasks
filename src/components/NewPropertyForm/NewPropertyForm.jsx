import { useState } from 'react'
import * as propertiesAPI from '../../utilities/properties-api'

export default function NewPropertyForm() {
    const [propertyForm, setPropertyForm] = useState({
        name: ''
    })


    async function handleSubmit(evt) {
        evt.preventDefault()
        const newProperty = await propertiesAPI.addAProperty(propertyForm)
        console.log(newProperty)
        setPropertyForm({
            name: ''
        })
    }

    function handleChange(evt) {
        let newPropertyForm = {
            ...propertyForm,
            [evt.target.name]: evt.target.value
        }
        setPropertyForm(newPropertyForm)
    }
    
  
    return (
        <form onSubmit={handleSubmit}>
            <label>Property Name:</label>
            <input type='text' name='name' value={propertyForm.name} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    );
  }