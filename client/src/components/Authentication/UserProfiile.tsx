import { useContext } from "react"
import AuthContext from "@/contexts/AuthContext"

interface User {
    name:string,
    email:string,
    username:string,
    roles:string,
    task: [string,string,string],
    team:number
}

export default function UserProfile(){
    const { user } = useContext(AuthContext) || {}

    const demoUser:User[] = [{
        name:'Walon',
        email:"walon@gmail.com",
        username:"walongood",
        roles:'Admin',
        task:['go fetch','get water','get rich'],
        team:4
    }]

    // if(user!.length <= 0){
    //     return(
    //         <div>
    //             <p>Server error</p>
    //         </div>
    //     )
    // }
    return( 
        <div>
            <section>
                <h2>User profile</h2>
            </section>
            <main>
                <div>
                    {demoUser.map(user => (
                        <div key={user.username}>
                            <h1>name: {user.name}</h1>
                            <p>email: {user.email}</p>
                            <h2>username: @{user.username}</h2>
                            <div>
                                <div>
                                    <p>role: {user.roles}</p>
                                </div>
                                <div>
                                    {user.task.map(task => (
                                        <div>
                                            {task}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p>team: {user.team}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}