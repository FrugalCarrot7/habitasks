export default function PropertyListItem({house}) {
    return (
        <>
            { house ?
                <div>{house.name}</div>
            :
                <p>no homes</p>
            }
        </>
        
        
    )
}