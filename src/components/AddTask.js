import { Dialog } from "./common/Dialog"

export const AddTask=()=>{
    const options = [
        {label:"To do", value:"todo"},
        {label:"In Progress", value:"inProgress"},
        {label:"Review", value:"review"},
        {label:"Completed", value:"completed"},
    ]

    return <form className="add-task-form">
            {/* This is the add task form */}
        <div className="form-title">Add Task</div>
        <div className="form-content">
        <div className="form-input">
        <label>Title</label>
        <input type="text" placeholder="Enter title" name="title"/>
        </div>
        <div className="form-input">
        <label>Description</label>
        <input type="text" placeholder="Enter description" name="descriptioin"/>
        </div>
        <div className="form-input">
        <label>Tag</label>
        <input type="text" placeholder="Enter tag" name="tag"/>
        </div>
        
        <div className="form-input">
        <label>Select Status </label>
        <select className="status">
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
            <button className="btn primary">Add</button>
        </div>
    </form>

    
}