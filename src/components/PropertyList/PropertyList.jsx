import PropertyListItem from "../PropertyListItem/PropertyListItem";

export default function PropertyList({property, updateProperty}) {
    return (
      <>
        <h3>Property List</h3>
        
          <ul>
            {property.map((house, idx) => (
              <PropertyListItem house = {house} key = {idx} updateProperty={updateProperty}/>
            ))}
          </ul>
       
        
        
      </>
      
    )
}