import { Dialog } from "./common/Dialog"
import { Task } from "./Task";
import { useState } from "react";
export const AddTask=(props)=>{
    const options = [
        {label:"To do", value:"todo"},
        {label:"In Progress", value:"inProgress"},
        {label:"Review", value:"review"},
        {label:"Completed", value:"completed"},
    ]

    const [task,setTask]= useState({
        id: (new Date()).toISOString(),
        title:'',
        description:'',
        tag:'',
        status:'todo'
    });

    const inputHandler = (e)=>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }

    const createTask=(e)=>{
    e.preventDefault();
    props.addTask(task);
    ;
    
    }


    return <form className="add-task-form" onSubmit={createTask}>
            {/* This is the add task form */}
        <div className="form-title">Add Task</div>
        <div className="form-content">
        <div className="form-input">
        <label>Title</label>
        <input onChange={inputHandler} name="title" type="text" placeholder={'Enter title'}  value={task.title}/>
        </div>
        <div className="form-input">
        <label>Description</label>
        <input  onChange={inputHandler} name="description" type="text" placeholder={'Enter description'} value={task.description}/>
        </div>
        <div className="form-input">
        <label>Tag</label>
        <input onChange={inputHandler} name="tag" type="text" placeholder={'Enter tag'} value={task.tag}/>
        </div>
        
        <div className="form-input">
        <label>Select Status </label>
        <select onChange={inputHandler} name="status" value={task.status}>
        {options.map((v,key)=>
            <option value={v.value} key={key}>
                {v.label}
            </option>
                    )}
        </select>
        </div>
        </div>

        <div className="btn-area">
            <button className="btn primary outline">Close</button>
            <button className="btn primary" type="submit">Add</button>
        </div>
    </form>

    
}