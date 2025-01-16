import { useContext,useState } from "react"
import TeamContext from "@/contexts/TeamContext"

export default function TeamCreation(){
    const [teamName, setTeamName] = useState<string>("")
    const { createTeam } = useContext(TeamContext) || {}

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        try{
            e.preventDefault();
            createTeam!(teamName);
            console.log('tea create sucessfully');
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div>
            <section>
                <h1>Create your team</h1>
            </section>
            <main>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="teamname">Team Name</label>
                    <input
                    type="text" 
                    id="teamname" 
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="My Team"
                    required
                    />
                    <button>create team</button>
                </form>
            </main>
        </div>
    )
}