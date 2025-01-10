import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "@/contexts/AuthContext"
import { toast, ToastContainer } from "react-toastify"


export default function Register(){
    const [username,setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [fullname, setFullname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [roles, setRoles] = useState<string>("")
    
    const { handleRegister } = useContext(AuthContext) || {}

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        try{
            e.preventDefault()
            await handleRegister!(fullname,username,password,email,roles)
            toast('register sucessfully')
        }catch(error){
            toast('register failed')
            console.log("register failed", error)
        }
    }

    return(
        <div>
            <div>
                <h1>Register Page</h1>
            </div>
            <main>
                <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Fullname</label>
                    <input type="text"
                    id="fullname"
                    
                    value={fullname}
                    onChange={(e)=>setFullname(e.target.value)}
                    />
                    <label htmlFor="email">email</label>
                    <input type="email"
                    id="email"
                    
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label htmlFor="username">username</label>
                    <input type="text"
                    id="username"
                    
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <label htmlFor="roles">roles</label>
                    <select value={roles} onChange={(e) => setRoles(e.target.value)} id="role">
                        <option value="Admin">Admin</option>
                        <option value="Team Member">Team Member</option>
                        <option value="Viewer">Viewer</option>
                    </select>
                    <label htmlFor="password">password</label>
                    <input type="password"
                    id="password"
                    
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="confirm password">confirm password</label>
                    <input type="password"
                    id="confirm password"
                    
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                    <button>register</button>
                </form>

            </main>
            <div>
                <p><Link to='/login'>or login to an existing account</Link></p>
            </div>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            />
        </div>
    )
}