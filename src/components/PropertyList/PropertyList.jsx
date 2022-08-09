import PropertyListItem from "../PropertyListItem/PropertyListItem";
import * as propertiesAPI from "../../utilities/properties-api";

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