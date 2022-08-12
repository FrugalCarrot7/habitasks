import { Link } from 'react-router-dom'
import * as propertiesAPI from '../../utilities/properties-api'
import UpdatePropertyForm from '../UpdatePropertyForm/UpdatePropertyForm'

export default function PropertyListItem({house, updateProperty, deleteProperty}) {
    return (
        <>
            { house ?
                <div>
                    <p>{house.name}</p>
                    
                    <Link to={`/${house._id}`}>Check Out These Rooms!</Link>
                
                    <button onClick={() => deleteProperty(house._id)}>End Me</button>
                   
                    <UpdatePropertyForm house={house} updateProperty={updateProperty}/>
                    
                </div>
            :
                <p>no homes</p>
            }
        </>
          
    )
}