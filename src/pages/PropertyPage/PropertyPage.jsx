import PropertyList from "../../components/PropertyList/PropertyList"

export default function PropertyPage({user}) {
    return (
        <>
            <h1>{user.name}'s Properties</h1>
            <PropertyList />
            <hr />
            <h2>Create A Property</h2>
            <form>
                <input>name</input>
                <button type="submit">submit</button>
            </form>
        </>
    )
}