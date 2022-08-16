

export default function TaskListItem({task}) {
    return (
        <>
            { task ?
                <tr>
                    <td><p>{task.task}</p></td>
                    <td><p>{task.due}</p></td>
                </tr>
            :
                <p>no task</p>
            }
        </>
          
    )
}