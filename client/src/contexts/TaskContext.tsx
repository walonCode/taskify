import { createContext,useContext,useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";

interface TaskProp {
    createTask:(title:string, description:string) => Promise<void>;
    getTask:(teamId:string)=>Promise<void>;
    task:[]
}

const TaskContext = createContext<TaskProp | undefined>(undefined);

export const TaskProvider = ({children}:{children:React.ReactNode}) => {
    const [task,setTask] = useState<[]>([])

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
            setTask(response.data);
            
        }catch(error){
            console.log(error)
        }
    }

    const getTask = async(teamId:string) => {
        try {
            const res = await axios.get(`http://localhost:3000/api/task/${teamId}`)
            console.log(res.data)
            setTask(res.data)
            console.log('data recieved');
        }catch(error){
            console.log('error occurred',error);
        }
    }


    return(
        <TaskContext.Provider value={{
            createTask,
            getTask,
            task
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;