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

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        try{
            e.preventDefault()
            if (password != confirmPassword){
                return toast('make sure your confirm password and password matches')
            }
            await handleRegister!(fullname,username,password,email,roles)
            console.log(roles,fullname,username,password,email)
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
                    required
                    value={fullname}
                    onChange={(e)=>setFullname(e.target.value)}
                    />
                    <label htmlFor="email">email</label>
                    <input type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label htmlFor="username">username</label>
                    <input type="text"
                    id="username"
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <label htmlFor="roles">roles</label>
                    <select value={roles} onChange={(e) => setRoles(e.target.value)} id="roles">
                        <option >default</option>
                        <option value="Admin">Admin</option>
                        <option value="Team Member">Team Member</option>
                        <option value="Viewer">Viewer</option>
                    </select>
                    <label htmlFor="password">password</label>
                    <input type="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="confirm password">confirm password</label>
                    <input type="password"
                    id="confirm password"
                    required
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