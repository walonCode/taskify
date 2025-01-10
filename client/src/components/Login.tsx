import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "@/contexts/AuthContext"
import { toast, ToastContainer} from 'react-toastify';


export default function Login(){
    const [username,setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { handleLogin } = useContext(AuthContext) || {}

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        try {
            e.preventDefault()
            await handleLogin!(username,password)
            toast('login successfull')
        }catch(error){
            toast('login failed')
            console.log(error)
        }
    }

    return(
        <div>
            <div>
                <h1>Login Page</h1>
            </div>
            <main>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="username">username</label>
                    <input type="text"
                    id="username"
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <label htmlFor="password">password</label>
                    <input type="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <p><Link to='/forgetpassword'>...forgot password</Link></p>
                    <button>login</button>
                </form>

            </main>
            <div>
                <p><Link to='/register'>or create an account</Link></p>
            </div>
            <ToastContainer
            autoClose={5000}
            hideProgressBar={false}
            position="top-right"
            />
        </div>
    )
}