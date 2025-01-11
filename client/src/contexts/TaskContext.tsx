import { createContext,useContext,useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";

interface TaskProp {
    createTask:(title:string, description:string) => Promise<void>
}

const TaskContext = createContext<TaskProp | undefined>(undefined);

export const TaskProvider = ({childern}:{childern:React.ReactNode}) => {
    const [task,setTask] = useState([])

    const createTask = async(title:string,description:string):Promise<void> => {
        try{
            const newTask = {
                title,
                description
            }
            const response = await axios.post('http://localhost:3000/api/task/',newTask)
            setTask(task.concat(response.data));
            
        }catch(error){
            console.log(error)
        }
    }
    return(
        <TaskContext.Provider value={{
            createTask
        }}>
            {childern}
        </TaskContext.Provider>
    )
}

export default TaskContext;