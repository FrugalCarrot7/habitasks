import NewPropertyForm from "../../components/NewPropertyForm/NewPropertyForm"
import PropertyList from "../../components/PropertyList/PropertyList"

export default function PropertyPage({user, property, setProperty}) {
    return (
        <>
            <h1>{user.name}'s Properties</h1>
            <PropertyList property = {property} setProperty = {setProperty}/>
            <hr />
            <h2>Create A Property</h2>
            <NewPropertyForm />
        </>
    )
}