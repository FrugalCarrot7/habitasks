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
                    <form onSubmit={handleDelete}>
                        <button type='submit'>End Me</button>
                    </form>
                    
                </div>
            :
                <p>no homes</p>
            }
        </>
        
        
    )
}