import * as propertiesAPI from '../../utilities/properties-api'
import UpdatePropertyForm from '../UpdatePropertyForm/UpdatePropertyForm'

export default function PropertyListItem({house, updateProperty, deleteProperty}) {
    return (
        <>
            { house ?
                <div>
                    <p>{house.name}</p>
                    <form>
                        <button onClick={() => deleteProperty(house._id)}>End Me</button>
                    </form>
                    <UpdatePropertyForm house={house} updateProperty={updateProperty}/>
                    
                </div>
            :
                <p>no homes</p>
            }
        </>
          
    )
}