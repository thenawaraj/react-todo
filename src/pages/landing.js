import { useState } from "react";
import { AddTask } from "../components/AddTask";
import { Dialog } from "../components/common/Dialog";
import { EditTask } from "../components/EditTask";
import { Nav } from "../components/partials/Nav";
import { TaskContainer } from "../containers/TaskContainer";
import { TASKS } from "../utils/mockdata/tasks";

export const Landing=()=>{


const taskFilterHandler=(value)=>{
    return tasks.filter(v=>v
        .status===value);
    }

    // const tasks=[...TASKS];
    const[tasks,setTasks]=useState([...TASKS])

    // let isAppear=false; //dialog box not show
    // const isAppear=true; //dialog box shown
    const [isAppear ,setIsAppear]=useState(false);
    const toggleAppear=()=>{
    setIsAppear(!isAppear);
    }

    const addTask =(task)=>{
    setTasks([...tasks,task]);
    toggleAppear();
    }

    const deleteTask = (id) => {
        const tempTasks = tasks.filter(v=> v.id !==id);
        setTasks([...tempTasks]);
        }

    const [editAppear,setEditAppear]=useState(false);
    const toggleEditAppear=()=>{
        setEditAppear(!editAppear);
    }

    const editTask=(id)=>{
        const getValue=tasks.filter(v =>v.id===id)[0];
        console.log(getValue);
        toggleEditAppear(); 
        setTaskValue({
            id: getValue.id,
            title:getValue.title,
            description:getValue.description,
            tag:getValue.tag,
            status:getValue.status  
        })
    }

    const [taskValue,setTaskValue]=useState({
        id:'',
        title:'',
        description:'',
        tag:'',
        status:''
    });


    // const updateTask=(id)=>{
    //     let title=title.taskValue;
    //     let description=description.taskValue
    //     let tag=tag.taskValue;
    //     let status=status.taskValue;

    //     const updateTask=tasks.map(v=>{
    //         if(v.id==id){
    //             v.title=title;
    //             v.description=description;
    //             v.tag=tag,
    //             v.status= status;

    //         }
    //     })
        
    // }


    

    <div className=""></div>
// const editTask=(id)=>{
//     toggleAppear();
//     const tempTasks = tasks.find(v=> v.id ===id);
// }

// let editStatus=false;
// const editTask =(id)=>{
//     editStatus=true;
//     {tasks.map((task,) => (
        

// const [editing, setEditing] = useState(false);
// const initialFormState = { 
//         id: -1,
//         title:'',
//         description:'',
//         tag:'',
//         status:'todo'
//     };


 return <> <main>
        {/* This is the landing Screen.  */}
        {/* <nav>
           <div className="logo">Logo</div>
           <div className="nav-items">
               <div className="nav-item">Search</div>
           </div>
        </nav> */}

        <Nav/>

        <section className="home">
        <div className="title-area">
        <div className="section-title">Task Lists</div>
        <div>
        <button className="add-task-btn" onClick={toggleAppear}>Add Task</button>
        </div>
        </div>
        <div className="section-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis commodi autem consequuntur et aperiam, odio magni harum dolorem facilis voluptatibus eos beatae, quisquam iure quod impedit eligendi tempore. Iure, quaerat!
        </div> 

            {/* <div className="task-content"> 
             <div className="task-container">
                        <div className="task-container-title">Todo</div>
                        <div className="task-list"></div>
                </div>
                <div className="task-container">
                    <div className="task-container-title">In Progess</div>
                    <div className="task-list"></div>
                </div>
                <div className="task-container">
                    <div className="task-container-title">Review</div>
                    <div className="task-list"></div>
                </div>
                <div className="task-container">
                    <div className="task-container-title">Completed</div>
                    <div className="task-list"></div>
                </div>
            </div> */}

            <div className="task-content">
            <TaskContainer title="Todo" tasks={taskFilterHandler('todo')} deleteTask={deleteTask} editTask={editTask} />

            <TaskContainer title="In progress" tasks={taskFilterHandler('inProgress')} deleteTask={deleteTask} editTask={editTask} />

            <TaskContainer title="Review"tasks={taskFilterHandler('review')} deleteTask={deleteTask} editTask={editTask} />

            <TaskContainer title="Completed"tasks={taskFilterHandler('completed')} deleteTask={deleteTask} editTask={editTask} />
            </div>
        </section>
    </main>
        
    {isAppear ?  <Dialog closeDialog={toggleAppear}>
     {/* This is the dialog text */}
     <AddTask closeDialog={toggleAppear} addTask={addTask}/>
    </Dialog> : ''}
    
    {editAppear ?  <Dialog closeDialog={toggleEditAppear}>
     {/* This is the dialog text */}
     <EditTask closeDialog={toggleEditAppear} editTask={taskValue}/>
    </Dialog> : ''}
        </>
    };
