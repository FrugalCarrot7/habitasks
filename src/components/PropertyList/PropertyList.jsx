import PropertyListItem from "../PropertyListItem/PropertyListItem";
import Table from 'react-bootstrap/Table';

export default function PropertyList({property, updateProperty, deleteProperty}) {
    return (
      <>
        <h3>Your Propery List</h3>
        
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>PROPERTY NAME</th>
                <th>PROPERTY ROOMS</th>
                <th>UPDATE PROPERTY NAME</th>
                <th>DELETE PROPERTY</th>
              </tr>
            </thead>
            <tbody>
            {property.map((house, idx) => (
              <PropertyListItem house = {house} key = {idx} 
              updateProperty={updateProperty} deleteProperty={deleteProperty}/>
            ))}
            </tbody>
          </Table>
       
        
        
      </>
      
    )
}