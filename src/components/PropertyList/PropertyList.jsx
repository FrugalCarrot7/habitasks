import PropertyListItem from "../PropertyListItem/PropertyListItem";
import * as propertiesAPI from "../../utilities/properties-api";

export default function PropertyList() {
  propertiesAPI.getAllProperties();
    return (
      <>
        <h3>Property List</h3>
        <PropertyListItem />
      </>
      
    )
}