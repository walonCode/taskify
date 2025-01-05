import { useState } from "react"
import { Link } from "react-router-dom"


export default function Login(){
    const [username,setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    return(
        <div>
            <div>
                <h1>Login Page</h1>
            </div>
            <main>
                <form >
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
        </div>
    )
}