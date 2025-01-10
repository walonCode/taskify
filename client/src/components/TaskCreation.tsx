import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";

function TaskCreation(){
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>("")

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        try{
            e.preventDefault()
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