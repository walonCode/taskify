import express from 'express'
import { config } from 'dotenv'
import cookieParse from 'cookie-parser'
import corsOptions from './configs/corsOptions.js'
import cors from 'cors'
import connectDB from './configs/connectDB.js'
import userRouter from './routes/userRoute.js'
import taskRouter from './routes/taskRoute.js'

const app = express()

config()
connectDB()

//middlewares
app.use(cookieParse())
app.use(express.json())
app.use(express.static('./templates'))
app.use(cors(corsOptions))


//home routes
app.get('/', (req,res) => {
    res.send('hello')
})

//login and register route
app.use('/api/user',userRouter)

//delete,update,get,update task
app.use('api/task',taskRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

