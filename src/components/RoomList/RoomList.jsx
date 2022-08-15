import RoomListItem from "../RoomListItem/RoomListItem"

export default function RoomList({rooms}) {
    return (
      <>
        <h3>Room List</h3>
        
          <ul>
            {rooms.map((room, idx) => (
              <RoomListItem room = {room} key = {idx} />
            ))}
          </ul>
      </>
      
    )
}