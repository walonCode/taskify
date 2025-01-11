import { createContext,useContext,useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";

interface TaskProp {
    createTask:(title:string, description:string) => Promise<void>
}

const TaskContext = createContext<TaskProp | undefined>(undefined);

export const TaskProvider = ({children}:{children:React.ReactNode}) => {
    const [task,setTask] = useState([])

    const { name, userId } = useContext(AuthContext) || {}

    const createTask = async(title:string,description:string):Promise<void> => {
        try{
            const newTask = {
                title,
                description,
                createdBy:name,
                assignedTo:userId
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
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;