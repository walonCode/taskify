import express from 'express'
import { config } from 'dotenv'

const app = express()
config()

app.get('/', (req,res) => {
    res.send('hello')
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

