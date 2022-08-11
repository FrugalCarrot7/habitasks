import NewPropertyForm from "../../components/NewPropertyForm/NewPropertyForm"
import PropertyList from "../../components/PropertyList/PropertyList"

export default function PropertyPage({user, property}) {
    console.log(`property log: ${property}`)
    return (
        <div>
            { property && property.length > 0 ?

                <>
                    <h1>{user.name}'s Properties</h1>
                    <PropertyList property={property} />
                    <hr />
                    <h2>Create A Property</h2>
                    <NewPropertyForm />
                </>
            :
                <>
                    <h1>{user.name}'s got no property</h1>
                    <NewPropertyForm />
                </>
            }
        </div>
    )
}