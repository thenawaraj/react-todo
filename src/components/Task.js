export const Task=(props)=>{
    return <div className="task-card">
    <div className="icons-area" >
    <div className="boxicons" onClick={()=>props.edit(props.task.id)}><i class='bx bxs-edit'/></div>
    <div className="boxicons"onClick={()=>props.remove(props.task.id)}><i class='bx bx-trash' /></div>    
    </div>
    <div className="task-header">   
    <div className="tag-chip">{props.task.tag}</div>
    </div>
    <div className="task-title one-line">{props.task.title}</div> 
    <div className="task-description two-lines">{props.task.description}</div> 
    </div>
}