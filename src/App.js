//import logo from './logo.svg';
import './App.css';
import { Todo } from './components/todorowitem';
import { Todotable } from './components/todotable';
import React,{useState} from 'react';
import { Newtodoform } from './components/newtodoform';
function App() {
  const [todoarray,settodoarray]=useState([
    {rownumber:1,rowdesc:"feed puppy",rowassigned:"eric"},
    {rownumber:2,rowdesc:"water plants",rowassigned:"eric"},
    {rownumber:3,rowdesc:"get a haircut",rowassigned:"eric"}
  ])
  const addTask=(description,assigned)=>{
    let rownumber=0;
    if(todoarray.length>0){
      rownumber=todoarray[todoarray.length-1].rownumber+1;
    }
    else{
      rownumber=1;
    }
      const newtodo={
        rownumber:rownumber,
        rowdesc:description,
        rowassigned:assigned
      }
     settodoarray(todoarray=>[...todoarray,newtodo])
     // console.log(todoarray);
    }
    const deleteTodo=(deleterownumber)=>{
      let filtered=todoarray.filter(function(value){
        return value.rownumber!==deleterownumber
      })
      console.log(deleterownumber)
       filtered.forEach(myfunc);
       function myfunc(item){
          if(item.rownumber>deleterownumber){
            item.rownumber--;
          }
       }
      settodoarray(filtered);
    }
    const [addnew,setAddnew]=useState(false)
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
       <Todotable todoarray={todoarray} deleteTodo={deleteTodo}/>
       <button type='button' className='btn btn-primary' onClick={e=>setAddnew(!addnew)}>{addnew?'close':'open'}</button>
       <button className='btn btn-primary btn-sm' onClick={addTask}></button>
       {
         addnew &&  <Newtodoform addTask={addTask} />
       }
      
      </div>
    </div> 
  );
}

export default App;
