import React, { useState } from 'react'

const Todolist = () => {

    const [todolist, setTodolist] = useState([]);
    const addNewTask = (e) => {
        //console.log(e.code);
        if(!e.target.value) return;
        if(e.code == 'Enter'){
            console.log(e.target.value.trim());
            setTodolist([...todolist, {text: e.target.value, completed: false}]);
            e.target.value = " "
            console.log(todolist)
        }
    };
    const deleteTodo = (index) => {
        console.log(index);
        const temp = todolist;
        temp.splice(index,1);
        setTodolist([...temp]);

    };
    const completeTodo = (index)=>{
        const temp = todolist;
        temp[index].completed = true;
        setTodolist([...temp]);
    }
  return (
    <div>
        <div className='container'>
            <p className='display-4  fw-bold text-center'>ToDo List</p>
            <hr />
            <div className='card'>
                <div className='card-header'>
                    <input 
                    onKeyDown={ addNewTask }
                    className='form-control' placeholder='Add Task Here' />
                </div>
                <div className='card-body'>
                    <ul className='list-group'>
                    {todolist.map((obj, index) => {
                        return <li className='list-group-item'>
                            { obj.completed ? <span className='badge text-bg-success'>completed</span> : <span className='badge text-bg-warning'>pending</span>}
                            <h3 style={{textDecoration:obj.completed?'line-through':''}}>{obj.text}</h3>
                            <button onClick = {() =>{deleteTodo(index)}} className='btn btn-danger'>Delete</button>
                            <button onClick={()=>{completeTodo(index)}} className='btn  btn-primary ms-2'>Complete Task</button>
                        </li> })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todolist;