import * as propertiesAPI from '../../utilities/properties-api'

export default function PropertyListItem({house}) {

    async function handleDelete() {
        await propertiesAPI.deleteProperty(house._id)
    }
    return (
        <>
            { house ?
                <div>
                    <p>{house.name}</p>
                    <button onClick={handleDelete}>End Me</button>
                </div>
            :
                <p>no homes</p>
            }
        </>
        
        
    )
}