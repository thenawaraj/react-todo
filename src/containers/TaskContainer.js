import { Task } from "../components/Task";

export const TaskContainer=(props)=>{
return <div className="task-container">
    {/* This is the task conatainer. */}
    <div className="task-container-title">{props.title}</div>
    <div className="task-list">
   
    {props.tasks.map((task,key)=>
    <Task task={task} remove={props.deleteTask}/>
    )};

    </div>
    </div>
    };
