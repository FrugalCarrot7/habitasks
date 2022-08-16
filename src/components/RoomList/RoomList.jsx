import RoomListItem from "../RoomListItem/RoomListItem"
import Table from 'react-bootstrap/Table';

export default function RoomList({rooms}) {
    return (
      <>
        <h3>Room List</h3>
        
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ROOM</th>
                <th>TASKS</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, idx) => (
                <RoomListItem room = {room} key = {idx} />
              ))}
            </tbody>
          </Table>
      </>
      
    )
}