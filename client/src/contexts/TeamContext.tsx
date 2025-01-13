import { createContext,useState, useContext} from "react";
import axios from "axios";
import AuthContext from "./AuthContext";

interface TeamProp {
    createTeam:(teamName:string) => Promise<void>
    team:[]
}
const TeamContext = createContext<TeamProp | undefined>(undefined)

export const TeamProvider  = ({children}:{children:React.ReactNode}) => {
    const [team, setTeam] = useState<[]>([]);

    const { userId } = useContext(AuthContext) || {};

    const createTeam = async(teamName:string):Promise<void> => {
        try{
            const newTeam = {
                teamName,
                creator:userId
            }
            const res = await axios.post('http://localhost:3000/api/team',newTeam)
            setTeam(res.data)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <TeamContext.Provider value={{
            createTeam,
            team
        }}>
            { children }
        </TeamContext.Provider>
    )
}


export default TeamContext