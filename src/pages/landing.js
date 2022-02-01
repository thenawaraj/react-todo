import { useState } from "react";
import { AddTask } from "../components/AddTask";
import { Dialog } from "../components/common/Dialog";
import { Nav } from "../components/partials/Nav";
import { TaskContainer } from "../containers/TaskContainer";
import { TASKS } from "../utils/mockdata/tasks";

export const Landing=()=>{


const taskFilterHandler=(value)=>{
    return tasks.filter(v=>v
        .status===value);
}

// let isAppear=false; //diaolog box not show
// const isAppear=true; //dialog box shown


const [isAppear ,setIsAppear]=useState(false);

const toggleAppear=()=>{
    setIsAppear(!isAppear);
}



// const tasks=[...TASKS];
const[tasks,setTasks]=useState([...TASKS])

const addTask =(task)=>{
setTasks([...tasks,task]);
toggleAppear();
}



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
            <TaskContainer title="Todo" tasks={taskFilterHandler('todo')}/>
            <TaskContainer title="In progress" tasks={taskFilterHandler('inProgress')}/>
            <TaskContainer title="Review"tasks={taskFilterHandler('review')}/>
            <TaskContainer title="Completed"tasks={taskFilterHandler('completed')}/>
            </div>
        </section>
    </main>
        
    {isAppear ?  <Dialog closeDialog={toggleAppear}>
     {/* This is the dialog text */}
     <AddTask closeDialog={toggleAppear} addTask={addTask}/>
    </Dialog> : ''}
    

        </>
    };
