import { Link } from 'react-router-dom'

import UpdatePropertyForm from '../UpdatePropertyForm/UpdatePropertyForm'

export default function PropertyListItem({house, updateProperty, deleteProperty}) {
    return (
        <>
            { house ?
                <tr>
                    <td><p>{house.name}</p></td>
                    
                    <td><Link to={`/${house._id}`}>ROOMS</Link></td>

                    <td><UpdatePropertyForm house={house} updateProperty={updateProperty}/></td>
                
                    <td><button onClick={() => deleteProperty(house._id)}>DELETE</button></td>
                </tr>
            :
                <p>no homes</p>
            }
        </>
          
    )
}