import { useContext } from "react"
import TeamContext from "@/contexts/TeamContext"

interface Team {
    name:string
    members: number
    task:{
        name:string
        description:string
        status:string
    }
}

export default function ViewTeam(){
    const { team } = useContext(TeamContext) || {}

    const demoTeam:Team[] = [{
        name:'Team1',
        members:30,
        task: {
            name:'Finish Task',
            description:"Build the ui",
            status:'To-Do'
        }
    },{
        name:'Team2',
        members:10,
        task: {
            name:'Finish Task 3',
            description:"Build the Api",
            status:'To-Do'
        }
    },{
        name:'Team3',
        members:20,
        task: {
            name:'Finish Task 4',
            description:"Build the server ",
            status:'Completed'
        }
    }] 

    // if(team!.length <= 0){
    //     return(
    //         <div>
    //             <p>No teams available at the moment</p>
    //         </div>
    //     )
    // }
    return(
        <div>
            {demoTeam.map(team => (
                <div key={team.name}>
                    <h1>Name: {team.name}</h1>
                    <p>team member: {team.members}</p>
                    <div>
                        <h1>team task</h1>
                        <h3>task name: {team.task.name}</h3>
                        <p>description: {team.task.description}</p>
                        <p>status: {team.task.status}</p>
                    </div>
                    <button>join team</button>
                </div>
            ))}
        </div>
    )
}