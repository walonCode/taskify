import express from 'express'
import { login, reqister } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.route('/register').post(reqister)
userRouter.route('/login').post(login)

export default userRouter