import PropertyListItem from "../PropertyListItem/PropertyListItem";

export default async function PropertyList({property}) {
    return (
      <>
        <h3>Property List</h3>
        {property.length > 0 ?
          <ul>
            {property.map((house, idx) => (
              <PropertyListItem house = {house} key = {idx} />
            ))}
          </ul>
        :
          <p>no property</p>
        }
        
        
      </>
      
    )
}