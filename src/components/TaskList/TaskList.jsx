import TaskListItem from "../TaskListItem/TaskListItem"

export default function TaskList({tasks}) {
    return (
      <>
        <h3>Task List</h3>
        
          <ul>
            {tasks.map((task, idx) => (
              <TaskListItem task = {task} key = {idx} />
            ))}
          </ul>
      </>
      
    )
}