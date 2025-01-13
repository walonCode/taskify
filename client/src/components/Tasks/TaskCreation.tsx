import { useState,useContext } from "react";
import { ToastContainer,toast } from "react-toastify";
import TaskContext from "@/contexts/TaskContext";

function TaskCreation(){
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>("")

    const { createTask }  = useContext(TaskContext) || {}

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        try{
            e.preventDefault()
            await createTask!(title,description)
            toast('task creation complete')
        }catch(error){
            toast('task creation failed')
            console.log(error)
        }
    }
    return(
        <div>
          <section>
            <div>
                <h1>Create Task</h1>
            </div>
            <main>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    id='title'
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                    <label htmlFor="description">Description</label>
                    <textarea 
                    id="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button>add tasks</button>
                </form>
            </main>
          </section>
          <ToastContainer 
          autoClose={5000}
          hideProgressBar={false}
          position="top-right"
          />  
        </div>
    )
}

export default TaskCreation;