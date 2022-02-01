export const Task=(props)=>{
    return <div className="task-card">
    <div className="task-header">   
    <div className="tag-chip">{props.tasks.tag}</div>
    </div>
    <div className="task-title one-line">{props.tasks.title}</div> 
    <div className="task-description two-lines">
        {props.tasks.description}
    </div> 
    </div>
}