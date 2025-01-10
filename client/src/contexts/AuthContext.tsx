import { createContext,useState  } from "react";
import axios from 'axios';

interface AuthProp {
    handleLogin:(username:string,password:string) => Promise<void>
    handleRegister:(fullname:string,username:string,password:string,email:string,roles:string) => Promise<void>
}

const AuthContext = createContext<AuthProp | undefined>(undefined)

export const AuthProvider = ({ children }:{children:React.ReactNode}) => {
    const [user,setUser] = useState([])
    const handleLogin = async(username:string,password:string):Promise<void> => {
        try{
            const loginUser = {
                username,
                password
            }
            const res = await axios.post('http://localhost:3000/api/user/login',loginUser)
            setUser(user.concat(res.data))
        }catch(error){
            console.log('Sign in failed',error)
        }
    }

    const handleRegister = async(fullname:string,username:string,password:string,email:string,roles:string):Promise<void> => {
        try{
            const newUser = {
                fullname,
                username,
                email,
                roles,
                password
            }
            const res = await axios.post('http://localhost:3000/api/user/register',newUser)
            console.log(res.data)
        }catch(error){
            console.log('register failed',error)
        }
    }
    return(
        <AuthContext.Provider value={{
            handleLogin,
            handleRegister
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext