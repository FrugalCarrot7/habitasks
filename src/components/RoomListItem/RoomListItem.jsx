import {Link} from 'react-router-dom'

export default function RoomListItem({room}) {
    return (
        <>
            { room ?
                <tr>
                    <td><p>{room.name} is {room.size} units big</p></td>
                    <td><Link to={`tasks/${room._id}`}>Tasks</Link></td>   
                </tr>
            :
                <p>no room</p>
            }
        </>
          
    )
}