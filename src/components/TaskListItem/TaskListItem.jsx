

export default function TaskListItem({task}) {
    return (
        <>
            { task ?
                <div>
                    <p>{task.task} is due on {task.due}</p>
                       
                </div>
            :
                <p>no task</p>
            }
        </>
          
    )
}