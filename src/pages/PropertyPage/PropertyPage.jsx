import PropertyList from "../../components/PropertyList/PropertyList"

export default function PropertyPage({user}) {
    return (
        <main>
            <h1>{user.name}'s Properties</h1>
            <PropertyList />
            <hr />
            <h2>Create A Property</h2>
        </main>
    )
}