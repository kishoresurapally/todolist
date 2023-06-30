import { useState } from "react"
export const Newtodoform=(props)=>{
    const [description,setDescription]=useState('');
    const [assigned,setAssigned]=useState('');
    const submitTodo=(e)=>{
        if(description!=='' && assigned!==''){
            e.preventDefault();
            props.addTask(description,assigned);
            setAssigned('')
            setDescription('')
        }
    }
  return(
    <div className="mt-5">
        <form>
            <div className="mb-3">
                <label className="form-label">Assigned</label>
                <input 
                type='input' className="form-control" required onChange={e=>setAssigned(e.target.value)} value={assigned}>

                </input>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows={3} required onChange={e=>setDescription(e.target.value)} value={description}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitTodo}>Add todo</button>
        </form>
    </div>
  )
}