import { Todo } from "./todorowitem"
export const Todotable=(props)=>{
  
  return (
    <table class="table table-hover">
        <thead>
            <th>Task No.</th>
            <th>Description</th>
            <th>Assigned To</th>
        </thead>
        <tbody>
       {props.todoarray.map(todo=>(
        <Todo key={todo.rownumber} rownumber={todo.rownumber} rowdesc={todo.rowdesc} rowassigned={todo.rowassigned} deleteTodo={props.deleteTodo}/>
       ))}
        </tbody>

    </table>
  )
}