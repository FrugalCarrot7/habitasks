import TaskListItem from "../TaskListItem/TaskListItem"
import Table from 'react-bootstrap/Table';

export default function TaskList({tasks}) {
    return (
      <>
        <h3>Task List</h3>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>TASK</th>
              <th>DUE DATE</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <TaskListItem task = {task} key = {idx} />
            ))}
          </tbody>
        </Table>
      </>
      
    )
}