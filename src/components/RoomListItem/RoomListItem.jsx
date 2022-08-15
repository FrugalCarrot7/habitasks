import {Link} from 'react-router-dom'

export default function RoomListItem({room}) {
    return (
        <>
            { room ?
                <div>
                    <p>{room.name} is {room.size} units big</p>
                    <Link to={`tasks/${room._id}`}>Tasks</Link>   
                </div>
            :
                <p>no room</p>
            }
        </>
          
    )
}