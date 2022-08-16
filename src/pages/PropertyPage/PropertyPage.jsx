import NewPropertyForm from "../../components/NewPropertyForm/NewPropertyForm"
import PropertyList from "../../components/PropertyList/PropertyList"

export default function PropertyPage({user, property, addProperty, updateProperty, deleteProperty}) {
    return (
        <div>
            { property && property.length > 0 ?

                <>
                    <h1>Welcome {user.name}</h1>
                    <PropertyList property={property} updateProperty={updateProperty} deleteProperty={deleteProperty}/>
                    <hr />
                    <h2>Create A Property</h2>
                    <NewPropertyForm addProperty={addProperty}/>
                </>
            :
                <>
                    <h1>{user.name}'s got no property</h1>
                    <sub>Please Create A Property</sub>
                    <NewPropertyForm addProperty={addProperty}/>
                </>
            }
        </div>
    )
}