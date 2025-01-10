import { createContext } from "react";

const TaskContext = createContext({});

export const TaskProvider = ({childern}:{childern:React.ReactNode}) => {
    return(
        <TaskContext.Provider value={{

        }}>
            {childern}
        </TaskContext.Provider>
    )
}

export default TaskContext;