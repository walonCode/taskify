import express from 'express'
import { config } from 'dotenv'
import cookieParse from 'cookie-parser'
import corsOptions from './configs/corsOptions.js'
import cors from 'cors'
import connectDB from './configs/connectDB.js'
import userRouter from './routes/userRoute.js'
import taskRouter from './routes/taskRoute.js'
import teamRouter from './routes/teamRoute.js'
import fs from 'fs'
import { Server } from 'socket.io'
import http from 'http'

const app = express()

//initializing socket.io
const server  = http.createServer(app);
const io = new Server(server)

const data = fs.readFileSync('./templates/static/server.html','utf-8')

config()
connectDB()

//middlewares
app.use(cookieParse())
app.use(express.json())
app.use(express.static('./templates'))
app.use(cors(corsOptions))


//home routes
app.get('/', (req,res) => {
    res.send(data)
})

//login and register route
app.use('/api/user',userRouter)

//delete,update,get,update task route
app.use('api/task',taskRouter)

//create and adding member to a team route
app.use('api/team',teamRouter)

// listening to the socket
io.on('connection',(socket) => {
    console.log('a user is connected');

    socket.on('message', (msg) => {
        console.log('Message recieved:',msg)
    });
    io.emit('message',msg);

    socket.on('disconnect',()=>{
        console.log('A user dsiconnected');
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

