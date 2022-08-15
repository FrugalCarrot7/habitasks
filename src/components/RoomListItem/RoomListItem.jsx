export default function RoomListItem({room}) {
    return (
        <>
            { room ?
                <div>
                    <p>{room.name} is {room.size} units big</p>   
                </div>
            :
                <p>no room</p>
            }
        </>
          
    )
}