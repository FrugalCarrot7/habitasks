import * as propertiesAPI from '../../utilities/properties-api'
import UpdatePropertyForm from '../UpdatePropertyForm/UpdatePropertyForm'

export default function PropertyListItem({house, updateProperty}) {

    async function handleDelete(evt) {
        evt.preventDefault()
        console.log(house._id)
        await propertiesAPI.deleteProperty(house._id)
    }
    return (
        <>
            { house ?
                <div>
                    <p>{house.name}</p>
                    <form onSubmit={handleDelete}>
                        <button type='submit'>End Me</button>
                    </form>
                    <UpdatePropertyForm house={house} updateProperty={updateProperty}/>
                    
                </div>
            :
                <p>no homes</p>
            }
        </>
          
    )
}