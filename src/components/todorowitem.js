export const Todo=(props)=>{
    return (
            <tr onClick={()=>{
                props.deleteTodo(props.rownumber)
            }}>
               <th scope='row'>{props.rownumber}</th>
               <td>{props.rowdesc}</td>
               <td>{props.rowassigned}</td> 
            </tr>
    )
}